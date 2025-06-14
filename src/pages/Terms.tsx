
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          CommunityBuild
        </Link>
        <Link to="/">
          <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
            Back to Home
          </Button>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We believe in transparent partnerships. Here's our commitment to you,
            and what we hope from you in return as we build the future together.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Handshake className="h-8 w-8 text-purple-400 mb-2" />
              <CardTitle>Partnership Mindset</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We're not just a service provider - we're your strategic partner in building the future of Web3 communities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Users className="h-8 w-8 text-blue-400 mb-2" />
              <CardTitle>Mutual Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your success is our success. We're incentivized to deliver results that make your Web3 community thrive.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Zap className="h-8 w-8 text-yellow-400 mb-2" />
              <CardTitle>Transparent Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                No hidden fees, no surprise changes. We communicate openly about timelines, challenges, and opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Shield className="h-8 w-8 text-green-400 mb-2" />
              <CardTitle>Ethical Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We maintain the highest ethical standards in all our Web3 community building practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Our Services & Commitments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">What We Promise</h4>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Dedicated expertise in Web3 community building</li>
                  <li>• 90-day pathway to a thriving community ecosystem</li>
                  <li>• Transparent progress tracking and regular updates</li>
                  <li>• 24/7 support during critical launch phases</li>
                  <li>• Post-launch optimization and growth strategies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Service Scope</h4>
                <p className="text-gray-300">
                  Our services include community architecture, token strategy, governance design, 
                  technical implementation, and ongoing optimization. Specific deliverables are 
                  detailed in individual service agreements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Your Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Active Collaboration</h4>
                <p className="text-gray-300">
                  Successful Web3 communities require active participation from founders. We need your 
                  insights, feedback, and timely responses to build something truly exceptional.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Accurate Information</h4>
                <p className="text-gray-300">
                  Provide accurate information about your project, goals, and constraints. This helps 
                  us design the most effective community strategy for your specific needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Compliance & Legal</h4>
                <p className="text-gray-300">
                  Ensure your project complies with relevant regulations in your jurisdiction. 
                  We provide technical and strategic guidance, but legal compliance is your responsibility.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">Your IP Remains Yours</h4>
                <p className="text-gray-300">
                  Your project ideas, branding, and business model remain your intellectual property. 
                  We're here to help you build and scale, not to claim ownership.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">Our Methodologies</h4>
                <p className="text-gray-300">
                  Our frameworks, tools, and methodologies remain our intellectual property. 
                  However, any custom solutions we build for you become part of your project.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">Open Source Contributions</h4>
                <p className="text-gray-300">
                  Where possible, we contribute to open-source Web3 infrastructure that benefits 
                  the entire ecosystem. Specific contributions are detailed in project agreements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Payment & Refunds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Transparent Pricing</h4>
                <p className="text-gray-300">
                  All costs are clearly outlined before we begin. No hidden fees, no surprise charges. 
                  We accept both traditional payment methods and crypto payments.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Milestone-Based Payments</h4>
                <p className="text-gray-300">
                  Payments are typically structured around project milestones, ensuring you see 
                  progress before each payment. This aligns our incentives with your success.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Satisfaction Guarantee</h4>
                <p className="text-gray-300">
                  If we don't deliver on our core promises within the first 30 days, we'll work 
                  with you to make it right or provide a refund for undelivered services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Web3 Ecosystem Risks</h4>
                <p className="text-gray-300">
                  The Web3 space is rapidly evolving. While we stay current with best practices, 
                  we cannot guarantee protection against all technological, regulatory, or market risks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Best Efforts Standard</h4>
                <p className="text-gray-300">
                  We commit to providing services with professional skill and care. However, 
                  community growth and adoption depend on many factors beyond our control.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Damage Limitations</h4>
                <p className="text-gray-300">
                  Our liability is limited to the amount paid for our services. We cannot be held 
                  responsible for indirect damages, lost profits, or consequential losses.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Termination & Modifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Project Termination</h4>
                <p className="text-gray-300">
                  Either party may terminate the agreement with 30 days' written notice. 
                  You'll retain all work completed up to the termination date.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Terms Updates</h4>
                <p className="text-gray-300">
                  We may update these terms to reflect changes in our services or legal requirements. 
                  We'll notify you of significant changes at least 30 days in advance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Dispute Resolution</h4>
                <p className="text-gray-300">
                  We prefer to resolve disputes through direct communication. If that fails, 
                  we'll use mediation before considering legal action.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Contact & Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Have questions about these terms or need clarification on any aspect of our services?
              </p>
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <p className="text-purple-200">
                  <strong>Legal & Contracts:</strong> legal@communitybuild.xyz
                </p>
                <p className="text-purple-200">
                  <strong>General Support:</strong> hello@communitybuild.xyz
                </p>
                <p className="text-purple-200">
                  <strong>Emergency Support:</strong> Available 24/7 during active projects
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400">
          <p>Last updated: December 2024</p>
          <p className="mt-2">
            These terms reflect our commitment to building successful partnerships in the Web3 space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
