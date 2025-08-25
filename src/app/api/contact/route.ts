import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import EmailLog from '@/lib/models/EmailLog';
import EmailService from '@/lib/emailService';

import { validateEmail, sanitizeInput, getClientInfo } from '@/lib/util';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'One or more fields exceed maximum length' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email.toLowerCase()),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Get client information
    const { ip, userAgent } = getClientInfo(request);

    // Connect to database
    await connectToDatabase();

    // Check for rate limiting (optional: prevent spam)
    const recentEmails = await EmailLog.countDocuments({
      email: sanitizedData.email,
      sentAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) } // Last hour
    });

    if (recentEmails >= 5) {
      return NextResponse.json(
        { error: 'Too many emails sent. Please try again later.' },
        { status: 429 }
      );
    }

    // Initialize email service
    const emailService = new EmailService();

    // Verify email service connection
    const isEmailServiceReady = await emailService.verifyConnection();
    if (!isEmailServiceReady) {
      throw new Error('Email service is not available');
    }

    let emailLog;
    
    try {
      // Send email
      await emailService.sendEmail(sanitizedData);

      // Log successful email
      emailLog = new EmailLog({
        ...sanitizedData,
        status: 'sent',
        ipAddress: ip,
        userAgent: userAgent,
      });

      await emailLog.save();

      return NextResponse.json(
        { 
          message: 'Email sent successfully',
          id: emailLog._id 
        },
        { status: 200 }
      );

    } catch (emailError) {
      // Log failed email attempt
      emailLog = new EmailLog({
        ...sanitizedData,
        status: 'failed',
        errorMessage: emailError instanceof Error ? emailError.message : 'Unknown error',
        ipAddress: ip,
        userAgent: userAgent,
      });

      await emailLog.save();

      console.error('Email sending failed:', emailError);
      
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}