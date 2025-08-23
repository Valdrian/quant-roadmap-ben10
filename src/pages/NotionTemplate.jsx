import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Copy, Check, Download, Calendar, Target,
  CheckSquare, BookOpen, Brain, Trophy, Clock, TrendingUp,
  Star, Zap, GitBranch, Users, DollarSign
} from 'lucide-react';
import toast from 'react-hot-toast';

const NotionTemplate = () => {
  const [copiedSection, setCopiedSection] = useState(null);

  const handleCopy = (text, sectionId) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const notionTemplate = `# 🚀 Quant Research Roadmap - 2 Year Journey to Top 1%

## 👤 Personal Information
- **Name:** [Your Name]
- **Start Date:** [Date]
- **Target Role:** Quantitative Researcher
- **Target Firms:** Jane Street, Two Sigma, Citadel, D.E. Shaw, Jump Trading

## 📊 Progress Dashboard

### Overall Progress
- [ ] Phase 1: Foundation (0-6 months)
- [ ] Phase 2: Specialization (6-12 months)
- [ ] Phase 3: Advanced (12-18 months)
- [ ] Phase 4: Interview Mastery (18-24 months)

### Current Stats
- **Level:** 1
- **Experience Points:** 0 / 1000
- **Daily Streak:** 0 days
- **Total Study Hours:** 0
- **Skills Completed:** 0 / 20
- **Achievements Unlocked:** 0 / 16

## 📅 Weekly Schedule

| Day | Morning (2h) | Afternoon (3h) | Evening (2h) |
|-----|-------------|----------------|--------------|
| Mon | Mathematics | Coding Practice | Research Papers |
| Tue | Probability | Machine Learning | Projects |
| Wed | Stochastic Calc | Financial Markets | Problem Sets |
| Thu | Algorithms | System Design | Mock Interview |
| Fri | Statistics | Trading Strategies | Competitions |
| Sat | Review Week | Kaggle/Projects | Open Source |
| Sun | Planning | Side Projects | Rest/Review |

## 🎯 Phase 1: Foundation (0-6 months)

### ✅ Mathematics Foundations
- [ ] Linear Algebra (MIT 18.06)
- [ ] Multivariable Calculus
- [ ] Differential Equations
- [ ] Real Analysis
- [ ] Complex Analysis
- [ ] Measure Theory Basics

**Resources:**
- 📚 Linear Algebra Done Right - Axler
- 🎥 MIT 18.06 Linear Algebra Course
- 📝 100 Linear Algebra Problems Set

**Projects:**
- [ ] Implement matrix operations from scratch
- [ ] Eigenvalue/Eigenvector visualizer
- [ ] Linear regression from scratch

### ✅ Probability & Statistics
- [ ] Probability Theory
- [ ] Random Variables & Distributions
- [ ] Central Limit Theorem
- [ ] Hypothesis Testing
- [ ] Bayesian Statistics
- [ ] Time Series Basics

**Resources:**
- 📚 Introduction to Probability - Bertsekas
- 📚 All of Statistics - Wasserman
- 🎥 MIT 6.041 Probabilistic Systems

**Projects:**
- [ ] Monte Carlo simulations
- [ ] Statistical tests implementation
- [ ] Real dataset analysis

### ✅ Programming Foundations
- [ ] Python Advanced (NumPy, Pandas, SciPy)
- [ ] C++ Fundamentals
- [ ] Data Structures & Algorithms
- [ ] Object-Oriented Programming
- [ ] Functional Programming
- [ ] Version Control (Git)

**Resources:**
- 💻 LeetCode (300+ problems target)
- 📚 Introduction to Algorithms - CLRS
- 🎥 CS50 Harvard

**Weekly Targets:**
- [ ] 10 LeetCode problems (Easy/Medium)
- [ ] 1 coding project
- [ ] Code review practice

## 🚀 Phase 2: Specialization (6-12 months)

### ✅ Stochastic Calculus
- [ ] Brownian Motion
- [ ] Ito Calculus
- [ ] Stochastic Differential Equations
- [ ] Martingales
- [ ] Levy Processes
- [ ] Jump Diffusion Models

**Resources:**
- 📚 Stochastic Calculus for Finance I & II - Shreve
- 📚 Brownian Motion and Stochastic Calculus - Karatzas

**Projects:**
- [ ] Black-Scholes implementation
- [ ] Monte Carlo option pricing
- [ ] Stochastic process simulator

### ✅ Machine Learning & AI
- [ ] Supervised Learning
- [ ] Unsupervised Learning
- [ ] Deep Learning Fundamentals
- [ ] Reinforcement Learning Basics
- [ ] NLP for Finance
- [ ] Time Series Forecasting

**Resources:**
- 🎥 CS229 Stanford ML
- 🎥 Fast.ai Deep Learning
- 📚 Elements of Statistical Learning
- 🏆 Kaggle Competitions

**Projects:**
- [ ] Stock price prediction model
- [ ] Sentiment analysis on financial news
- [ ] Portfolio optimization with ML

### ✅ Financial Markets
- [ ] Market Microstructure
- [ ] Options & Derivatives
- [ ] Fixed Income
- [ ] FX Markets
- [ ] Commodities
- [ ] Crypto Markets

**Resources:**
- 📚 Options, Futures, and Other Derivatives - Hull
- 📚 Market Microstructure Theory - O'Hara
- 🎥 MIT 15.401 Finance Theory

## 💪 Phase 3: Advanced (12-18 months)

### ✅ Advanced Mathematics
- [ ] PDEs
- [ ] Numerical Methods
- [ ] Optimization Theory
- [ ] Game Theory
- [ ] Information Theory

### ✅ High-Frequency Trading
- [ ] Ultra-Low Latency Systems
- [ ] FPGA Programming Basics
- [ ] Network Protocols
- [ ] Order Execution Algorithms
- [ ] Market Impact Models

### ✅ Research Skills
- [ ] Read 50+ research papers
- [ ] Replicate 3 academic papers
- [ ] Write original research
- [ ] Discover novel trading signal

## 🎓 Phase 4: Interview Mastery (18-24 months)

### ✅ Technical Preparation
- [ ] 500+ Interview problems solved
- [ ] Brain teasers mastery
- [ ] System design expertise
- [ ] Mock interviews (10+)

### ✅ Behavioral Preparation
- [ ] 20 STAR stories prepared
- [ ] Company research completed
- [ ] Market views developed
- [ ] Ethical scenarios practiced

## 🏆 Competitions & Achievements

### Competitions to Enter
- [ ] IMC Trading Challenge
- [ ] Rotman Trading Competition
- [ ] Jane Street ETC
- [ ] Kaggle Finance Competitions
- [ ] WorldQuant Challenge

### Achievements Checklist
- [ ] First Step (Complete first module)
- [ ] Math Novice (Complete basic mathematics)
- [ ] Code Warrior (Solve 100 coding problems)
- [ ] Probability Master (Master probability theory)
- [ ] ML Pioneer (Complete first ML project)
- [ ] Market Explorer (Understand all markets)
- [ ] Strategy Builder (Build 5 trading strategies)
- [ ] Paper Trader (Positive returns in simulation)
- [ ] Research Scholar (Read 50 papers)
- [ ] Competition Winner (Place in competition)
- [ ] System Architect (Design trading system)
- [ ] Interview Ace (Pass 10 mock interviews)
- [ ] Quant Master (Complete all phases)
- [ ] Jane Street Ready (Meet all requirements)
- [ ] Top 1% (Reach the top 1%)

## 📚 Essential Reading List

### Must Read Books
1. Options, Futures, and Other Derivatives - John Hull
2. Stochastic Calculus for Finance I & II - Steven Shreve
3. The Elements of Statistical Learning - Hastie, Tibshirani, Friedman
4. Heard on the Street - Timothy Crack
5. A Practical Guide to Quantitative Finance Interviews - Xinfeng Zhou

### Advanced Books
1. Advances in Financial Machine Learning - Marcos López de Prado
2. Market Microstructure Theory - Maureen O'Hara
3. Algorithmic and High-Frequency Trading - Cartea, Jaimungal, Penalva
4. Monte Carlo Methods in Financial Engineering - Paul Glasserman
5. Dynamic Hedging - Nassim Taleb

## 💼 Target Firms Research

### Jane Street
- **Type:** Proprietary Trading
- **Focus:** Market Making, Arbitrage
- **Culture:** Collaborative, Puzzle-focused
- **Compensation:** $400k-$600k+ (New Grad)
- **Interview Process:** Phone → Probability → Trading Games → Onsite
- **Preparation:** Focus on probability, mental math, market intuition

### Two Sigma
- **Type:** Hedge Fund
- **Focus:** Systematic Trading, ML
- **Culture:** Academic, Research-driven
- **Compensation:** $350k-$500k+ (New Grad)
- **Interview Process:** Coding → Technical → Research → Onsite
- **Preparation:** Emphasize research and ML projects

## 📈 Daily Tracking

### Daily Checklist
- [ ] Morning Mathematics (2 hours)
- [ ] Coding Practice (2 hours)
- [ ] Market Study (1 hour)
- [ ] Research Paper (1 hour)
- [ ] Project Work (2 hours)
- [ ] Review & Planning (30 min)

### Weekly Review Template
**Week of: [Date]**
- **Hours Studied:** 
- **Problems Solved:** 
- **Concepts Learned:** 
- **Projects Progress:** 
- **Challenges Faced:** 
- **Next Week Goals:** 

## 🔗 Important Links

### Learning Platforms
- [MIT OCW](https://ocw.mit.edu/)
- [Coursera](https://www.coursera.org/)
- [LeetCode](https://leetcode.com/)
- [Kaggle](https://www.kaggle.com/)
- [QuantConnect](https://www.quantconnect.com/)

### Research Resources
- [SSRN](https://www.ssrn.com/)
- [arXiv Quantitative Finance](https://arxiv.org/archive/q-fin)
- [Journal of Finance](https://onlinelibrary.wiley.com/journal/15406261)

### Community
- [Quantitative Finance Stack Exchange](https://quant.stackexchange.com/)
- [Wall Street Oasis](https://www.wallstreetoasis.com/)
- [Reddit r/quant](https://www.reddit.com/r/quant/)

## 📝 Notes & Reflections

### Monthly Reflection Questions
1. What were my biggest wins this month?
2. What concepts challenged me the most?
3. How can I improve my study efficiency?
4. What skills need more focus?
5. Am I on track for my 2-year goal?

---

**Remember:** Consistency beats intensity. Study every day, even if just for 30 minutes. The journey to the top 1% is a marathon, not a sprint! 🚀`;

  const sections = [
    {
      id: 'dashboard',
      title: 'Progress Dashboard',
      icon: TrendingUp,
      description: 'Track your overall journey progress and current stats'
    },
    {
      id: 'schedule',
      title: 'Weekly Schedule',
      icon: Calendar,
      description: 'Structured weekly study plan with time allocation'
    },
    {
      id: 'phases',
      title: 'Learning Phases',
      icon: GitBranch,
      description: 'Detailed 4-phase roadmap with topics and resources'
    },
    {
      id: 'competitions',
      title: 'Competitions & Achievements',
      icon: Trophy,
      description: 'Track competitions and achievement milestones'
    },
    {
      id: 'reading',
      title: 'Reading List',
      icon: BookOpen,
      description: 'Essential and advanced books for quant finance'
    },
    {
      id: 'firms',
      title: 'Target Firms',
      icon: Users,
      description: 'Research and preparation notes for top firms'
    },
    {
      id: 'daily',
      title: 'Daily Tracking',
      icon: CheckSquare,
      description: 'Daily checklist and weekly review templates'
    },
    {
      id: 'resources',
      title: 'Resources & Links',
      icon: Zap,
      description: 'Curated links to platforms and communities'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-orbitron font-bold text-ben10-green mb-4">
          Notion Template
        </h1>
        <p className="text-lg text-gray-300">
          Complete Notion template for tracking your 2-year quant research journey
        </p>
      </motion.div>

      {/* Template Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="ben10-card"
            >
              <Icon className="text-ben10-green mb-3" size={24} />
              <h3 className="font-orbitron text-white mb-1">{section.title}</h3>
              <p className="text-xs text-gray-400">{section.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Template Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="ben10-card mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-orbitron text-ben10-green">Full Notion Template</h2>
          <button
            onClick={() => handleCopy(notionTemplate, 'full')}
            className="omnitrix-button flex items-center gap-2"
          >
            {copiedSection === 'full' ? (
              <>
                <Check size={18} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copy Template</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 max-h-96 overflow-y-auto">
          <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
            {notionTemplate}
          </pre>
        </div>
      </motion.div>

      {/* How to Use */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="ben10-card mb-8"
      >
        <h2 className="text-2xl font-orbitron text-alien-purple mb-6">How to Use This Template</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-ben10-green/20 flex items-center justify-center flex-shrink-0">
                <span className="text-ben10-green font-bold">1</span>
              </div>
              <div>
                <h3 className="font-orbitron text-white mb-1">Copy Template</h3>
                <p className="text-sm text-gray-400">Click the copy button above to copy the entire template to your clipboard</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-ben10-green/20 flex items-center justify-center flex-shrink-0">
                <span className="text-ben10-green font-bold">2</span>
              </div>
              <div>
                <h3 className="font-orbitron text-white mb-1">Create Notion Page</h3>
                <p className="text-sm text-gray-400">Open Notion and create a new page for your quant journey</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-ben10-green/20 flex items-center justify-center flex-shrink-0">
                <span className="text-ben10-green font-bold">3</span>
              </div>
              <div>
                <h3 className="font-orbitron text-white mb-1">Paste & Format</h3>
                <p className="text-sm text-gray-400">Paste the template and Notion will automatically format it with proper headers and checkboxes</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-alien-purple/20 flex items-center justify-center flex-shrink-0">
                <span className="text-alien-purple font-bold">4</span>
              </div>
              <div>
                <h3 className="font-orbitron text-white mb-1">Customize</h3>
                <p className="text-sm text-gray-400">Add your personal information, adjust the schedule to your needs</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-alien-purple/20 flex items-center justify-center flex-shrink-0">
                <span className="text-alien-purple font-bold">5</span>
              </div>
              <div>
                <h3 className="font-orbitron text-white mb-1">Track Daily</h3>
                <p className="text-sm text-gray-400">Use the daily checklist and weekly review sections to track progress</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-alien-purple/20 flex items-center justify-center flex-shrink-0">
                <span className="text-alien-purple font-bold">6</span>
              </div>
              <div>
                <h3 className="font-orbitron text-white mb-1">Review & Adjust</h3>
                <p className="text-sm text-gray-400">Monthly reflections help you stay on track and adjust your approach</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pro Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="ben10-card"
      >
        <h2 className="text-2xl font-orbitron text-alien-yellow mb-6">Pro Tips for Success</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Star className="text-alien-yellow mb-2" size={20} />
            <h3 className="text-sm font-bold text-white mb-1">Consistency is Key</h3>
            <p className="text-xs text-gray-400">Study every day, even if just 30 minutes. Small consistent efforts compound over time.</p>
          </div>
          
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Brain className="text-ben10-green mb-2" size={20} />
            <h3 className="text-sm font-bold text-white mb-1">Active Learning</h3>
            <p className="text-xs text-gray-400">Don't just read - implement. Build projects, solve problems, write code.</p>
          </div>
          
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Users className="text-alien-purple mb-2" size={20} />
            <h3 className="text-sm font-bold text-white mb-1">Join Communities</h3>
            <p className="text-xs text-gray-400">Connect with other aspiring quants. Share knowledge and learn from peers.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotionTemplate;