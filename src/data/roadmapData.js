// Comprehensive 2-Year Quant Research Roadmap Data
export const roadmapData = {
  phases: [
    {
      id: 'phase1',
      name: 'Foundation Phase',
      duration: '0-6 months',
      alienForm: 'Grey Matter',
      description: 'Build rock-solid mathematical and programming foundations',
      skills: [
        {
          id: 'math_foundations',
          name: 'Mathematical Foundations',
          category: 'Mathematics',
          level: 'Beginner',
          topics: [
            'Linear Algebra (MIT 18.06)',
            'Multivariable Calculus',
            'Differential Equations',
            'Real Analysis',
            'Complex Analysis',
            'Measure Theory Basics'
          ],
          resources: [
            { type: 'course', name: 'MIT 18.06 Linear Algebra', url: 'https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/' },
            { type: 'book', name: 'Linear Algebra Done Right - Axler', url: '#' },
            { type: 'book', name: 'Principles of Mathematical Analysis - Rudin', url: '#' },
            { type: 'course', name: 'Khan Academy Multivariable Calculus', url: 'https://www.khanacademy.org/math/multivariable-calculus' }
          ],
          weeklyHours: 15,
          projects: [
            'Implement matrix operations from scratch',
            'Solve 100 linear algebra problems',
            'Create visualization of eigenvectors/eigenvalues'
          ]
        },
        {
          id: 'probability_stats',
          name: 'Probability & Statistics',
          category: 'Mathematics',
          level: 'Beginner',
          topics: [
            'Probability Theory',
            'Random Variables & Distributions',
            'Central Limit Theorem',
            'Hypothesis Testing',
            'Bayesian Statistics',
            'Time Series Analysis Basics'
          ],
          resources: [
            { type: 'course', name: 'MIT 6.041 Probabilistic Systems Analysis', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/' },
            { type: 'book', name: 'Introduction to Probability - Bertsekas & Tsitsiklis', url: '#' },
            { type: 'book', name: 'All of Statistics - Wasserman', url: '#' },
            { type: 'platform', name: 'Brilliant.org Probability', url: 'https://brilliant.org/courses/probability/' }
          ],
          weeklyHours: 12,
          projects: [
            'Monte Carlo simulation projects',
            'Implement statistical tests from scratch',
            'Analyze real-world datasets'
          ]
        },
        {
          id: 'programming_foundations',
          name: 'Programming Foundations',
          category: 'Programming',
          level: 'Beginner',
          topics: [
            'Python Advanced (NumPy, Pandas, SciPy)',
            'C++ Fundamentals',
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Functional Programming Concepts',
            'Version Control (Git)'
          ],
          resources: [
            { type: 'course', name: 'CS50 - Harvard', url: 'https://cs50.harvard.edu/' },
            { type: 'book', name: 'Introduction to Algorithms - CLRS', url: '#' },
            { type: 'platform', name: 'LeetCode (300+ problems)', url: 'https://leetcode.com/' },
            { type: 'course', name: 'C++ for Competitive Programming', url: '#' }
          ],
          weeklyHours: 20,
          projects: [
            'Build a trading bot simulator',
            'Implement common data structures',
            'Solve 200 LeetCode problems (Easy/Medium)'
          ]
        }
      ],
      milestones: [
        'Complete 100 probability problems',
        'Solve 200 LeetCode problems',
        'Build first quantitative project',
        'Score 90%+ on foundation assessments'
      ]
    },
    {
      id: 'phase2',
      name: 'Specialization Phase',
      duration: '6-12 months',
      alienForm: 'Brainstorm',
      description: 'Deep dive into quantitative finance and advanced mathematics',
      skills: [
        {
          id: 'stochastic_calculus',
          name: 'Stochastic Calculus',
          category: 'Mathematics',
          level: 'Intermediate',
          topics: [
            'Brownian Motion',
            'Ito Calculus',
            'Stochastic Differential Equations',
            'Martingales',
            'Levy Processes',
            'Jump Diffusion Models'
          ],
          resources: [
            { type: 'book', name: 'Stochastic Calculus for Finance I & II - Shreve', url: '#' },
            { type: 'course', name: 'Coursera - Stochastic Calculus', url: 'https://www.coursera.org/learn/stochastic-calculus' },
            { type: 'book', name: 'Brownian Motion and Stochastic Calculus - Karatzas & Shreve', url: '#' }
          ],
          weeklyHours: 15,
          projects: [
            'Implement Black-Scholes from scratch',
            'Monte Carlo option pricing',
            'Simulate various stochastic processes'
          ]
        },
        {
          id: 'machine_learning',
          name: 'Machine Learning & AI',
          category: 'Technology',
          level: 'Intermediate',
          topics: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Deep Learning Fundamentals',
            'Reinforcement Learning Basics',
            'Natural Language Processing',
            'Time Series Forecasting'
          ],
          resources: [
            { type: 'course', name: 'CS229 Stanford - Machine Learning', url: 'https://cs229.stanford.edu/' },
            { type: 'course', name: 'Fast.ai Deep Learning', url: 'https://www.fast.ai/' },
            { type: 'book', name: 'The Elements of Statistical Learning', url: '#' },
            { type: 'platform', name: 'Kaggle Competitions', url: 'https://www.kaggle.com/' }
          ],
          weeklyHours: 18,
          projects: [
            'Stock price prediction models',
            'Sentiment analysis on financial news',
            'Portfolio optimization using ML'
          ]
        },
        {
          id: 'financial_markets',
          name: 'Financial Markets',
          category: 'Finance',
          level: 'Intermediate',
          topics: [
            'Market Microstructure',
            'Options & Derivatives',
            'Fixed Income',
            'FX Markets',
            'Commodities',
            'Crypto Markets'
          ],
          resources: [
            { type: 'book', name: 'Options, Futures, and Other Derivatives - Hull', url: '#' },
            { type: 'book', name: 'Market Microstructure Theory - OHara', url: '#' },
            { type: 'course', name: 'MIT 15.401 Finance Theory', url: 'https://ocw.mit.edu/courses/sloan-school-of-management/15-401-finance-theory-i-fall-2008/' }
          ],
          weeklyHours: 12,
          projects: [
            'Build order book simulator',
            'Implement Greeks calculator',
            'Analyze market anomalies'
          ]
        },
        {
          id: 'quant_strategies',
          name: 'Quantitative Strategies',
          category: 'Trading',
          level: 'Intermediate',
          topics: [
            'Statistical Arbitrage',
            'Mean Reversion',
            'Momentum Strategies',
            'Pairs Trading',
            'Market Making Basics',
            'Risk Management'
          ],
          resources: [
            { type: 'book', name: 'Algorithmic Trading - Ernest Chan', url: '#' },
            { type: 'book', name: 'Quantitative Trading - Ernest Chan', url: '#' },
            { type: 'platform', name: 'QuantConnect', url: 'https://www.quantconnect.com/' }
          ],
          weeklyHours: 15,
          projects: [
            'Backtest 5 trading strategies',
            'Build risk management system',
            'Create strategy evaluation framework'
          ]
        }
      ],
      milestones: [
        'Complete stochastic calculus course',
        'Win/place in Kaggle competition',
        'Build profitable paper trading strategy',
        'Pass mock quant interviews'
      ]
    },
    {
      id: 'phase3',
      name: 'Advanced Phase',
      duration: '12-18 months',
      alienForm: 'Alien X',
      description: 'Master advanced topics and prepare for top-tier interviews',
      skills: [
        {
          id: 'advanced_math',
          name: 'Advanced Mathematics',
          category: 'Mathematics',
          level: 'Advanced',
          topics: [
            'Partial Differential Equations',
            'Numerical Methods',
            'Optimization Theory',
            'Game Theory',
            'Information Theory',
            'Topology Applications'
          ],
          resources: [
            { type: 'book', name: 'Numerical Methods in Finance - Glasserman', url: '#' },
            { type: 'course', name: 'MIT 18.085 Computational Science', url: '#' },
            { type: 'book', name: 'Convex Optimization - Boyd', url: '#' }
          ],
          weeklyHours: 12,
          projects: [
            'Implement finite difference methods',
            'Solve complex optimization problems',
            'Apply game theory to trading'
          ]
        },
        {
          id: 'high_frequency',
          name: 'High-Frequency Trading',
          category: 'Trading',
          level: 'Advanced',
          topics: [
            'Ultra-Low Latency Systems',
            'FPGA Programming Basics',
            'Network Protocols',
            'Order Execution Algorithms',
            'Market Impact Models',
            'Tick Data Analysis'
          ],
          resources: [
            { type: 'book', name: 'High-Frequency Trading - Aldridge', url: '#' },
            { type: 'course', name: 'Systems Programming', url: '#' },
            { type: 'platform', name: 'Arctic Data Store', url: '#' }
          ],
          weeklyHours: 15,
          projects: [
            'Build low-latency order router',
            'Implement market impact model',
            'Analyze microstructure patterns'
          ]
        },
        {
          id: 'research_skills',
          name: 'Research Skills',
          category: 'Research',
          level: 'Advanced',
          topics: [
            'Academic Paper Reading',
            'Research Methodology',
            'Statistical Hypothesis Testing',
            'Factor Research',
            'Alpha Generation',
            'Portfolio Construction'
          ],
          resources: [
            { type: 'platform', name: 'SSRN Papers', url: 'https://www.ssrn.com/' },
            { type: 'platform', name: 'arXiv Quantitative Finance', url: 'https://arxiv.org/archive/q-fin' },
            { type: 'book', name: 'Advances in Financial Machine Learning - Prado', url: '#' }
          ],
          weeklyHours: 10,
          projects: [
            'Replicate 3 academic papers',
            'Write original research paper',
            'Discover novel trading signal'
          ]
        }
      ],
      milestones: [
        'Publish research paper',
        'Build production-ready trading system',
        'Achieve Sharpe > 2 in backtest',
        'Complete Jane Street puzzle archives'
      ]
    },
    {
      id: 'phase4',
      name: 'Interview Mastery',
      duration: '18-24 months',
      alienForm: 'Way Big',
      description: 'Perfect interview skills and land top quant positions',
      skills: [
        {
          id: 'brain_teasers',
          name: 'Brain Teasers & Puzzles',
          category: 'Interview',
          level: 'Expert',
          topics: [
            'Probability Puzzles',
            'Logic Problems',
            'Fermi Estimation',
            'Game Theory Problems',
            'Mathematical Riddles',
            'Coding Challenges'
          ],
          resources: [
            { type: 'book', name: 'Heard on the Street - Crack', url: '#' },
            { type: 'book', name: 'A Practical Guide to Quantitative Finance Interviews', url: '#' },
            { type: 'platform', name: 'Jane Street Puzzles', url: 'https://www.janestreet.com/puzzles/' }
          ],
          weeklyHours: 10,
          projects: [
            'Solve 500+ interview problems',
            'Create problem solution database',
            'Practice whiteboard coding daily'
          ]
        },
        {
          id: 'system_design',
          name: 'System Design',
          category: 'Interview',
          level: 'Expert',
          topics: [
            'Trading System Architecture',
            'Risk Management Systems',
            'Data Pipeline Design',
            'Distributed Systems',
            'Database Design',
            'Performance Optimization'
          ],
          resources: [
            { type: 'book', name: 'Designing Data-Intensive Applications', url: '#' },
            { type: 'course', name: 'System Design Interview', url: '#' },
            { type: 'platform', name: 'Pramp Mock Interviews', url: 'https://www.pramp.com/' }
          ],
          weeklyHours: 8,
          projects: [
            'Design complete trading system',
            'Build scalable data pipeline',
            'Optimize existing systems'
          ]
        },
        {
          id: 'behavioral',
          name: 'Behavioral & Fit',
          category: 'Interview',
          level: 'Expert',
          topics: [
            'STAR Method',
            'Leadership Stories',
            'Failure & Learning',
            'Teamwork Examples',
            'Ethical Dilemmas',
            'Market Views'
          ],
          resources: [
            { type: 'guide', name: 'Jane Street Interview Guide', url: '#' },
            { type: 'platform', name: 'Glassdoor Interview Reviews', url: 'https://www.glassdoor.com/' },
            { type: 'service', name: 'Mock Interview Services', url: '#' }
          ],
          weeklyHours: 5,
          projects: [
            'Prepare 20 STAR stories',
            'Record practice interviews',
            'Get feedback from mentors'
          ]
        }
      ],
      milestones: [
        'Pass 10 mock interviews',
        'Get referrals to top firms',
        'Receive interview invitations',
        'Land dream quant role!'
      ]
    }
  ],
  
  weeklySchedule: {
    monday: ['Mathematics Study', 'Coding Practice'],
    tuesday: ['Machine Learning', 'Project Work'],
    wednesday: ['Financial Markets', 'Research Papers'],
    thursday: ['Coding Practice', 'System Design'],
    friday: ['Mock Interviews', 'Strategy Development'],
    saturday: ['Kaggle/Competitions', 'Open Source'],
    sunday: ['Review & Planning', 'Side Projects']
  },

  targetFirms: [
    {
      name: 'Jane Street',
      type: 'Proprietary Trading',
      focus: ['Market Making', 'Arbitrage', 'Research'],
      requirements: ['Strong Math', 'Problem Solving', 'Quick Thinking'],
      culture: 'Collaborative, Puzzle-focused, Meritocratic',
      compensationRange: '$400k-$600k+ (New Grad)',
      interviewProcess: ['Phone Screen', 'Probability Round', 'Trading Games', 'Onsite'],
      tips: 'Focus heavily on probability, mental math, and market intuition'
    },
    {
      name: 'Two Sigma',
      type: 'Hedge Fund',
      focus: ['Systematic Trading', 'Machine Learning', 'Data Science'],
      requirements: ['CS/Math PhD preferred', 'Research Experience', 'ML Expertise'],
      culture: 'Academic, Research-driven, Tech-focused',
      compensationRange: '$350k-$500k+ (New Grad)',
      interviewProcess: ['Coding Screen', 'Technical Rounds', 'Research Presentation', 'Onsite'],
      tips: 'Emphasize research experience and ML projects'
    },
    {
      name: 'Citadel/Citadel Securities',
      type: 'Hedge Fund / Market Maker',
      focus: ['Multi-Strategy', 'Market Making', 'Quantitative Research'],
      requirements: ['Top Academic Record', 'Competition Success', 'Technical Excellence'],
      culture: 'Intense, Performance-driven, Excellence-focused',
      compensationRange: '$400k-$550k+ (New Grad)',
      interviewProcess: ['Online Assessment', 'Technical Screens', 'Super Day'],
      tips: 'Prepare for intense technical questions and case studies'
    },
    {
      name: 'D.E. Shaw',
      type: 'Hedge Fund',
      focus: ['Systematic Strategies', 'Technology', 'Research'],
      requirements: ['Strong Academic Background', 'Research Skills', 'Innovation'],
      culture: 'Intellectual, Innovative, Technology-first',
      compensationRange: '$350k-$475k+ (New Grad)',
      interviewProcess: ['Coding Test', 'Technical Interviews', 'Research Discussion', 'Final Round'],
      tips: 'Show innovation and deep technical knowledge'
    },
    {
      name: 'Jump Trading',
      type: 'Proprietary Trading',
      focus: ['HFT', 'Low Latency', 'Technology'],
      requirements: ['Systems Programming', 'C++ Expertise', 'Performance Optimization'],
      culture: 'Tech-heavy, Fast-paced, Entrepreneurial',
      compensationRange: '$350k-$500k+ (New Grad)',
      interviewProcess: ['Coding Screen', 'Systems Design', 'Technical Deep Dive', 'Onsite'],
      tips: 'Master C++ and low-level programming concepts'
    }
  ],

  competitions: [
    {
      name: 'IMC Trading Challenge',
      frequency: 'Annual',
      skills: ['Trading Strategy', 'Risk Management', 'Quick Decision Making'],
      prize: 'Internship Opportunities + Prize Money',
      url: 'https://tradingchallenge.imc.com/'
    },
    {
      name: 'Rotman Trading Competition',
      frequency: 'Annual',
      skills: ['Algorithmic Trading', 'Market Making', 'Team Collaboration'],
      prize: 'Recognition + Networking',
      url: 'http://rit.rotman.utoronto.ca/'
    },
    {
      name: 'Jane Street ETC',
      frequency: 'Annual',
      skills: ['Manual Trading', 'Strategy', 'Mental Math'],
      prize: 'Cash Prizes + Job Opportunities',
      url: '#'
    },
    {
      name: 'Kaggle Finance Competitions',
      frequency: 'Ongoing',
      skills: ['Machine Learning', 'Data Science', 'Feature Engineering'],
      prize: 'Prize Money + Recognition',
      url: 'https://www.kaggle.com/competitions'
    },
    {
      name: 'WorldQuant Challenge',
      frequency: 'Periodic',
      skills: ['Alpha Research', 'Signal Generation', 'Backtesting'],
      prize: 'Job Opportunities + Mentorship',
      url: 'https://www.worldquant.com/challenge/'
    }
  ],

  books: {
    mustRead: [
      'Options, Futures, and Other Derivatives - John Hull',
      'Stochastic Calculus for Finance I & II - Steven Shreve',
      'The Elements of Statistical Learning - Hastie, Tibshirani, Friedman',
      'Heard on the Street - Timothy Crack',
      'A Practical Guide to Quantitative Finance Interviews - Xinfeng Zhou'
    ],
    advanced: [
      'Advances in Financial Machine Learning - Marcos López de Prado',
      'Market Microstructure Theory - Maureen O\'Hara',
      'Algorithmic and High-Frequency Trading - Cartea, Jaimungal, Penalva',
      'Monte Carlo Methods in Financial Engineering - Paul Glasserman',
      'Dynamic Hedging - Nassim Taleb'
    ],
    programming: [
      'Clean Code - Robert Martin',
      'Introduction to Algorithms - CLRS',
      'C++ Primer - Stanley Lippman',
      'Python for Finance - Yves Hilpisch',
      'Design Patterns - Gang of Four'
    ]
  },

  onlinePlatforms: [
    { name: 'Coursera', focus: 'MOOCs', cost: '$49/month', bestFor: 'Structured Learning' },
    { name: 'LeetCode', focus: 'Coding Practice', cost: '$35/month', bestFor: 'Interview Prep' },
    { name: 'QuantConnect', focus: 'Algo Trading', cost: 'Free/Paid', bestFor: 'Strategy Testing' },
    { name: 'Kaggle', focus: 'ML Competitions', cost: 'Free', bestFor: 'Practical ML' },
    { name: 'MIT OCW', focus: 'University Courses', cost: 'Free', bestFor: 'Academic Learning' },
    { name: 'arXiv', focus: 'Research Papers', cost: 'Free', bestFor: 'Latest Research' },
    { name: 'SSRN', focus: 'Finance Papers', cost: 'Free', bestFor: 'Finance Research' },
    { name: 'GitHub', focus: 'Open Source', cost: 'Free', bestFor: 'Project Showcase' }
  ]
};

