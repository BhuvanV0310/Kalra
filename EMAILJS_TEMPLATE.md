# Updated EmailJS Template

Use this HTML template in your EmailJS dashboard to match the current contact form:

## Subject Line:
```
New Quote Request from {{user_name}} - Kalra Packers & Movers
```

## Email Template (HTML):
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
  <!-- Header -->
  <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Kalra Packers & Movers</p>
  </div>
  
  <!-- Main Content -->
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="margin-bottom: 20px;">
      <p style="color: #333; font-size: 16px; margin: 0;">
        A new quote request has been received from <strong>{{user_name}}</strong>. 
        Please respond at your earliest convenience.
      </p>
    </div>
    
    <!-- Customer Details -->
    <div style="margin: 25px 0; padding: 20px; border: 2px dashed #e5e7eb; border-radius: 8px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Customer Details</h3>
      
      <div style="display: grid; gap: 12px;">
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Name:</strong> 
          <span style="margin-left: 8px;">{{user_name}}</span>
        </div>
        
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Email:</strong> 
          <span style="margin-left: 8px;">{{user_email}}</span>
        </div>
        
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Phone:</strong> 
          <span style="margin-left: 8px;">{{user_phone}}</span>
        </div>
      </div>
    </div>
    
    <!-- Moving Details -->
    <div style="margin: 25px 0; padding: 20px; border: 2px dashed #e5e7eb; border-radius: 8px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Moving Details</h3>
      
      <div style="display: grid; gap: 12px;">
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Moving From:</strong> 
          <span style="margin-left: 8px;">{{moving_from}}</span>
        </div>
        
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Moving To:</strong> 
          <span style="margin-left: 8px;">{{moving_to}}</span>
        </div>
        
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Preferred Date:</strong> 
          <span style="margin-left: 8px;">{{moving_date}}</span>
        </div>
        
        <div style="color: #374151;">
          <strong style="color: #1f2937;">Service Type:</strong> 
          <span style="margin-left: 8px;">{{service_type}}</span>
        </div>
      </div>
    </div>
    
    <!-- Additional Details -->
    <div style="margin: 25px 0; padding: 20px; border: 2px dashed #e5e7eb; border-radius: 8px; background-color: #f8fafc;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Additional Details</h3>
      <div style="color: #374151; line-height: 1.6; white-space: pre-wrap;">{{additional_details}}</div>
    </div>
    
    <!-- Call to Action -->
    <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px; text-align: center;">
      <p style="color: #92400e; margin: 0; font-weight: 600;">
        📞 Contact the customer as soon as possible to provide a quote!
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
New Quote Request - Kalra Packers & Movers

A new quote request has been received from {{user_name}}.

CUSTOMER DETAILS:
Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}

MOVING DETAILS:
Moving From: {{moving_from}}
Moving To: {{moving_to}}
Preferred Date: {{moving_date}}
Service Type: {{service_type}}

ADDITIONAL DETAILS:
{{additional_details}}

Please contact the customer as soon as possible to provide a quote.

---
This email was generated from the Kalra Packers & Movers website.
```

## Instructions:
1. Copy the HTML template above
2. Go to your EmailJS dashboard
3. Edit your existing template or create a new one
4. Paste the HTML template in the content area
5. Set the subject line as shown above
6. Save and test the template