import '../../index.css';  // Going up three levels to src folder
import React from 'react';
import {
  BookOpen,
  Users,
  Globe,
  Award,
  TrendingUp,
  Search,
  MessageSquare,
  Share2,
  BookMarked,
  FileText,
  BarChart,
  Download,
  Bell,
  ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="text-blue-600 h-8 w-8" />
            <span className="ml-2 text-2xl font-bold">ResearchGate</span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-blue-600">Features</button>
            <button className="text-gray-600 hover:text-blue-600">Solutions</button>
            <button className="text-gray-600 hover:text-blue-600">About</button>
            <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">Log in</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Join for free
            </button>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Advance Your Research Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join over 20 million researchers who use ResearchGate to connect, collaborate, 
              and accelerate scientific discovery.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all flex items-center mx-auto">
              <span>Get Started Today</span>
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20M+</div>
              <div className="text-gray-600">Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">135M+</div>
              <div className="text-gray-600">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">190+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5B+</div>
              <div className="text-gray-600">Monthly Citations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything You Need to Advance Your Research
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Research</h3>
              <p className="text-gray-600">
                Upload your research, including preprints, and make it accessible to millions 
                of researchers worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Collaborate</h3>
              <p className="text-gray-600">
                Find and connect with potential collaborators and stay updated with 
                research in your field.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
              <p className="text-gray-600">
                Monitor your research impact with detailed statistics and citation tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center">
              Why Choose ResearchGate?
            </h2>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Join the world's largest scientific network and take your research to the next level.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Share your research with a global audience and increase your visibility 
                    in the scientific community.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
                  <p className="text-gray-600">
                    Engage in discussions, ask questions, and receive feedback directly 
                    from experts in your field.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <BarChart className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                  <p className="text-gray-600">
                    Get detailed statistics about your research impact, including reads, 
                    citations, and downloads.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Key Platform Features</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <FileText className="text-blue-600 mr-3" />
                  <span>Preprint sharing and DOI assignment</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <BookMarked className="text-blue-600 mr-3" />
                  <span>Citation tracking and management</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <Search className="text-blue-600 mr-3" />
                  <span>Advanced research discovery tools</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <Bell className="text-blue-600 mr-3" />
                  <span>Research alert notifications</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <Download className="text-blue-600 mr-3" />
                  <span>Full-text paper accessibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Advance Your Research?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join millions of researchers worldwide and take your research to the next level.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all">
            Join ResearchGate Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <BookOpen className="text-blue-600 h-8 w-8" />
              <p className="text-gray-600 mt-4">© 2025 ResearchGate</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="text-gray-600 hover:text-blue-600 mb-2">About Us</li>
                <li className="text-gray-600 hover:text-blue-600 mb-2">Terms of Service</li>
                <li className="text-gray-600 hover:text-blue-600 mb-2">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul>
                <li className="text-gray-600 hover:text-blue-600 mb-2">Help Center</li>
                <li className="text-gray-600 hover:text-blue-600 mb-2">FAQs</li>
                <li className="text-gray-600 hover:text-blue-600 mb-2">Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul>
                <li className="text-gray-600 hover:text-blue-600 mb-2">Twitter</li>
                <li className="text-gray-600 hover:text-blue-600 mb-2">LinkedIn</li>
                <li className="text-gray-600 hover:text-blue-600 mb-2">Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