// Ben 10 Alien Forms and their abilities (mapped to skills)
export const alienForms = [
  {
    id: 'grey-matter',
    name: 'Grey Matter',
    ability: 'Super Intelligence',
    description: 'Enhanced intellectual and analytical capabilities',
    skills: ['Mathematical Foundations', 'Problem Solving', 'Research'],
    color: 'gray',
    icon: '🧠'
  },
  {
    id: 'brainstorm',
    name: 'Brainstorm',
    ability: 'Electric Brain Power',
    description: 'Lightning-fast calculations and connections',
    skills: ['Machine Learning', 'Data Science', 'Algorithms'],
    color: 'yellow',
    icon: '⚡'
  },
  {
    id: 'xlr8',
    name: 'XLR8',
    ability: 'Super Speed',
    description: 'Rapid execution and quick thinking',
    skills: ['High-Frequency Trading', 'Low Latency', 'Quick Decision Making'],
    color: 'blue',
    icon: '💨'
  },
  {
    id: 'upgrade',
    name: 'Upgrade',
    ability: 'Technology Manipulation',
    description: 'Master of systems and technology',
    skills: ['System Design', 'Programming', 'Infrastructure'],
    color: 'green',
    icon: '🤖'
  },
  {
    id: 'diamondhead',
    name: 'Diamondhead',
    ability: 'Crystalline Durability',
    description: 'Solid foundations and resilience',
    skills: ['Risk Management', 'Portfolio Construction', 'Stability'],
    color: 'cyan',
    icon: '💎'
  },
  {
    id: 'alien-x',
    name: 'Alien X',
    ability: 'Reality Warping',
    description: 'Master of all domains - The Ultimate Form',
    skills: ['All Skills Mastered', 'Innovation', 'Leadership'],
    color: 'purple',
    icon: '🌌'
  },
  {
    id: 'way-big',
    name: 'Way Big',
    ability: 'Cosmic Size & Strength',
    description: 'Industry giant ready for any challenge',
    skills: ['Interview Mastery', 'Complete Knowledge', 'Market Dominance'],
    color: 'red',
    icon: '🗿'
  }
];

