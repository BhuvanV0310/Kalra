/* 
EMAILJS TEMPLATE CODE
Copy this HTML code into your EmailJS template dashboard
*/

// SUBJECT LINE:
New Contact from Kalra Packers & Movers Website

// EMAIL TEMPLATE (HTML):
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
  <!-- Header -->
  <div style="background-color: #1e40af; color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">📞 New Contact Request</h1>
    <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 16px;">Kalra Packers & Movers</p>
  </div>
  
  <!-- Main Content -->
  <div style="background-color: white; padding: 35px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="margin-bottom: 25px;">
      <p style="color: #333; font-size: 18px; margin: 0; line-height: 1.6;">
        You have received a new contact request from your website. Please respond as soon as possible.
      </p>
    </div>
    
    <!-- Phone Number -->
    <div style="margin: 30px 0; padding: 25px; border: 2px solid #e5e7eb; border-radius: 10px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 20px; font-weight: bold;">📱 Contact Number</h3>
      <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af;">
        <span style="font-size: 20px; font-weight: bold; color: #1f2937;">{{user_phone}}</span>
      </div>
    </div>
    
    <!-- Message -->
    <div style="margin: 30px 0; padding: 25px; border: 2px solid #e5e7eb; border-radius: 10px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 20px; font-weight: bold;">💬 Customer Message</h3>
      <div style="background-color: white; padding: 20px; border-radius: 8px; line-height: 1.7; font-size: 16px; color: #374151; white-space: pre-wrap; border-left: 4px solid #10b981;">{{user_message}}</div>
    </div>
    
    <!-- Call to Action -->
    <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%); border-radius: 10px; text-align: center; border: 2px solid #f59e0b;">
      <p style="color: #92400e; margin: 0; font-weight: bold; font-size: 18px;">
        🚀 Contact the customer immediately at: {{user_phone}}
      </p>
      <p style="color: #b45309; margin: 10px 0 0 0; font-size: 14px;">
        Quick response leads to better customer satisfaction!
      </p>
    </div>
  </div>
  
  <!-- Footer -->
  <div style="text-align: center; margin-top: 25px; color: #6b7280; font-size: 13px;">
    <p style="margin: 0;">📧 This email was automatically generated from kalrapackersmovers.in</p>
    <p style="margin: 8px 0 0 0;">© 2025 Kalra Packers & Movers. All rights reserved.</p>
  </div>
</div>

/* 
PLAIN TEXT VERSION (Fallback):
Use this if HTML doesn't work
*/

New Contact Request - Kalra Packers & Movers

You have received a new contact request from your website.

PHONE NUMBER: {{user_phone}}

MESSAGE:
{{user_message}}

Please contact the customer immediately at the phone number above.

---
This email was generated from kalrapackersmovers.in
© 2025 Kalra Packers & Movers

/* 
EMAILJS DASHBOARD SETUP:
1. Go to https://dashboard.emailjs.com/
2. Login to your account
3. Go to "Email Templates"
4. Edit your existing template or create new one
5. Copy the HTML code above into the template
6. Use subject line: "New Contact from Kalra Packers & Movers Website"
7. Make sure these variables are available: {{user_phone}} and {{user_message}}
8. Save and test
*/