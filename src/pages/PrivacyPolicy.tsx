import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, Clock, Phone, Mail, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white hover:text-yellow-200 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
              <p className="text-lg sm:text-xl text-white/80 mt-2">Kalra Packers & Movers</p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-3xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 text-blue-800">
              <Clock size={16} />
              <span className="font-medium">Last Updated: September 23, 2025</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Kalra Packers & Movers, we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you use our services or visit our website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the data practices described in this policy. 
                We encourage you to read this policy carefully to understand our practices.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <UserCheck size={20} className="text-primary" />
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Current and destination addresses</li>
                  <li>Identity proof and address verification documents</li>
                  <li>Payment information and billing details</li>
                  <li>Inventory details and special requirements</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Database size={20} className="text-primary" />
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Location data when services are requested</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Delivery:</strong> To provide moving and packing services as requested</li>
                <li><strong>Communication:</strong> To contact you regarding your move, updates, and support</li>
                <li><strong>Planning:</strong> To plan and execute your relocation efficiently</li>
                <li><strong>Payment Processing:</strong> To process payments and maintain billing records</li>
                <li><strong>Quality Improvement:</strong> To improve our services and customer experience</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and regulations</li>
                <li><strong>Marketing:</strong> To send promotional offers and moving tips (with your consent)</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>4.1 Service Providers:</strong> We may share information with trusted third-party service providers who assist in our operations (e.g., insurance companies, logistics partners).</p>
                <p><strong>4.2 Legal Requirements:</strong> We may disclose information when required by law, court order, or government regulations.</p>
                <p><strong>4.3 Business Transfers:</strong> In case of merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
                <p><strong>4.4 Consent:</strong> We may share information with your explicit consent for specific purposes.</p>
                <p><strong>4.5 Protection:</strong> We may disclose information to protect our rights, property, or safety, or that of our customers or others.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> We never sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock size={24} className="text-primary" />
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Secure data transmission using SSL encryption</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure storage of physical and digital records</li>
                <li>Regular backup and disaster recovery procedures</li>
                <li>Compliance with industry security standards</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the internet 
                or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>6.1 Access:</strong> You have the right to access and review your personal information we hold.</p>
                <p><strong>6.2 Correction:</strong> You can request correction of inaccurate or incomplete information.</p>
                <p><strong>6.3 Deletion:</strong> You may request deletion of your personal information, subject to legal requirements.</p>
                <p><strong>6.4 Opt-out:</strong> You can opt-out of marketing communications at any time.</p>
                <p><strong>6.5 Data Portability:</strong> You can request a copy of your data in a structured format.</p>
                <p><strong>6.6 Withdrawal:</strong> You can withdraw consent for processing where consent is the legal basis.</p>
              </div>
            </section>

            {/* Cookies Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage patterns</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide ongoing services and support</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records and audit trails</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Typically, we retain customer information for 7 years after the completion of services, 
                unless a longer retention period is required by law.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review the privacy 
                policies of any third-party websites you visit.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the updated policy on our website with a new effective date. 
                We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone size={18} className="text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p>+91-7292010102</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail size={18} className="text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>mail@kalrapackersmovers.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Shield size={18} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p>474, Plot, Block-C, Sector 6 Dwarka, New Delhi, Delhi, 110075</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-white rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Your Privacy is Our Priority</h3>
            <p className="text-lg mb-6 text-white/90">
              Move with confidence knowing your information is secure with us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;