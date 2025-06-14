
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We respect your privacy like we respect good code - seriously and completely.
            Here's exactly what we do with your data.
          </p>
          <div className="mt-6 text-purple-400 font-semibold">
            (Spoiler: we protect it like our own crypto keys)
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Shield className="h-8 w-8 text-purple-400 mb-2" />
              <CardTitle>Web3-Native Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your data is encrypted, decentralized, and protected with the same standards we use for our own digital assets.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Eye className="h-8 w-8 text-blue-400 mb-2" />
              <CardTitle>Radical Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                No hidden tracking, no secret algorithms. We tell you exactly what we collect and why we need it.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <Lock className="h-8 w-8 text-pink-400 mb-2" />
              <CardTitle>Minimal Data Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We only collect what we absolutely need to provide you with exceptional Web3 community services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <UserCheck className="h-8 w-8 text-green-400 mb-2" />
              <CardTitle>Your Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your data, your choice. Delete, export, or modify your information anytime with one click.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>What Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Contact Information</h4>
                <p className="text-gray-300">
                  Name, email, company details - the basics needed to provide our services and keep in touch about your Web3 community journey.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Web3 Readiness Data</h4>
                <p className="text-gray-300">
                  Assessment responses, current tech stack, community size - information that helps us customize our recommendations for your specific needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Usage Analytics</h4>
                <p className="text-gray-300">
                  How you interact with our website and services - anonymized and aggregated to improve our offerings (no personal tracking).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Service Delivery</h4>
                <p className="text-gray-300">
                  To build your Web3 community, provide support, and deliver the results we promise.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Communication</h4>
                <p className="text-gray-300">
                  Updates about your project, Web3 insights, and opportunities that match your interests (you can opt out anytime).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Improvement</h4>
                <p className="text-gray-300">
                  Analyzing trends to build better tools and services for the Web3 community ecosystem.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Data Security & Storage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                We treat your data with the same security standards we apply to our own crypto assets:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• End-to-end encryption for all sensitive data</li>
                <li>• Multi-signature access controls for data management</li>
                <li>• Regular security audits by third-party experts</li>
                <li>• Decentralized storage where technically feasible</li>
                <li>• Zero-knowledge architecture for privacy-sensitive operations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Your Rights & Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                In the spirit of decentralization, you have complete control over your data:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• <strong>Access:</strong> Download all your data in a portable format</li>
                <li>• <strong>Correction:</strong> Update any information we have about you</li>
                <li>• <strong>Deletion:</strong> Remove your data from our systems (right to be forgotten)</li>
                <li>• <strong>Portability:</strong> Transfer your data to other services</li>
                <li>• <strong>Consent:</strong> Withdraw permission for data use at any time</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                We use minimal, privacy-respecting cookies to:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze website performance (anonymized)</li>
                <li>• Provide personalized content recommendations</li>
              </ul>
              <p className="text-gray-300 mt-4">
                No third-party trackers, no invasive analytics, no selling your data to advertisers. Period.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                We believe in open communication about privacy. If you have questions, concerns, or want to exercise your data rights, reach out to us:
              </p>
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <p className="text-purple-200">
                  <strong>Privacy Team:</strong> privacy@communitybuild.xyz
                </p>
                <p className="text-purple-200">
                  <strong>Response Time:</strong> Within 24 hours
                </p>
                <p className="text-purple-200">
                  <strong>Our Commitment:</strong> Transparent, human responses (no legal jargon)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400">
          <p>Last updated: December 2024</p>
          <p className="mt-2">
            This policy reflects our commitment to privacy in the decentralized age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
