
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Zap, Globe, Star, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'events',
      title: 'Techstars Web3 Startup Weekend',
      subtitle: 'Bangalore',
      description: 'Brought Techstars Web3 Startup Weekend to Bangalore with Lens Protocol, Polygon and CoinDCX: 50+ ideas pitched over a 3 day buildathon.',
      metrics: ['50+ Ideas Pitched', '3 Day Buildathon', 'Global Partners'],
      image: '/lovable-uploads/e2e373a7-febd-417b-b8cf-ec1d6d47014f.png',
      testimonial: 'We were thrilled by the quality of ideas and the overall execution of the 3-day Startup Weekend hackathon conducted with Techstars as part of the India Blockchain Week.',
      client: 'Polygon Team',
      technologies: ['Polygon', 'Lens Protocol', 'CoinDCX', 'Google for Startups']
    },
    {
      id: 2,
      category: 'community',
      title: 'Tanukiverse Community Growth',
      subtitle: '5X Discord Growth',
      description: 'Completely redefined launch strategy and grew Discord community 5X with exceptional content and launch strategies.',
      metrics: ['5X Growth', 'Discord Community', 'Launch Strategy'],
      image: '/lovable-uploads/fd00d9d8-079b-4760-8fa5-3d6c4b365d51.png',
      testimonial: 'CommunityBuild helped us completely redefine our launch strategy and weave all the different products we were building at Tanukiverse into an easily understandable and concise story.',
      client: 'Tanukiverse Team',
      technologies: ['Discord', 'Content Strategy', 'Community Management']
    },
    {
      id: 3,
      category: 'education',
      title: 'Aavegotchi India Chapter',
      subtitle: 'Web3 Gaming Education',
      description: 'Worked closely with Aavegotchi to launch their India Chapter, educating and onboarding gamers onto the new Web3 gaming paradigm.',
      metrics: ['India Chapter Launch', 'Gamer Education', 'Web3 Onboarding'],
      image: '/lovable-uploads/d84c8da6-a491-4fa9-ba19-f3ab679355fa.png',
      testimonial: 'The education and onboarding initiatives helped us establish a strong presence in the Indian Web3 gaming community.',
      client: 'Aavegotchi Team',
      technologies: ['Gaming', 'NFTs', 'Community Education']
    },
    {
      id: 4,
      category: 'community',
      title: 'Layer-E Entertainment DAO',
      subtitle: 'Entertainment Industry Transformation',
      description: 'From designing the implementation of an entertainment DAO to managing community growth and producing quality social media content.',
      metrics: ['DAO Implementation', 'Community Growth', 'Content Production'],
      image: '/lovable-uploads/838f3681-3cf6-47c1-90fd-dd62f28babc5.png',
      testimonial: 'From designing the implementation of an entertainment DAO where fans, celebrities, studios and the entertainment industry can co-create content to managing and growing the community, CommunityBuild was instrumental.',
      client: 'Layer E Team',
      technologies: ['DAO', 'Entertainment', 'Social Media']
    },
    {
      id: 5,
      category: 'events',
      title: 'ETHIndia Bollywood Night',
      subtitle: '800+ Attendees',
      description: 'Organized the biggest party at ETHIndia with more than 1500+ registrations and 800 attendees, featuring a thrilling Bollywood night.',
      metrics: ['1500+ Registrations', '800 Attendees', 'Biggest ETHIndia Party'],
      image: '/lovable-uploads/36a50b6e-3fdf-4eca-b21c-a3e6a0d1915d.png',
      testimonial: 'The biggest party at ETHIndia was an incredible celebration that brought together developers, builders and the biggest names of the India crypto ecosystem.',
      client: 'ETHIndia Community',
      technologies: ['Event Management', 'Community Engagement', 'Networking']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cases', count: caseStudies.length },
    { id: 'events', name: 'Events', count: caseStudies.filter(c => c.category === 'events').length },
    { id: 'community', name: 'Community', count: caseStudies.filter(c => c.category === 'community').length },
    { id: 'education', name: 'Education', count: caseStudies.filter(c => c.category === 'education').length }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const stats = [
    { number: "10+", label: "Teams Grown", icon: Users },
    { number: "50K+", label: "Members Onboarded", icon: Globe },
    { number: "5X", label: "Average Growth", icon: Zap },
    { number: "100%", label: "Success Rate", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12 bg-slate-900/50 backdrop-blur-sm">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7bf66d10-a2b6-42b2-acd2-564d68a6ad6e.png" 
            alt="CommunityBuild Logo" 
            className="h-10 w-auto bg-white rounded-lg p-1"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            CommunityBuild
          </span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-100 hover:text-purple-300 transition-colors font-medium">Home</Link>
          <Link to="/case-studies" className="text-purple-300 font-semibold">Case Studies</Link>
          <Link to="/about" className="text-gray-100 hover:text-purple-300 transition-colors font-medium">About</Link>
          <Link to="/contact" className="text-gray-100 hover:text-purple-300 transition-colors font-medium">Contact</Link>
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
            🚀 Real Results, Real Impact
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Case Studies That{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            From zero to thriving Web3 ecosystems. See how we've helped teams across the globe 
            build authentic communities, execute successful events, and drive adoption.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-purple-300" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                    : "border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="bg-slate-800/60 border-slate-700 backdrop-blur-lg hover:bg-slate-700/60 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600/90 text-white border-none capitalize">
                      {study.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">
                    {study.title}
                  </CardTitle>
                  <p className="text-purple-300 font-semibold">{study.subtitle}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-200 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, index) => (
                      <Badge key={index} variant="outline" className="border-purple-400 text-purple-200">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="bg-purple-900/40 p-4 rounded-lg border-l-4 border-purple-400">
                    <p className="text-gray-200 italic mb-2">
                      "{study.testimonial}"
                    </p>
                    <p className="text-purple-300 font-semibold text-sm">
                      — {study.client}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies & Partners:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-blue-600/30 text-blue-200 border-blue-500/40">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-6 lg:px-12 bg-slate-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/85144639-ca3a-40fb-b70d-20ef871a7ffe.png" 
              alt="India Web3 Thesis" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            Thought Leadership & Research
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our work extends beyond execution to driving industry insights and research that shapes the future of Web3 adoption.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
              Download India Web3 Thesis
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:text-white text-lg px-8 py-4">
              View All Research
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to{' '}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Build Your Success Story?
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join the teams who've already transformed their Web3 presence with CommunityBuild. 
            Your case study could be next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:text-white text-lg px-8 py-4">
              Schedule Consultation
            </Button>
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
              <h4 className="font-semibold mb-4 text-white">Case Studies</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">All Cases</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Events</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Community Building</Link></li>
                <li><Link to="/case-studies" className="hover:text-purple-300 transition-colors">Education</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/research" className="hover:text-purple-300 transition-colors">Research Reports</Link></li>
                <li><Link to="/blog" className="hover:text-purple-300 transition-colors">Blog</Link></li>
                <li><Link to="/events" className="hover:text-purple-300 transition-colors">Upcoming Events</Link></li>
                <li><Link to="/community" className="hover:text-purple-300 transition-colors">Join Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Contact Us</a></li>
                <li><a href="https://t.me/arunphilips" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Telegram</a></li>
                <li><a href="https://mirror.xyz/communitybuild.eth" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Mirror Blog</a></li>
                <li><Link to="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
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

export default CaseStudies;
