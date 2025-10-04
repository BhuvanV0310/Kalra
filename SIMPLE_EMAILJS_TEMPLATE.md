# Simple EmailJS Template

Use this simple template for your new contact form with just phone number and message.

## Subject Line:
```
New Message from Kalra Packers & Movers Website
```

## Email Template (HTML):
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
  <!-- Header -->
  <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">New Message</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Kalra Packers & Movers</p>
  </div>
  
  <!-- Main Content -->
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="margin-bottom: 20px;">
      <p style="color: #333; font-size: 16px; margin: 0;">
        A new message has been received from your website. Please respond as soon as possible.
      </p>
    </div>
    
    <!-- Contact Details -->
    <div style="margin: 25px 0; padding: 20px; border: 2px dashed #e5e7eb; border-radius: 8px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h3>
      
      <div style="color: #374151; margin-bottom: 15px;">
        <strong style="color: #1f2937;">Phone:</strong> 
        <span style="margin-left: 8px;">{{user_phone}}</span>
      </div>
    </div>
    
    <!-- Message -->
    <div style="margin: 25px 0; padding: 20px; border: 2px dashed #e5e7eb; border-radius: 8px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
      <div style="color: #374151; line-height: 1.6; white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 6px;">{{user_message}}</div>
    </div>
    
    <!-- Call to Action -->
    <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px; text-align: center;">
      <p style="color: #92400e; margin: 0; font-weight: 600;">
        📞 Contact the customer at the phone number provided above!
      </p>
    </div>
  </div>
  
  <!-- Footer -->
  <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
    <p style="margin: 0;">This email was generated from the Kalra Packers & Movers website contact form.</p>
    <p style="margin: 5px 0 0 0;">© 2025 Kalra Packers & Movers. All rights reserved.</p>
  </div>
</div>
```

## Plain Text Version (Fallback):
```
New Message - Kalra Packers & Movers

A new message has been received from your website.

CONTACT INFORMATION:
Phone: {{user_phone}}

MESSAGE:
{{user_message}}

Please contact the customer at the phone number provided above.

---
This email was generated from the Kalra Packers & Movers website.
```

## Template Variables Used:
- `{{user_phone}}` - Customer's phone number
- `{{user_message}}` - Customer's message

## Instructions:
1. Copy the HTML template above
2. Go to your EmailJS dashboard
3. Edit your existing template or create a new one
4. Paste the HTML template in the content area
5. Set the subject line as shown above
6. Save and test the template