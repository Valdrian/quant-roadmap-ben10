import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Award, Clock, Target, Calendar,
  CheckCircle, Star, Zap, Trophy, BarChart3,
  Activity, Brain, Code, BookOpen
} from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { roadmapData, achievements, alienForms } from '../data/roadmapData';
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressPage = () => {
  const {
    level,
    experience,
    experienceToNextLevel,
    completedSkills,
    achievements: userAchievements,
    dailyStreak,
    totalStudyHours,
    stats,
    unlockedAliens,
    solvedProblems,
    projectsCompleted
  } = useGameStore();

  // Calculate overall progress
  const totalSkills = roadmapData.phases.reduce((acc, phase) => acc + phase.skills.length, 0);
  const overallProgress = (completedSkills.length / totalSkills) * 100;

  // Calculate phase progress
  const phaseProgress = roadmapData.phases.map(phase => {
    const phaseSkills = phase.skills.map(s => s.id);
    const completed = phaseSkills.filter(id => completedSkills.includes(id)).length;
    return {
      name: phase.name.split(' ')[0],
      progress: (completed / phaseSkills.length) * 100,
      completed,
      total: phaseSkills.length
    };
  });

  // Weekly study data (mock data for visualization)
  const weeklyData = [
    { day: 'Mon', hours: 4 },
    { day: 'Tue', hours: 5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 6 },
    { day: 'Fri', hours: 4 },
    { day: 'Sat', hours: 7 },
    { day: 'Sun', hours: 5 }
  ];

  // Skills radar chart data
  const radarData = [
    { skill: 'Math', value: stats.mathScore },
    { skill: 'Programming', value: stats.programmingScore },
    { skill: 'Finance', value: stats.financeScore },
    { skill: 'Research', value: stats.researchScore },
    { skill: 'Interview', value: stats.interviewScore }
  ];

  // Achievement progress
  const achievementProgress = (userAchievements.length / achievements.length) * 100;

  // Time to completion estimate
  const averageProgressPerDay = overallProgress / Math.max(1, dailyStreak);
  const estimatedDaysRemaining = Math.ceil((100 - overallProgress) / Math.max(0.1, averageProgressPerDay));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-orbitron font-bold text-ben10-green mb-4">
          Progress Dashboard
        </h1>
        <p className="text-lg text-gray-300">
          Track your transformation journey to becoming a top quant researcher
        </p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="ben10-card text-center"
        >
          <Trophy className="mx-auto mb-2 text-alien-yellow" size={32} />
          <p className="text-3xl font-orbitron font-bold text-white mb-1">{level}</p>
          <p className="text-sm text-gray-400">Current Level</p>
          <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-ben10-green to-alien-blue"
              style={{ width: `${(experience / experienceToNextLevel) * 100}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="ben10-card text-center"
        >
          <Zap className="mx-auto mb-2 text-ben10-green" size={32} />
          <p className="text-3xl font-orbitron font-bold text-white mb-1">{dailyStreak}</p>
          <p className="text-sm text-gray-400">Day Streak</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="ben10-card text-center"
        >
          <Clock className="mx-auto mb-2 text-alien-blue" size={32} />
          <p className="text-3xl font-orbitron font-bold text-white mb-1">{totalStudyHours}</p>
          <p className="text-sm text-gray-400">Study Hours</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="ben10-card text-center"
        >
          <Target className="mx-auto mb-2 text-alien-purple" size={32} />
          <p className="text-3xl font-orbitron font-bold text-white mb-1">
            {Math.round(overallProgress)}%
          </p>
          <p className="text-sm text-gray-400">Overall Progress</p>
        </motion.div>
      </div>

      {/* Progress Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Phase Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="ben10-card"
        >
          <h2 className="text-xl font-orbitron text-ben10-green mb-4">Phase Progress</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={phaseProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff00' }}
                labelStyle={{ color: '#00ff00' }}
              />
              <Bar dataKey="progress" fill="#00ff00" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {phaseProgress.map((phase, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-400">{roadmapData.phases[index].name}</span>
                <span className="text-ben10-green">{phase.completed}/{phase.total} skills</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Weekly Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="ben10-card"
        >
          <h2 className="text-xl font-orbitron text-ben10-green mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff00' }}
                labelStyle={{ color: '#00ff00' }}
              />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#00d4ff" 
                strokeWidth={2}
                dot={{ fill: '#00ff00', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Avg Daily</p>
              <p className="text-xl font-orbitron text-alien-blue">4.9h</p>
            </div>
            <div>
              <p className="text-gray-400">This Week</p>
              <p className="text-xl font-orbitron text-ben10-green">34h</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Radar and Stats */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Skills Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ben10-card lg:col-span-2"
        >
          <h2 className="text-xl font-orbitron text-ben10-green mb-4">Skill Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="skill" stroke="#888" />
              <PolarRadiusAxis stroke="#888" domain={[0, 100]} />
              <Radar 
                name="Skills" 
                dataKey="value" 
                stroke="#00ff00" 
                fill="#00ff00" 
                fillOpacity={0.3} 
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff00' }}
                labelStyle={{ color: '#00ff00' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="ben10-card">
            <h3 className="text-lg font-orbitron text-alien-purple mb-3">Activity Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Problems Solved</span>
                <span className="text-sm font-bold text-white">{solvedProblems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Projects Completed</span>
                <span className="text-sm font-bold text-white">{projectsCompleted.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Skills Mastered</span>
                <span className="text-sm font-bold text-white">{completedSkills.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Achievements</span>
                <span className="text-sm font-bold text-white">{userAchievements.length}</span>
              </div>
            </div>
          </div>

          <div className="ben10-card">
            <h3 className="text-lg font-orbitron text-alien-yellow mb-3">Time Estimate</h3>
            <div className="text-center">
              <p className="text-3xl font-orbitron text-white mb-1">
                {estimatedDaysRemaining}
              </p>
              <p className="text-sm text-gray-400">days to completion</p>
              <p className="text-xs text-alien-blue mt-2">at current pace</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="ben10-card mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-orbitron text-ben10-green">Achievements</h2>
          <span className="text-sm text-gray-400">
            {userAchievements.length}/{achievements.length} Unlocked
          </span>
        </div>
        <div className="mb-4">
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-alien-yellow to-alien-purple transition-all duration-500"
              style={{ width: `${achievementProgress}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {achievements.slice(0, 12).map((achievement) => {
            const isUnlocked = userAchievements.includes(achievement.id);
            return (
              <motion.div
                key={achievement.id}
                whileHover={{ scale: 1.05 }}
                className={`
                  achievement-badge text-center p-3 rounded-lg
                  ${isUnlocked ? 'earned' : 'border-gray-700 opacity-50'}
                `}
              >
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <p className="text-xs text-gray-300">{achievement.name}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Alien Forms Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="ben10-card"
      >
        <h2 className="text-xl font-orbitron text-ben10-green mb-4">Alien Forms Unlocked</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {alienForms.map((alien) => {
            const isUnlocked = unlockedAliens.includes(alien.id);
            return (
              <div
                key={alien.id}
                className={`
                  text-center p-4 rounded-lg border-2 transition-all
                  ${isUnlocked 
                    ? 'bg-gray-800/50 border-ben10-green' 
                    : 'bg-gray-900/50 border-gray-800 opacity-50'
                  }
                `}
              >
                <div className="text-3xl mb-2">{alien.icon}</div>
                <p className="text-xs font-orbitron text-white">{alien.name}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressPage;