import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Code, Calculator, Puzzle, Target, Clock,
  ChevronRight, CheckCircle, AlertCircle, BookOpen,
  Lightbulb, Star, Trophy, DollarSign, Users, Zap
} from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import toast from 'react-hot-toast';

const InterviewPrepPage = () => {
  const [activeCategory, setActiveCategory] = useState('probability');
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const { addExperience, updateStats } = useGameStore();

  const categories = [
    { id: 'probability', name: 'Probability & Stats', icon: Calculator, color: 'text-ben10-green' },
    { id: 'brainteasers', name: 'Brain Teasers', icon: Puzzle, color: 'text-alien-purple' },
    { id: 'coding', name: 'Coding Challenges', icon: Code, color: 'text-alien-blue' },
    { id: 'market', name: 'Market Questions', icon: Target, color: 'text-alien-yellow' },
    { id: 'behavioral', name: 'Behavioral', icon: Users, color: 'text-alien-red' },
    { id: 'system', name: 'System Design', icon: Brain, color: 'text-white' }
  ];

  const interviewProblems = {
    probability: [
      {
        id: 'prob1',
        difficulty: 'Medium',
        title: 'Two Dice Sum',
        question: 'You roll two fair six-sided dice. What is the probability that their sum is 7?',
        hint: 'Count the favorable outcomes and divide by total possible outcomes.',
        solution: 'Total outcomes: 6×6 = 36. Favorable outcomes for sum=7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. Probability = 6/36 = 1/6.',
        concepts: ['Basic Probability', 'Combinatorics']
      },
      {
        id: 'prob2',
        difficulty: 'Hard',
        title: 'Monty Hall Problem',
        question: 'In a game show, there are 3 doors. Behind one is a car, behind the others are goats. You pick door 1. The host, who knows what\'s behind each door, opens door 3 revealing a goat. Should you switch to door 2?',
        hint: 'Consider the probability of winning if you switch vs if you stay.',
        solution: 'Yes, you should switch! Initially, P(car in door 1) = 1/3, P(car in door 2 or 3) = 2/3. After the host opens door 3 (always revealing a goat), P(car in door 2) = 2/3. Switching doubles your chances of winning.',
        concepts: ['Conditional Probability', 'Bayes Theorem']
      },
      {
        id: 'prob3',
        difficulty: 'Jane Street',
        title: 'Biased Coin Detection',
        question: 'You have 100 coins, 99 are fair and 1 is biased (heads 60% of the time). You pick a coin at random and flip it 10 times, getting 7 heads. What\'s the probability you picked the biased coin?',
        hint: 'Use Bayes\' theorem with the prior and likelihood.',
        solution: 'P(biased|7H) = P(7H|biased)×P(biased) / P(7H). P(biased) = 1/100. P(7H|biased) = C(10,7)×0.6^7×0.4^3 ≈ 0.215. P(7H|fair) = C(10,7)×0.5^10 ≈ 0.117. P(7H) = 0.215×(1/100) + 0.117×(99/100). Final: P(biased|7H) ≈ 1.8%',
        concepts: ['Bayes Theorem', 'Binomial Distribution']
      }
    ],
    brainteasers: [
      {
        id: 'brain1',
        difficulty: 'Easy',
        title: '25 Horses',
        question: 'You have 25 horses and can race 5 at a time. What\'s the minimum number of races needed to find the 3 fastest horses?',
        hint: 'Think about how to eliminate horses that cannot be in the top 3.',
        solution: '7 races. First 5 races: divide 25 horses into 5 groups. Race 6: race the 5 winners. Race 7: race 2nd and 3rd from winner\'s group, 2nd from 2nd place group, and 1st from 3rd place group with the overall 1st place horse.',
        concepts: ['Logic', 'Optimization']
      },
      {
        id: 'brain2',
        difficulty: 'Medium',
        title: 'Burning Ropes',
        question: 'You have two ropes that each burn in exactly 1 hour, but not uniformly. How can you measure exactly 45 minutes?',
        hint: 'You can light ropes from both ends.',
        solution: 'Light rope 1 from both ends and rope 2 from one end. When rope 1 finishes (30 min), light the other end of rope 2. Rope 2 will burn out in another 15 min. Total: 45 minutes.',
        concepts: ['Creative Problem Solving']
      },
      {
        id: 'brain3',
        difficulty: 'Jane Street',
        title: 'Blue-Eyed Islanders',
        question: '100 people on an island, some have blue eyes. They can see others\' eye colors but not their own. If someone knows they have blue eyes, they must leave at midnight. A visitor says "I see someone with blue eyes." What happens if there are exactly N blue-eyed people?',
        hint: 'Use induction starting with N=1.',
        solution: 'All N blue-eyed people leave on day N. Proof by induction: N=1: person sees no other blue eyes, must be them, leaves day 1. N=k: each blue-eyed person sees k-1 others. If nobody leaves by day k-1, they deduce there are k blue-eyed people including themselves, all leave on day k.',
        concepts: ['Induction', 'Common Knowledge']
      }
    ],
    coding: [
      {
        id: 'code1',
        difficulty: 'Medium',
        title: 'Maximum Profit Trading',
        question: 'Given an array of stock prices, find the maximum profit from buying and selling once.',
        hint: 'Track the minimum price seen so far and the maximum profit.',
        solution: `def maxProfit(prices):
    if not prices: return 0
    min_price = prices[0]
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`,
        concepts: ['Dynamic Programming', 'Arrays']
      },
      {
        id: 'code2',
        difficulty: 'Hard',
        title: 'Order Book Matching',
        question: 'Implement an order matching engine that matches buy and sell orders based on price-time priority.',
        hint: 'Use heaps for buy and sell orders.',
        solution: `import heapq
class OrderBook:
    def __init__(self):
        self.buy_orders = []  # max heap (negative prices)
        self.sell_orders = []  # min heap
    
    def add_order(self, side, price, quantity, timestamp):
        if side == 'BUY':
            heapq.heappush(self.buy_orders, (-price, timestamp, quantity))
        else:
            heapq.heappush(self.sell_orders, (price, timestamp, quantity))
        self.match_orders()
    
    def match_orders(self):
        while self.buy_orders and self.sell_orders:
            buy_price = -self.buy_orders[0][0]
            sell_price = self.sell_orders[0][0]
            if buy_price >= sell_price:
                # Execute trade
                # ... implementation details`,
        concepts: ['Data Structures', 'Heaps', 'Trading Systems']
      }
    ],
    market: [
      {
        id: 'market1',
        difficulty: 'Medium',
        title: 'Market Making Strategy',
        question: 'You\'re a market maker in a stock. How do you set your bid-ask spread?',
        hint: 'Consider volatility, volume, inventory risk, and adverse selection.',
        solution: 'Spread = f(volatility, volume, inventory, competition). Wider spreads for: higher volatility (more risk), lower volume (less liquidity), large inventory (risk management), higher adverse selection (informed traders). Tighter spreads for competitive markets.',
        concepts: ['Market Microstructure', 'Risk Management']
      },
      {
        id: 'market2',
        difficulty: 'Jane Street',
        title: 'Options Arbitrage',
        question: 'Call option price = $5, Put option price = $3, both with strike $100, current stock price = $102. Risk-free rate = 2%, time to expiry = 0.25 years. Is there an arbitrage opportunity?',
        hint: 'Check put-call parity: C - P = S - K*e^(-rt)',
        solution: 'Put-call parity: C - P should equal S - K*e^(-rt) = 102 - 100*e^(-0.02*0.25) = 102 - 99.50 = 2.50. Actual: C - P = 5 - 3 = 2. Since 2 < 2.50, there\'s an arbitrage: Buy call, sell put, short stock. Profit = 0.50 per share.',
        concepts: ['Options', 'Put-Call Parity', 'Arbitrage']
      }
    ],
    behavioral: [
      {
        id: 'behav1',
        difficulty: 'Standard',
        title: 'Why Quantitative Finance?',
        question: 'Why do you want to work in quantitative finance, specifically at Jane Street?',
        hint: 'Be specific about what attracts you: problem-solving, math application, market impact.',
        solution: 'Key points: 1) Passion for applying mathematical models to real markets, 2) Intellectual challenge of competing against the smartest minds, 3) Jane Street specifically: collaborative culture, focus on education, cutting-edge technology, market maker role in providing liquidity.',
        concepts: ['Motivation', 'Company Research']
      },
      {
        id: 'behav2',
        difficulty: 'Standard',
        title: 'Failure and Learning',
        question: 'Tell me about a time when you failed at something important. What did you learn?',
        hint: 'Use STAR method: Situation, Task, Action, Result.',
        solution: 'Structure: 1) Context: challenging project/competition, 2) What went wrong: specific failure point, 3) Your response: how you analyzed and addressed it, 4) Lessons learned: concrete takeaways, 5) Application: how you\'ve applied these lessons since.',
        concepts: ['STAR Method', 'Self-Reflection']
      }
    ],
    system: [
      {
        id: 'sys1',
        difficulty: 'Hard',
        title: 'Design Trading System',
        question: 'Design a high-frequency trading system that can handle 1M orders/second.',
        hint: 'Consider latency, throughput, reliability, and risk management.',
        solution: `Architecture components:
1. Network: Colocation, direct market access, kernel bypass (DPDK)
2. Order Gateway: Lock-free queues, zero-copy, NUMA awareness
3. Matching Engine: In-memory, custom data structures, microsecond latency
4. Risk Management: Pre-trade checks, position limits, kill switch
5. Data Feed: Multicast, redundancy, normalization
6. Persistence: Async logging, replay capability`,
        concepts: ['System Architecture', 'Low Latency', 'Distributed Systems']
      }
    ]
  };

  const handleSolveProblem = (problem) => {
    addExperience(100);
    updateStats('interviewScore', 5);
    toast.success(`Problem solved! +100 XP`);
    setShowSolution(true);
  };

  const janeStreetTips = [
    {
      icon: Brain,
      title: 'Mental Math',
      description: 'Practice quick calculations without calculator. Jane Street values speed and accuracy.'
    },
    {
      icon: Puzzle,
      title: 'Problem Solving',
      description: 'Focus on the approach, not just the answer. Explain your thinking clearly.'
    },
    {
      icon: Target,
      title: 'Market Intuition',
      description: 'Understand market dynamics, arbitrage, and risk management concepts.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Jane Street values teamwork. Show you can work well with others.'
    }
  ];

  const interviewTimeline = [
    { stage: 'Application', duration: '1 week', description: 'Resume screening' },
    { stage: 'Phone Screen', duration: '1 hour', description: 'Probability and mental math' },
    { stage: 'Technical Round', duration: '2 hours', description: 'Deeper technical questions' },
    { stage: 'Final Round', duration: 'Full day', description: 'Multiple interviews, trading games' }
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
          Interview Preparation
        </h1>
        <p className="text-lg text-gray-300">
          Master the skills needed to ace Jane Street and other top quant firm interviews
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-3 mb-8 pb-2">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
                ${activeCategory === category.id
                  ? 'bg-ben10-green/20 border border-ben10-green/30'
                  : 'bg-gray-800/50 hover:bg-gray-800'
                }
              `}
            >
              <Icon className={category.color} size={18} />
              <span className={`font-space text-sm ${
                activeCategory === category.id ? 'text-ben10-green' : 'text-gray-400'
              }`}>
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Problems Section */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Problem List */}
        <div className="lg:col-span-2 space-y-4">
          {interviewProblems[activeCategory]?.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="ben10-card cursor-pointer"
              onClick={() => {
                setSelectedProblem(problem);
                setShowSolution(false);
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-orbitron text-white">{problem.title}</h3>
                    <span className={`
                      px-2 py-1 rounded text-xs font-bold
                      ${problem.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                        problem.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                        problem.difficulty === 'Hard' ? 'bg-red-900/50 text-red-400' :
                        'bg-alien-purple/20 text-alien-purple'}
                    `}>
                      {problem.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{problem.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {problem.concepts.map((concept, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="text-gray-400 mt-1" size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Jane Street Tips */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="ben10-card"
          >
            <h3 className="text-xl font-orbitron text-alien-yellow mb-4">Jane Street Tips</h3>
            <div className="space-y-3">
              {janeStreetTips.map((tip, index) => (
                <div key={index} className="flex gap-3">
                  <tip.icon className="text-ben10-green mt-1" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{tip.title}</p>
                    <p className="text-xs text-gray-400">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="ben10-card"
          >
            <h3 className="text-xl font-orbitron text-alien-purple mb-4">Interview Process</h3>
            <div className="space-y-3">
              {interviewTimeline.map((stage, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-ben10-green rounded-full"></div>
                  {index < interviewTimeline.length - 1 && (
                    <div className="absolute left-[3px] top-4 w-0.5 h-8 bg-gray-700"></div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-white">{stage.stage}</p>
                    <p className="text-xs text-alien-blue">{stage.duration}</p>
                    <p className="text-xs text-gray-400">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Problem Detail Modal */}
      {selectedProblem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="ben10-card max-w-3xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-orbitron text-ben10-green mb-2">
                  {selectedProblem.title}
                </h2>
                <span className={`
                  px-2 py-1 rounded text-xs font-bold
                  ${selectedProblem.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                    selectedProblem.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                    selectedProblem.difficulty === 'Hard' ? 'bg-red-900/50 text-red-400' :
                    'bg-alien-purple/20 text-alien-purple'}
                `}>
                  {selectedProblem.difficulty}
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedProblem(null);
                  setShowSolution(false);
                }}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-orbitron text-alien-purple mb-2">Problem</h3>
              <p className="text-gray-300">{selectedProblem.question}</p>
            </div>

            {!showSolution && (
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-alien-blue/30">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="text-alien-blue" size={18} />
                  <h4 className="text-sm font-bold text-alien-blue">Hint</h4>
                </div>
                <p className="text-sm text-gray-400">{selectedProblem.hint}</p>
              </div>
            )}

            {showSolution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <h3 className="text-lg font-orbitron text-alien-yellow mb-2">Solution</h3>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                    {selectedProblem.solution}
                  </pre>
                </div>
              </motion.div>
            )}

            <div className="mb-4">
              <h4 className="text-sm font-bold text-gray-400 mb-2">Key Concepts</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProblem.concepts.map((concept, i) => (
                  <span key={i} className="px-3 py-1 bg-ben10-green/20 rounded text-sm text-ben10-green">
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {!showSolution ? (
                <button
                  onClick={() => handleSolveProblem(selectedProblem)}
                  className="omnitrix-button flex-1"
                >
                  Show Solution
                </button>
              ) : (
                <div className="flex-1 text-center py-3 bg-green-900/30 rounded-lg border border-alien-yellow">
                  <span className="text-alien-yellow font-bold">✓ Problem Studied</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Resources Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="ben10-card"
      >
        <h2 className="text-2xl font-orbitron text-ben10-green mb-6">Interview Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <BookOpen className="text-alien-purple mb-2" size={24} />
            <h3 className="font-orbitron text-white mb-2">Heard on the Street</h3>
            <p className="text-xs text-gray-400">Classic quant interview questions book</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Star className="text-alien-yellow mb-2" size={24} />
            <h3 className="font-orbitron text-white mb-2">Jane Street Puzzle Archive</h3>
            <p className="text-xs text-gray-400">Monthly puzzles from Jane Street</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Code className="text-ben10-green mb-2" size={24} />
            <h3 className="font-orbitron text-white mb-2">LeetCode Premium</h3>
            <p className="text-xs text-gray-400">Company-specific coding questions</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InterviewPrepPage;