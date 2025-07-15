
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12 bg-slate-900/50 backdrop-blur-sm">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7bf66d10-a2b6-42b2-564d68a6ad6e.png" 
            alt="CommunityBuild Logo" 
            className="h-10 w-auto bg-white/90 rounded-lg p-1"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            CommunityBuild FZE LLC
          </span>
        </Link>
        <Link to="/">
          <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8">
            Last updated: December 2024
          </p>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 mb-8">
            <p className="text-gray-200">
              At CommunityBuild FZE LLC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Web3 community building services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-purple-200">1.1 Personal Information</h3>
            <p className="text-gray-200 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Name, email address, and contact information</li>
              <li>• Company or organization details</li>
              <li>• Wallet addresses and blockchain identifiers</li>
              <li>• Profile information and preferences</li>
              <li>• Communication history and support requests</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">1.2 Technical Information</h3>
            <p className="text-gray-200 mb-4">
              We automatically collect certain technical information, including:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Device information (IP address, browser type, operating system)</li>
              <li>• Usage data and analytics</li>
              <li>• Cookies and similar tracking technologies</li>
              <li>• Blockchain transaction data (when applicable)</li>
              <li>• Log files and error reports</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">1.3 Community Data</h3>
            <p className="text-gray-200 mb-4">
              When you participate in communities we manage:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Messages and content you post</li>
              <li>• Engagement metrics and activity patterns</li>
              <li>• Token holdings and governance participation</li>
              <li>• Event attendance and participation records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-purple-200">2.1 Service Provision</h3>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Provide and maintain our Web3 community services</li>
              <li>• Process transactions and manage smart contracts</li>
              <li>• Facilitate community governance and token distribution</li>
              <li>• Deliver personalized content and recommendations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">2.2 Communication</h3>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Send important service updates and notifications</li>
              <li>• Respond to inquiries and provide customer support</li>
              <li>• Share educational content and industry insights</li>
              <li>• Notify about governance proposals and voting opportunities</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">2.3 Improvement and Analytics</h3>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Analyze usage patterns to improve our services</li>
              <li>• Conduct research and development</li>
              <li>• Monitor system performance and security</li>
              <li>• Generate anonymized reports and insights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">3. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-purple-200">3.1 Third-Party Service Providers</h3>
            <p className="text-gray-200 mb-4">
              We may share your information with trusted third parties who assist us in:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Cloud hosting and data storage</li>
              <li>• Analytics and performance monitoring</li>
              <li>• Payment processing and KYC verification</li>
              <li>• Communication and marketing tools</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">3.2 Legal Requirements</h3>
            <p className="text-gray-200 mb-4">
              We may disclose your information when required by law or to:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Comply with legal processes and regulations</li>
              <li>• Protect our rights and property</li>
              <li>• Ensure user safety and prevent fraud</li>
              <li>• Cooperate with law enforcement investigations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">3.3 Business Transfers</h3>
            <p className="text-gray-200 mb-4">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to equivalent privacy protections.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">4. Data Security and Protection</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-purple-200">4.1 Security Measures</h3>
            <p className="text-gray-200 mb-4">
              We implement comprehensive security measures including:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• End-to-end encryption for sensitive data</li>
              <li>• Multi-signature wallet security</li>
              <li>• Regular security audits and penetration testing</li>
              <li>• Access controls and authentication protocols</li>
              <li>• Secure data centers with 24/7 monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">4.2 Data Retention</h3>
            <p className="text-gray-200 mb-4">
              We retain your information only as long as necessary for:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Providing our services and maintaining your account</li>
              <li>• Complying with legal and regulatory requirements</li>
              <li>• Resolving disputes and enforcing agreements</li>
              <li>• Improving our services and preventing fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">5. Your Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-purple-200">5.1 Access and Control</h3>
            <p className="text-gray-200 mb-4">
              You have the right to:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Access and review your personal information</li>
              <li>• Update or correct inaccurate data</li>
              <li>• Request deletion of your data (subject to legal requirements)</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Request data portability in standard formats</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-purple-200">5.2 Blockchain Considerations</h3>
            <p className="text-gray-200 mb-4">
              Please note that information recorded on public blockchains cannot be deleted or modified due to the immutable nature of blockchain technology. This includes:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Transaction records and smart contract interactions</li>
              <li>• Token transfers and governance votes</li>
              <li>• Public addresses and associated activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">6. International Data Transfers</h2>
            <p className="text-gray-200 mb-4">
              As a UAE-registered company, we may transfer your data internationally to provide our global services. We ensure adequate protection through:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Standard contractual clauses approved by regulatory authorities</li>
              <li>• Adequacy decisions for data transfers to approved countries</li>
              <li>• Binding corporate rules and privacy frameworks</li>
              <li>• Regular compliance audits and assessments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-200 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Remember your preferences and settings</li>
              <li>• Analyze website traffic and user behavior</li>
              <li>• Personalize content and advertisements</li>
              <li>• Provide social media features and integrations</li>
            </ul>
            <p className="text-gray-200 mb-4">
              You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">8. Children's Privacy</h2>
            <p className="text-gray-200 mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">9. Updates to This Policy</h2>
            <p className="text-gray-200 mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will:
            </p>
            <ul className="text-gray-200 mb-4 pl-6">
              <li>• Notify you of material changes via email or platform notifications</li>
              <li>• Post the updated policy on our website with revision dates</li>
              <li>• Provide transition periods for significant changes</li>
              <li>• Maintain previous versions for reference</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">10. Contact Information</h2>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <p className="text-gray-200 mb-4">
                For questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
              </p>
              <div className="text-gray-200">
                <p className="mb-2"><strong>CommunityBuild FZE LLC</strong></p>
                <p className="mb-2">Registered in the United Arab Emirates</p>
                <p className="mb-2">Email: <a href="mailto:privacy@communitybuild.xyz" className="text-purple-300 hover:text-purple-200 underline">privacy@communitybuild.xyz</a></p>
                <p className="mb-2">Telegram: <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">@arunphilips</a></p>
                <p>Response time: We aim to respond to all privacy inquiries within 72 hours.</p>
              </div>
            </div>
          </section>

          <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 mt-8">
            <p className="text-sm text-gray-300">
              <strong>Effective Date:</strong> This Privacy Policy is effective as of December 2024 and applies to all information collected by CommunityBuild FZE LLC through our platforms and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
