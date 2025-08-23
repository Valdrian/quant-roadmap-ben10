import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Video, Code, FileText, Globe, Trophy,
  ExternalLink, Star, Clock, DollarSign, Filter,
  Search, Bookmark, Check, Users, Target
} from 'lucide-react';
import { roadmapData } from '../data/roadmapData';
import { useGameStore } from '../store/gameStore';
import toast from 'react-hot-toast';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('books');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { 
    bookmarkedResources, 
    toggleBookmark,
    completedCourses,
    completeCourse,
    addExperience 
  } = useGameStore();

  const tabs = [
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'courses', label: 'Courses', icon: Video },
    { id: 'platforms', label: 'Platforms', icon: Globe },
    { id: 'competitions', label: 'Competitions', icon: Trophy },
    { id: 'firms', label: 'Target Firms', icon: Target },
    { id: 'papers', label: 'Research', icon: FileText }
  ];

  const handleBookmarkToggle = (resourceId) => {
    toggleBookmark(resourceId);
    const isBookmarked = bookmarkedResources.includes(resourceId);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks!');
  };

  const handleCourseComplete = (courseId) => {
    completeCourse(courseId);
    toast.success('Course completed! +1000 XP');
  };

  // Aggregate all resources from phases
  const allResources = roadmapData.phases.flatMap(phase =>
    phase.skills.flatMap(skill => 
      skill.resources.map(resource => ({
        ...resource,
        skillName: skill.name,
        phaseName: phase.name,
        category: skill.category,
        id: `${skill.id}-${resource.name}`
      }))
    )
  );

  // Filter resources based on search and category
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.skillName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(allResources.map(r => r.category))];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-orbitron font-bold text-ben10-green mb-4">
          Learning Resources
        </h1>
        <p className="text-lg text-gray-300">
          Curated collection of the best resources to master quantitative finance
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ben10-green transition-colors"
          />
        </div>
        <div className="flex gap-2">
          <Filter className="text-gray-400 mt-3" size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-ben10-green transition-colors"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-ben10-green/20 text-ben10-green border border-ben10-green/30'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              <Icon size={18} />
              <span className="font-space">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid gap-6">
        {/* Books Tab */}
        {activeTab === 'books' && (
          <>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="ben10-card"
            >
              <h2 className="text-2xl font-orbitron text-ben10-green mb-6">Must-Read Books</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {roadmapData.books.mustRead.map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-ben10-green/50 transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-space text-white mb-2">{book}</h3>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-ben10-green/20 text-ben10-green rounded text-xs">Essential</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleBookmarkToggle(`book-${index}`)}
                        className="text-gray-400 hover:text-alien-yellow transition-colors"
                      >
                        <Bookmark 
                          size={20} 
                          className={bookmarkedResources.includes(`book-${index}`) ? 'fill-alien-yellow text-alien-yellow' : ''}
                        />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="ben10-card"
            >
              <h2 className="text-2xl font-orbitron text-alien-purple mb-6">Advanced Books</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {roadmapData.books.advanced.map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-alien-purple/50 transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-space text-white mb-2">{book}</h3>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-alien-purple/20 text-alien-purple rounded text-xs">Advanced</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleBookmarkToggle(`adv-book-${index}`)}
                        className="text-gray-400 hover:text-alien-yellow transition-colors"
                      >
                        <Bookmark 
                          size={20} 
                          className={bookmarkedResources.includes(`adv-book-${index}`) ? 'fill-alien-yellow text-alien-yellow' : ''}
                        />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter(r => r.type === 'course')
              .map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="ben10-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Video className="text-alien-blue" size={24} />
                    {completedCourses.includes(resource.id) ? (
                      <Check className="text-alien-yellow" size={20} />
                    ) : (
                      <button
                        onClick={() => handleBookmarkToggle(resource.id)}
                        className="text-gray-400 hover:text-alien-yellow transition-colors"
                      >
                        <Bookmark 
                          size={20} 
                          className={bookmarkedResources.includes(resource.id) ? 'fill-alien-yellow text-alien-yellow' : ''}
                        />
                      </button>
                    )}
                  </div>
                  <h3 className="font-orbitron text-white mb-2">{resource.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{resource.skillName}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                      {resource.phaseName}
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                      {resource.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {resource.url !== '#' && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">View</span>
                      </a>
                    )}
                    {!completedCourses.includes(resource.id) && (
                      <button
                        onClick={() => handleCourseComplete(resource.id)}
                        className="flex-1 px-3 py-2 bg-ben10-green/20 text-ben10-green rounded-lg hover:bg-ben10-green/30 transition-colors text-sm"
                      >
                        Complete
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* Platforms Tab */}
        {activeTab === 'platforms' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapData.onlinePlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="ben10-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <Globe className="text-ben10-green" size={24} />
                  <span className="text-sm text-gray-400">{platform.cost}</span>
                </div>
                <h3 className="font-orbitron text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{platform.focus}</p>
                <div className="px-3 py-2 bg-gray-800 rounded-lg">
                  <p className="text-xs text-alien-blue">Best for: {platform.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Competitions Tab */}
        {activeTab === 'competitions' && (
          <div className="space-y-6">
            {roadmapData.competitions.map((competition, index) => (
              <motion.div
                key={competition.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ben10-card"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="text-alien-yellow" size={24} />
                      <h3 className="text-xl font-orbitron text-white">{competition.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                        {competition.frequency}
                      </span>
                      {competition.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-alien-purple/20 text-alien-purple rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{competition.prize}</p>
                  </div>
                  {competition.url !== '#' && (
                    <a
                      href={competition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="omnitrix-button flex items-center gap-2"
                    >
                      <span>Learn More</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Target Firms Tab */}
        {activeTab === 'firms' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {roadmapData.targetFirms.map((firm, index) => (
              <motion.div
                key={firm.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="ben10-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-orbitron text-ben10-green mb-1">{firm.name}</h3>
                    <p className="text-sm text-gray-400">{firm.type}</p>
                  </div>
                  <div className="flex items-center text-alien-yellow">
                    <DollarSign size={16} />
                    <span className="text-sm font-bold">{firm.compensationRange}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Focus Areas</p>
                    <div className="flex flex-wrap gap-1">
                      {firm.focus.map((area, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Requirements</p>
                    <div className="flex flex-wrap gap-1">
                      {firm.requirements.map((req, i) => (
                        <span key={i} className="px-2 py-1 bg-alien-blue/20 text-alien-blue rounded text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Culture</p>
                    <p className="text-sm text-gray-300">{firm.culture}</p>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-alien-purple mb-1">Interview Process</p>
                  <div className="flex flex-wrap gap-1">
                    {firm.interviewProcess.map((step, i) => (
                      <span key={i} className="text-xs text-gray-400">
                        {step}{i < firm.interviewProcess.length - 1 && ' →'}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-ben10-green/10 rounded-lg border border-ben10-green/30">
                  <p className="text-xs text-ben10-green font-bold mb-1">💡 Pro Tip</p>
                  <p className="text-xs text-gray-300">{firm.tips}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Research Papers Tab */}
        {activeTab === 'papers' && (
          <div className="ben10-card">
            <h2 className="text-2xl font-orbitron text-ben10-green mb-6">Research Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-orbitron text-alien-purple mb-4">Key Papers to Read</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FileText className="text-gray-400 mt-0.5" size={16} />
                    <div>
                      <p className="text-white">Black-Scholes Option Pricing Model</p>
                      <p className="text-xs text-gray-400">Foundation of derivatives pricing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="text-gray-400 mt-0.5" size={16} />
                    <div>
                      <p className="text-white">Fama-French Three-Factor Model</p>
                      <p className="text-xs text-gray-400">Asset pricing and risk factors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="text-gray-400 mt-0.5" size={16} />
                    <div>
                      <p className="text-white">Markowitz Portfolio Theory</p>
                      <p className="text-xs text-gray-400">Modern portfolio optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="text-gray-400 mt-0.5" size={16} />
                    <div>
                      <p className="text-white">Kyle Model of Market Microstructure</p>
                      <p className="text-xs text-gray-400">Information and price formation</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-orbitron text-alien-purple mb-4">Research Platforms</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.ssrn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="text-ben10-green" size={20} />
                      <div>
                        <p className="text-white">SSRN</p>
                        <p className="text-xs text-gray-400">Social Science Research Network</p>
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400" size={16} />
                  </a>
                  
                  <a
                    href="https://arxiv.org/archive/q-fin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="text-ben10-green" size={20} />
                      <div>
                        <p className="text-white">arXiv Quantitative Finance</p>
                        <p className="text-xs text-gray-400">Preprints and working papers</p>
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;