import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Clock, Phone, Mail } from "lucide-react";

const TermsOfService = () => {
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Terms of Service</h1>
              <p className="text-lg sm:text-xl text-white/80 mt-2">Kalra Packers & Movers</p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-3xl">
            Please read these terms and conditions carefully before using our services.
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
                Welcome to Kalra Packers & Movers. These Terms of Service ("Terms") govern your use of our 
                moving and packing services. By engaging our services, you agree to be bound by these terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kalra Packers & Movers is a professional moving company providing relocation services 
                across India. We are committed to providing safe, reliable, and efficient moving solutions.
              </p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Offered</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Residential relocation and home shifting</li>
                <li>Office and commercial relocation</li>
                <li>Vehicle transportation (car and bike relocation)</li>
                <li>Professional packing and unpacking services</li>
                <li>Warehouse and storage solutions</li>
                <li>Loading and unloading services</li>
                <li>Insurance coverage for goods in transit</li>
              </ul>
            </section>

            {/* Booking and Payment */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>3.1 Booking:</strong> All bookings must be confirmed with an advance payment. Verbal agreements are subject to written confirmation.</p>
                <p><strong>3.2 Payment:</strong> Payment terms will be specified in your service agreement. We accept cash, cheque, and digital payments.</p>
                <p><strong>3.3 Cancellation:</strong> Cancellations must be made at least 24 hours before the scheduled move date. Cancellation charges may apply.</p>
                <p><strong>3.4 Pricing:</strong> All prices are subject to change based on actual volume, distance, and additional services required.</p>
              </div>
            </section>

            {/* Customer Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Customer Responsibilities</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>4.1 Inventory Declaration:</strong> Customers must provide accurate inventory details and declare valuable items.</p>
                <p><strong>4.2 Prohibited Items:</strong> Hazardous materials, illegal substances, perishable items, and plants cannot be transported.</p>
                <p><strong>4.3 Access:</strong> Customers must ensure proper access to both pickup and delivery locations.</p>
                <p><strong>4.4 Documentation:</strong> Valid identification and address proof must be provided.</p>
                <p><strong>4.5 Preparation:</strong> Items should be ready for packing/pickup at the scheduled time.</p>
              </div>
            </section>

            {/* Liability and Insurance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability and Insurance</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>5.1 Insurance Coverage:</strong> Transit insurance is available and recommended for valuable items.</p>
                <p><strong>5.2 Damage Claims:</strong> Any damage or loss must be reported within 24 hours of delivery.</p>
                <p><strong>5.3 Limitation of Liability:</strong> Our liability is limited to the declared value of goods or insurance coverage amount.</p>
                <p><strong>5.4 Force Majeure:</strong> We are not liable for delays due to natural disasters, strikes, or other uncontrollable circumstances.</p>
              </div>
            </section>

            {/* Service Standards */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Standards</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>6.1 Professional Team:</strong> Our trained professionals handle your belongings with utmost care.</p>
                <p><strong>6.2 Quality Materials:</strong> We use high-quality packing materials to ensure safety of your goods.</p>
                <p><strong>6.3 Timely Service:</strong> We strive to complete moves within the agreed timeframe.</p>
                <p><strong>6.4 Customer Support:</strong> 24/7 customer support is available for assistance and tracking.</p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In case of any disputes, we encourage customers to first contact our customer service team. 
                We are committed to resolving issues amicably and promptly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any legal disputes will be subject to the jurisdiction of Delhi courts and governed by Indian laws.
              </p>
            </section>

            {/* Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Kalra Packers & Movers reserves the right to update these terms at any time. 
                Updated terms will be posted on our website and will be effective immediately upon posting.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone size={16} className="text-primary" />
                    <span>+91-7292010102</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={16} className="text-primary" />
                    <span>support@kalrapackersmovers.in</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <Shield size={16} className="text-primary mt-1" />
                    <span>474, Plot, Block-C, Sector 6 Dwarka, New Delhi, Delhi, 110075</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-white rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Move with Confidence?</h3>
            <p className="text-lg mb-6 text-white/90">
              Now that you understand our terms, let's plan your perfect move.
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

export default TermsOfService;