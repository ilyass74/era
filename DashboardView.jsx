import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  MessageSquare,
  Bell,
  User,
  Settings,
  BookMarked,
  Share2,
  ThumbsUp,
  Eye,
  Download,
  Plus,
  BarChart,
  Users,
  FileText,
  Globe,
  TrendingUp,
  Award,
  Book,
  Calendar,
  Activity,
  Mail,
  ExternalLink,
  Filter,
  Clock,
  Hash,
  Bookmark,
  ChevronDown
} from 'lucide-react';

const DashboardView = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Active Projects' },
    { id: 'citations', label: 'Recent Citations' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <BookOpen className="text-blue-600" size={32} />
                <span className="ml-2 text-xl font-bold">ResearchGate</span>
              </div>
              <div className="relative w-96">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search publications, researchers, or topics..."
                  className="w-full pl-12 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell size={24} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageSquare size={24} className="text-gray-600" />
              </button>
              <div className="border-l pl-4">
                <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-3 py-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <ChevronDown size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Sidebar - Profile & Metrics */}
            <div className="col-span-3 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">JS</span>
                  </div>
                  <h2 className="text-xl font-bold">Dr. John Smith</h2>
                  <p className="text-gray-600">Data Science & AI Research</p>
                  <p className="text-gray-600 mb-4">Stanford University</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                    Edit Profile
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Publications</span>
                      <span className="font-semibold">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Citations</span>
                      <span className="font-semibold">1,284</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">h-index</span>
                      <span className="font-semibold">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Research Interest Score</span>
                      <span className="font-semibold">8.5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-4">This Month's Impact</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Eye className="text-blue-600" size={20} />
                        <span className="text-gray-600">Profile Views</span>
                      </div>
                      <span className="text-lg font-semibold">2.5k</span>
                    </div>
                    <div className="mt-2 text-sm text-green-600">
                      +15% from last month
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Book className="text-purple-600" size={20} />
                        <span className="text-gray-600">Paper Downloads</span>
                      </div>
                      <span className="text-lg font-semibold">847</span>
                    </div>
                    <div className="mt-2 text-sm text-green-600">
                      +23% from last month
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-6 space-y-6">
              {/* Filters */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {filters.map(filter => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          activeFilter === filter.id
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Filter size={20} />
                    <span>More Filters</span>
                  </button>
                </div>
              </div>

              {/* New Research Button */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <button className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <Plus size={20} />
                  <span>Share your latest research</span>
                </button>
              </div>

              {/* Research Posts */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Published
                        </span>
                        <span className="text-gray-500 text-sm">March 2024</span>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                        Advanced Machine Learning Techniques in Climate Prediction
                      </h3>
                      <p className="text-gray-600">Published in Nature · Impact Factor: 49.962</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Share2 size={20} />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This research presents a novel approach to climate prediction using advanced machine learning techniques...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Machine Learning
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Climate Science
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Neural Networks
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <ThumbsUp size={18} />
                        <span>126</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <BookMarked size={18} />
                        <span>45 citations</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <Eye size={18} />
                        <span>1.2k reads</span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-1 text-blue-600 hover:underline">
                      <Download size={18} />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="col-span-3 space-y-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-lg p-2 text-center min-w-[60px]">
                      <div className="text-sm font-semibold">MAR</div>
                      <div className="text-xl font-bold">15</div>
                    </div>
                    <div>
                      <h4 className="font-medium">AI Research Conference</h4>
                      <p className="text-sm text-gray-600">Virtual · 2:00 PM PST</p>
                      <button className="mt-2 text-blue-600 hover:underline text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Activity */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-4">Network Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <User size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Dr. Sarah Chen</span> cited your paper "Advanced ML Techniques"
                        </p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;