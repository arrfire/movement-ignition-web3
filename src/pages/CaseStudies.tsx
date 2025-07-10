import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      title: "DeFi Protocol X: 15K Active Members in 90 Days",
      description: "Achieved rapid community growth and high engagement through targeted Web3 strategies.",
      imageUrl: "https://images.unsplash.com/photo-1673670143884-38385a3ba252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#",
    },
    {
      title: "Top 10 NFT Marketplace: Revitalizing Community Engagement",
      description: "Transformed a disengaged community into a vibrant ecosystem with innovative initiatives.",
      imageUrl: "https://images.unsplash.com/photo-1673670143884-38385a3ba252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#",
    },
    {
      title: "Blockchain Gaming Platform: Building a Loyal Player Base",
      description: "Cultivated a dedicated player community through strategic events and community-driven development.",
      imageUrl: "https://images.unsplash.com/photo-1673670143884-38385a3ba252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#",
    },
  ];

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

      {/* Hero Section */}
      <section className="text-center py-20 px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Web3 Community Case Studies
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Explore how we've helped Web3 projects build thriving communities and achieve remarkable results.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudiesData.map((study, index) => (
            <Card key={index} className="bg-slate-900/70 backdrop-blur-lg border border-slate-700">
              <CardContent className="p-6">
                <img src={study.imageUrl} alt={study.title} className="rounded-md mb-4 h-48 w-full object-cover" />
                <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <Link to={study.link}>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-6 lg:px-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/7bf66d10-a2b6-42b2-acd2-564d68a6ad6e.png" 
                  alt="CommunityBuild Logo" 
                  className="h-8 w-auto bg-white/90 rounded p-1"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  CommunityBuild
                </span>
              </div>
              <p className="text-gray-300 mb-3">
                Building the future of Web3 communities, one success story at a time.
              </p>
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-purple-300">CommunityBuild FZE LLC</p>
                <p>Registered in the UAE</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Community Architecture</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Token Strategy</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Governance Design</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Event Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Web3 Insights</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/assessment" className="hover:text-purple-400 transition-colors">Readiness Assessment</Link></li>
                <li><Link to="/events" className="hover:text-purple-400 transition-colors">Upcoming Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 CommunityBuild FZE LLC. All rights reserved. Building the future, one community at a time.</p>
            <p className="text-sm text-gray-400 mt-2">Registered in the United Arab Emirates</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudies;
