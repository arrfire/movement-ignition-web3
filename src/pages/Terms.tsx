
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
            CommunityBuild
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
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8">
            Last updated: December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">1. Acceptance of Terms</h2>
            <p className="text-gray-200 mb-4">
              By accessing and using CommunityBuild's services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">2. Services Description</h2>
            <p className="text-gray-200 mb-4">
              CommunityBuild provides Web3 community building, event management, and educational 
              services to help organizations grow their digital presence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">3. User Responsibilities</h2>
            <p className="text-gray-200 mb-4">
              Users are responsible for providing accurate information and using our services 
              in compliance with applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">4. Intellectual Property</h2>
            <p className="text-gray-200 mb-4">
              All content, trademarks, and intellectual property on our platform remain the 
              property of CommunityBuild or their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">5. Limitation of Liability</h2>
            <p className="text-gray-200 mb-4">
              CommunityBuild shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">6. Contact Information</h2>
            <p className="text-gray-200">
              For questions about these Terms of Service, please contact us at{' '}
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

export default Terms;
