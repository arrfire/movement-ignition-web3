
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Globe, Zap, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Arun Philips",
      role: "Founder & CEO",
      description: "Web3 community strategist with 5+ years building thriving ecosystems across India and globally.",
      expertise: ["Community Strategy", "Event Management", "Web3 Education"]
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe authentic communities are the foundation of successful Web3 projects."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From India to the world, we help teams expand their presence across key markets."
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "90-day guarantee to transform your community from zero to thriving ecosystem."
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "50K+ members onboarded, 500+ communities built, 10x average engagement."
    }
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
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-100 hover:text-purple-300 transition-colors font-medium">Home</Link>
          <Link to="/case-studies" className="text-gray-100 hover:text-purple-300 transition-colors font-medium">Case Studies</Link>
          <Link to="/about" className="text-purple-300 font-semibold">About</Link>
          <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-purple-300 transition-colors font-medium">Contact</a>
        </div>
        <Link to="/">
          <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-700/70 text-purple-100 border-purple-500">
            🚀 About CommunityBuild
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Building the Future of{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Web3 Communities
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            CommunityBuild is the bridge between Web2 comfort and Web3 possibilities. We help teams 
            create authentic, thriving communities that drive real adoption and engagement.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                We believe Web3 will change the world for the better, impacting millions of lives. 
                Our mission is to accelerate this transformation by building authentic communities 
                that bridge the gap between traditional users and decentralized technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From zero to thriving ecosystem in 90 days - that's our promise. We don't just build 
                communities; we create movements that drive the future of decentralized innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/85144639-ca3a-40fb-b70d-20ef871a7ffe.png" 
                alt="India Web3 Research" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-12 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide everything we do at CommunityBuild
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 backdrop-blur-lg hover:bg-slate-700/60 transition-all duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <CardTitle className="text-2xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Meet the Team</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The passionate builders behind CommunityBuild's success
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 backdrop-blur-lg max-w-md">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{member.name}</CardTitle>
                  <p className="text-purple-300 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-200 mb-6 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-purple-600/30 text-purple-200 border-purple-500/40">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to{' '}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Transform Your Community?
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join the teams who've already revolutionized their Web3 presence with CommunityBuild.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 w-full sm:w-auto">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:text-white text-lg px-8 py-4 w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
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
              <p className="text-gray-300">
                Building the future of Web3 communities, one success story at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Case Studies</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Events</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Community Building</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Education</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Case Studies</Link></li>
                <li><a href="https://mirror.xyz/communitybuild.eth" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Blog</a></li>
                <li><a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/privacy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-purple-300 transition-colors">Terms of Service</Link></li>
                <li><a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 CommunityBuild. All rights reserved. Revolutionizing communities with Web3.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
