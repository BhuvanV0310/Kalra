# EmailJS Setup Guide for Kalra Packers & Movers

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your email provider
5. Test the service and note down the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Quote Request from {{user_name}}

Hello Kalra Packers & Movers Team,

You have received a new quote request:

Customer Details:
- Name: {{user_name}}
- Email: {{user_email}}
- Mobile: {{user_mobile}}

Moving Details:
- From: {{moving_from}}
- To: {{moving_to}}
- Preferred Date: {{moving_date}}

Additional Details:
{{additional_details}}

Please contact the customer as soon as possible.

Best regards,
Website Contact Form
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" section in EmailJS dashboard
2. Find your **Public Key** (User ID)

## Step 5: Update Configuration
1. Create a `.env.local` file in your project root
2. Add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Setup
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the quote form
4. Check your email inbox for the test message

## Important Notes:
- Free plan allows 200 emails/month
- For production, consider upgrading to a paid plan
- Always keep your credentials secure
- Test thoroughly before going live

## Troubleshooting:
- Check console for any error messages
- Verify all credentials are correct
- Ensure email service is properly configured
- Check spam folder for test emails