// Achievement System
export const achievements = [
  // Foundation Achievements
  { id: 'first_step', name: 'First Step', description: 'Complete your first module', xp: 100, icon: '👣' },
  { id: 'math_novice', name: 'Math Novice', description: 'Complete basic mathematics', xp: 500, icon: '📐' },
  { id: 'code_warrior', name: 'Code Warrior', description: 'Solve 100 coding problems', xp: 750, icon: '⚔️' },
  { id: 'probability_master', name: 'Probability Master', description: 'Master probability theory', xp: 1000, icon: '🎲' },
  
  // Intermediate Achievements
  { id: 'ml_pioneer', name: 'ML Pioneer', description: 'Complete first ML project', xp: 1500, icon: '🤖' },
  { id: 'market_explorer', name: 'Market Explorer', description: 'Understand all market types', xp: 1250, icon: '📈' },
  { id: 'strategy_builder', name: 'Strategy Builder', description: 'Build 5 trading strategies', xp: 2000, icon: '🏗️' },
  { id: 'paper_trader', name: 'Paper Trader', description: 'Achieve positive returns in simulation', xp: 2500, icon: '📊' },
  
  // Advanced Achievements
  { id: 'research_scholar', name: 'Research Scholar', description: 'Read 50 research papers', xp: 3000, icon: '📚' },
  { id: 'competition_winner', name: 'Competition Winner', description: 'Place in a trading competition', xp: 5000, icon: '🏆' },
  { id: 'system_architect', name: 'System Architect', description: 'Design production trading system', xp: 4000, icon: '🏛️' },
  { id: 'interview_ace', name: 'Interview Ace', description: 'Pass 10 mock interviews', xp: 4500, icon: '🎯' },
  
  // Ultimate Achievements
  { id: 'quant_master', name: 'Quant Master', description: 'Complete all phases', xp: 10000, icon: '👑' },
  { id: 'jane_street_ready', name: 'Jane Street Ready', description: 'Meet all Jane Street requirements', xp: 15000, icon: '🚀' },
  { id: 'top_1_percent', name: 'Top 1%', description: 'Reach the top 1% of quants', xp: 20000, icon: '💫' },
  { id: 'omnitrix_master', name: 'Omnitrix Master', description: 'Unlock all alien forms', xp: 25000, icon: '⌚' }
];

// Daily Challenges
export const dailyChallenges = [
  { type: 'math', difficulty: 'easy', xp: 50, description: 'Solve a probability puzzle' },
  { type: 'coding', difficulty: 'medium', xp: 100, description: 'Complete a LeetCode medium problem' },
  { type: 'finance', difficulty: 'hard', xp: 150, description: 'Analyze a market anomaly' },
  { type: 'research', difficulty: 'medium', xp: 75, description: 'Read and summarize a research paper' },
  { type: 'project', difficulty: 'hard', xp: 200, description: 'Add feature to trading project' }
];

// Skill Tree Connections
export const skillConnections = [
  { from: 'math_foundations', to: 'probability_stats' },
  { from: 'probability_stats', to: 'stochastic_calculus' },
  { from: 'programming_foundations', to: 'machine_learning' },
  { from: 'machine_learning', to: 'quant_strategies' },
  { from: 'stochastic_calculus', to: 'financial_markets' },
  { from: 'financial_markets', to: 'high_frequency' },
  { from: 'quant_strategies', to: 'research_skills' },
  { from: 'research_skills', to: 'system_design' },
  { from: 'high_frequency', to: 'interview_mastery' }
];