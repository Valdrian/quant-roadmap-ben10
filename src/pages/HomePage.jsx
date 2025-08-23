import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Trophy, Target, Clock, TrendingUp, BookOpen, 
  Code, Brain, Rocket, Star, ChevronRight, Award,
  Users, Briefcase, DollarSign, GitBranch
} from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { alienForms, dailyChallenges } from '../data/roadmapData';
import toast from 'react-hot-toast';

const HomePage = () => {
  const { 
    playerName, 
    setPlayerName, 
    level, 
    experience,
    dailyStreak,
    totalStudyHours,
    achievements,
    currentAlienForm,
    unlockedAliens,
    switchAlienForm,
    addExperience
  } = useGameStore();
  
  const [showNameInput, setShowNameInput] = useState(!playerName);
  const [inputName, setInputName] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleStartJourney = () => {
    if (inputName.trim()) {
      setPlayerName(inputName.trim());
      setShowNameInput(false);
      toast.success(`Welcome to the Omnitrix Program, ${inputName}!`);
      addExperience(100);
    }
  };

  const handleChallengeComplete = (challenge) => {
    addExperience(challenge.xp);
    toast.success(`Challenge completed! +${challenge.xp} XP`);
    setSelectedChallenge(null);
  };

  const stats = [
    { label: 'Current Level', value: level, icon: Trophy, color: 'text-alien-yellow' },
    { label: 'Daily Streak', value: `${dailyStreak} days`, icon: Zap, color: 'text-ben10-green' },
    { label: 'Study Hours', value: `${totalStudyHours}h`, icon: Clock, color: 'text-alien-blue' },
    { label: 'Achievements', value: achievements.length, icon: Award, color: 'text-alien-purple' },
  ];

  const features = [
    {
      icon: Target,
      title: '2-Year Roadmap',
      description: 'Structured path to become top 1% quant researcher',
      link: '/roadmap',
      color: 'from-ben10-green to-alien-blue'
    },
    {
      icon: GitBranch,
      title: 'Interactive Skill Tree',
      description: 'Unlock skills and track your progress visually',
      link: '/skills',
      color: 'from-alien-purple to-alien-blue'
    },
    {
      icon: BookOpen,
      title: 'Curated Resources',
      description: 'Hand-picked books, courses, and materials',
      link: '/resources',
      color: 'from-alien-blue to-ben10-green'
    },
    {
      icon: Brain,
      title: 'Interview Mastery',
      description: 'Jane Street-level interview preparation',
      link: '/interview',
      color: 'from-alien-yellow to-alien-red'
    }
  ];

  const topFirms = [
    { name: 'Jane Street', type: 'Prop Trading', comp: '$400-600k' },
    { name: 'Two Sigma', type: 'Hedge Fund', comp: '$350-500k' },
    { name: 'Citadel', type: 'Hedge Fund', comp: '$400-550k' },
    { name: 'Jump Trading', type: 'Prop Trading', comp: '$350-500k' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-2xl mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ben10-green/20 via-transparent to-alien-purple/20" />
        <div className="relative z-10 p-8 lg:p-12">
          {showNameInput ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-orbitron font-bold mb-4 text-glow text-ben10-green">
                OMNITRIX ACTIVATED
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Enter your name to begin your transformation into a Quant Master
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleStartJourney()}
                  placeholder="Enter your name..."
                  className="w-full px-6 py-3 bg-gray-800/50 border border-ben10-green/30 rounded-lg text-ben10-green placeholder-gray-500 focus:outline-none focus:border-ben10-green focus:ring-2 focus:ring-ben10-green/20 font-space"
                />
                <button
                  onClick={handleStartJourney}
                  className="omnitrix-button w-full"
                >
                  START TRANSFORMATION
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl lg:text-6xl font-orbitron font-bold mb-4 text-glow text-ben10-green"
              >
                Welcome back, {playerName}!
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 mb-8"
              >
                Your journey to becoming a top 1% Quant Researcher continues...
              </motion.p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="ben10-card p-4 text-center"
                  >
                    <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={32} />
                    <p className="text-2xl font-orbitron font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Alien Forms */}
              <div className="mb-8">
                <h3 className="text-xl font-orbitron text-ben10-green mb-4">Current Form</h3>
                <div className="flex flex-wrap gap-3">
                  {alienForms.filter(alien => unlockedAliens.includes(alien.id)).map((alien) => (
                    <button
                      key={alien.id}
                      onClick={() => {
                        switchAlienForm(alien.id);
                        toast.success(`Transformed into ${alien.name}!`);
                      }}
                      className={`
                        px-4 py-2 rounded-lg border transition-all duration-300
                        ${currentAlienForm === alien.id 
                          ? 'bg-ben10-green/20 border-ben10-green text-ben10-green' 
                          : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:border-ben10-green/50'
                        }
                      `}
                    >
                      <span className="mr-2">{alien.icon}</span>
                      {alien.name}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {!showNameInput && (
        <>
          {/* Daily Challenge */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="ben10-card mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-orbitron text-ben10-green">Daily Challenges</h2>
              <Zap className="text-alien-yellow animate-pulse" size={24} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dailyChallenges.slice(0, 3).map((challenge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-ben10-green/50 transition-all cursor-pointer"
                  onClick={() => setSelectedChallenge(challenge)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`
                      px-2 py-1 rounded text-xs font-bold
                      ${challenge.difficulty === 'easy' ? 'bg-green-900/50 text-green-400' : 
                        challenge.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-400' : 
                        'bg-red-900/50 text-red-400'}
                    `}>
                      {challenge.difficulty.toUpperCase()}
                    </span>
                    <span className="text-alien-yellow font-bold">+{challenge.xp} XP</span>
                  </div>
                  <p className="text-gray-300">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={feature.link}>
                  <div className="ben10-card h-full hover:border-ben10-green transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="text-black" size={24} />
                    </div>
                    <h3 className="text-lg font-orbitron text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                    <div className="flex items-center text-ben10-green">
                      <span className="text-sm font-bold">Explore</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Target Firms */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="ben10-card"
          >
            <h2 className="text-2xl font-orbitron text-ben10-green mb-6">Target Firms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topFirms.map((firm, index) => (
                <div key={firm.name} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h3 className="font-orbitron text-white mb-1">{firm.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{firm.type}</p>
                  <div className="flex items-center text-alien-yellow">
                    <DollarSign size={16} />
                    <span className="text-sm font-bold">{firm.comp}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenge Modal */}
          {selectedChallenge && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="ben10-card max-w-md w-full"
              >
                <h3 className="text-xl font-orbitron text-ben10-green mb-4">Challenge Accepted!</h3>
                <p className="text-gray-300 mb-6">{selectedChallenge.description}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleChallengeComplete(selectedChallenge)}
                    className="omnitrix-button flex-1"
                  >
                    Complete Challenge
                  </button>
                  <button
                    onClick={() => setSelectedChallenge(null)}
                    className="flex-1 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;