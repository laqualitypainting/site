import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5, color: '#333' }}>
      <h2 style={{ color: '#1a73e8' }}>New Message from Your Contact Form</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>

      <div style={{
        marginTop: '1em',
        padding: '1em',
        border: '1px solid #ddd',
        borderRadius: '8px',
        background: '#f9f9f9'
      }}>
        <p style={{ margin: 0 }}>{message}</p>
      </div>

      <p style={{ fontSize: '12px', marginTop: '2em', color: '#888' }}>
        This message was sent from your website’s contact form.
      </p>
    </div>
  );
}