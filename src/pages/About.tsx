import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
          About CommunityBuild
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Our Mission</h2>
            <p className="text-gray-200 mb-4 text-lg leading-relaxed">
              CommunityBuild FZE LLC is a UAE-registered company dedicated to bridging the gap between Web2 comfort and Web3 possibilities. 
              We specialize in creating thriving Web3 communities and ecosystems that drive real adoption and engagement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">What We Do</h2>
            <p className="text-gray-200 mb-6">
              We don't just build communities - we create movements. Our comprehensive approach includes:
            </p>
            <ul className="text-gray-200 space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                <span><strong className="text-purple-300">Community Architecture:</strong> Designing Web3-native experiences that feel familiar to Web2 users</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                <span><strong className="text-purple-300">Event Management:</strong> From hackathons to conferences, creating memorable experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                <span><strong className="text-purple-300">Education & Onboarding:</strong> Making Web3 accessible to mainstream audiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                <span><strong className="text-purple-300">Strategic Partnerships:</strong> Connecting you with the right players in the ecosystem</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Our Track Record</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/30">
                <h3 className="text-xl font-semibold text-white mb-2">50,000+</h3>
                <p className="text-gray-200">Community members onboarded across various Web3 projects</p>
              </div>
              <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-400/30">
                <h3 className="text-xl font-semibold text-white mb-2">500+</h3>
                <p className="text-gray-200">Successful events and community initiatives executed</p>
              </div>
              <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-400/30">
                <h3 className="text-xl font-semibold text-white mb-2">10x</h3>
                <p className="text-gray-200">Average engagement increase for our clients</p>
              </div>
              <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30">
                <h3 className="text-xl font-semibold text-white mb-2">90 Days</h3>
                <p className="text-gray-200">Average time to build a thriving Web3 community</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Why Choose CommunityBuild</h2>
            <p className="text-gray-200 mb-4">
              We understand both the technical complexities of Web3 and the human psychology of community building. 
              Our unique approach combines cutting-edge blockchain technology with proven community management strategies.
            </p>
            <p className="text-gray-200 mb-4">
              Based in the UAE, we serve clients globally while maintaining the highest standards of compliance and professionalism 
              expected in international business.
            </p>
          </section>

          <section className="mb-12 bg-slate-800/50 p-8 rounded-xl border border-purple-400/30">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Company Information</h2>
            <div className="space-y-2 text-gray-200">
              <p><strong className="text-white">Legal Name:</strong> CommunityBuild FZE LLC</p>
              <p><strong className="text-white">Registration:</strong> United Arab Emirates</p>
              <p><strong className="text-white">Specialization:</strong> Web3 Community Building & Event Management</p>
              <p><strong className="text-white">Global Reach:</strong> Serving clients worldwide from our UAE base</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Get in Touch</h2>
            <p className="text-gray-200 mb-4">
              Ready to build your Web3 community? Let's discuss how CommunityBuild FZE LLC can help you create 
              a thriving ecosystem that drives real adoption and engagement.
            </p>
            <a 
              href="https://t.me/arunphilips" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-200"
            >
              Contact Us on Telegram
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
