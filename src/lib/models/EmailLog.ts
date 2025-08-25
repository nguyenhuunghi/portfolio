// EmailLog.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IEmailLog extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: Date;
  status: 'sent' | 'failed';
  errorMessage?: string;
  ipAddress?: string;
  userAgent?: string;
}

const EmailLogSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    maxlength: 255
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000
  },
  sentAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['sent', 'failed'],
    required: true
  },
  errorMessage: {
    type: String,
    maxlength: 500
  },
  ipAddress: {
    type: String,
    maxlength: 45
  },
  userAgent: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
EmailLogSchema.index({ email: 1 });
EmailLogSchema.index({ sentAt: -1 });
EmailLogSchema.index({ status: 1 });

export default mongoose.models.EmailLog || mongoose.model<IEmailLog>('EmailLog', EmailLogSchema);