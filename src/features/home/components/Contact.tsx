'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Contact() {
  const ref = useIntersectionObserver<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Show loading state
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success state
      setIsSuccess(true);
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="contact animate-on-scroll" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let&apos;s discuss how I can help bring your ideas to life.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let&apos;s Work Together</h3>
            <p>I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Email</div>
                  <div style={{ color: 'var(--gray)' }}>nghi@example.com</div>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Phone</div>
                  <div style={{ color: 'var(--gray)' }}>+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Location</div>
                  <div style={{ color: 'var(--gray)' }}>San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ 
                  width: '100%',
                  background: isSuccess ? '#10b981' : '',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="loader" style={{ width: '20px', height: '20px', margin: 0 }} />
                ) : isSuccess ? (
                  <>✅ Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ marginLeft: '4px' }}
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22,2 15,22 11,13 2,9 22,2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
