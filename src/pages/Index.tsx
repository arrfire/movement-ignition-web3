
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Zap, Shield, Star, TrendingUp, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [memberCount, setMemberCount] = useState(50127);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate live member count updates
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "50K+", label: "Members Onboarded", icon: Users },
    { number: "500+", label: "Communities Built", icon: Globe },
    { number: "10x", label: "Average Engagement", icon: TrendingUp },
    { number: "90", label: "Days to Thriving", icon: Rocket }
  ];

  const partnerships = [
    "Polygon", "Techstars", "Ethereum Foundation", "Consensys", "Chainlink"
  ];

  const testimonials = [
    {
      text: "From 0 to 15K active members in 90 days. CommunityBuild doesn't just talk about Web3 - they deliver results.",
      author: "Sarah Chen",
      role: "Founder, DeFi Protocol X",
      company: "Backed by Andreessen Horowitz"
    },
    {
      text: "Finally, a team that understands both the tech and the human side of Web3 communities.",
      author: "Marcus Rodriguez",
      role: "Head of Community",
      company: "Top 10 NFT Marketplace"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7bf66d10-a2b6-42b2-acd2-564d68a6ad6e.png" 
            alt="CommunityBuild Logo" 
            className="h-8 w-auto bg-white/90 rounded p-1"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CommunityBuild
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/case-studies" className="hover:text-purple-400 transition-colors">Case Studies</Link>
          <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
          <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none">
            Get Started
          </Button>
        </a>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 text-center py-20 px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Badge className="mb-6 bg-purple-800/50 text-purple-200 border-purple-600">
          🚀 Next cohort starts in 12 days - Limited spots available
        </Badge>
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          We don't just build{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            communities
          </span>
          <br />
          We create{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            movements
          </span>
        </h1>
        
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          The bridge between Web2 comfort and Web3 possibilities. From zero to thriving ecosystem in 90 days.
          <br />
          <span className="text-purple-300 font-semibold">Finally, someone who understands both technology AND community.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 w-full sm:w-auto">
              Take Web3 Readiness Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Link to="/case-studies">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-none text-lg px-8 py-4 w-full sm:w-auto font-semibold shadow-xl">
              See Enterprise Case Studies
            </Button>
          </Link>
        </div>

        {/* Live Stats */}
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-300 mb-16">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span>{memberCount.toLocaleString()} members and counting</span>
          </div>
          <div className="h-4 w-px bg-gray-600"></div>
          <span>Join 500+ Web3 leaders who trust CommunityBuild</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            While others are still figuring out{' '}
            <span className="text-gray-400">Web2</span>,{' '}
            <br />
            our clients are{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              dominating Web3
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            The communities we've built are already preparing for the next bull run. 
            Early adopters are seeing{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold text-2xl">
              10x engagement rates
            </span>.
          </p>
          <div className="bg-gradient-to-r from-emerald-500/30 to-blue-500/30 p-8 rounded-xl border-2 border-emerald-400/50 max-w-2xl mx-auto shadow-2xl">
            <p className="text-emerald-100 text-xl font-bold mb-6">
              🚀 Proven Results That Speak for Themselves
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-emerald-600/40 rounded-xl p-6 border border-emerald-400/30">
                <div className="text-4xl font-bold text-emerald-200">10x</div>
                <div className="text-emerald-100 text-base font-medium">Average Engagement</div>
              </div>
              <div className="bg-blue-600/40 rounded-xl p-6 border border-blue-400/30">
                <div className="text-4xl font-bold text-blue-200">90</div>
                <div className="text-blue-100 text-base font-medium">Days to Success</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-800/70 to-pink-800/70 border-2 border-purple-400/50 backdrop-blur-lg shadow-2xl">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-purple-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Community Architecture</h3>
              <p className="text-purple-100 mb-6 text-base leading-relaxed">
                We design Web3-native experiences that feel familiar to Web2 users but unlock Web3 superpowers.
              </p>
              <ul className="space-y-3 text-sm text-purple-50">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                  Token-gated access systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                  Gamified engagement loops
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                  Decentralized governance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                  Cross-chain compatibility
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-800/70 to-cyan-800/70 border-2 border-blue-400/50 backdrop-blur-lg shadow-2xl">
            <CardContent className="p-8">
              <Zap className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Rapid Deployment</h3>
              <p className="text-blue-100 mb-6 text-base leading-relaxed">
                From strategy to launch in weeks, not months. Our proven playbook accelerates every phase.
              </p>
              <ul className="space-y-3 text-sm text-blue-50">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  90-day thriving guarantee
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Pre-built Web3 integrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Automated onboarding flows
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  24/7 monitoring & optimization
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-800/70 to-rose-800/70 border-2 border-pink-400/50 backdrop-blur-lg shadow-2xl">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-pink-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Security</h3>
              <p className="text-pink-100 mb-6 text-base leading-relaxed">
                Bank-grade security meets Web3 innovation. Your community's assets and data are protected like our own crypto keys.
              </p>
              <ul className="space-y-3 text-sm text-pink-50">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-300 rounded-full mr-3"></span>
                  Multi-sig wallet integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-300 rounded-full mr-3"></span>
                  Audit-ready compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-300 rounded-full mr-3"></span>
                  Zero-knowledge privacy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-300 rounded-full mr-3"></span>
                  Incident response team
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-20 px-6 lg:px-12 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by the builders shaping Web3's future
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {partnerships.map((partner, index) => (
                <div key={index} className="text-gray-300 font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-purple-400">{testimonial.role}</div>
                    <div className="text-gray-300 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stop watching from the{' '}
            <span className="text-gray-400">sidelines</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Be part of history in the making
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            The future favors the builders. Your community deserves Web3-native experiences.
            <br />
            <span className="text-purple-300 font-semibold">The question isn't if you'll move to Web3, but when.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 w-full sm:w-auto">
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-none text-lg px-8 py-4 w-full sm:w-auto font-semibold shadow-xl">
                Download Market Analysis
              </Button>
            </a>
          </div>

          <div className="mt-12 text-sm text-gray-300">
            <p>⚡ Only 5 new partnerships per quarter</p>
            <p>🔥 Early adopters get exclusive access to our flagship program</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/7bf66d10-a2b6-42b2-acd2-564d68a6ad6e.png" 
                  alt="CommunityBuild Logo" 
                  className="h-8 w-auto bg-white/90 rounded p-1"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CommunityBuild
                </span>
              </div>
              <p className="text-gray-300">
                Building the future of Web3 communities, one thriving ecosystem at a time.
              </p>
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
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 CommunityBuild. All rights reserved. Building the future, one community at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
