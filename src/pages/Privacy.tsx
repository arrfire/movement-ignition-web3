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
            src="/lovable-uploads/7bf66d10-a2b6-42b2-acd2-564d68a6ad6e.png" 
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

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">1. Information We Collect</h2>
            <p className="text-gray-200 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              participate in our communities, or contact us for support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">2. How We Use Your Information</h2>
            <p className="text-gray-200 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">3. Information Sharing</h2>
            <p className="text-gray-200 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">4. Data Security</h2>
            <p className="text-gray-200 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">5. Your Rights</h2>
            <p className="text-gray-200 mb-4">
              You have the right to access, update, or delete your personal information. 
              Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">6. Contact Us</h2>
            <p className="text-gray-200">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">
                Telegram
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
