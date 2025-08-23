import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Target, BookOpen, Code, Brain, 
  ChevronRight, CheckCircle, Lock, Star,
  Zap, Award, TrendingUp, Calendar
} from 'lucide-react';
import { roadmapData } from '../data/roadmapData';
import { useGameStore } from '../store/gameStore';
import toast from 'react-hot-toast';

const RoadmapPage = () => {
  const [selectedPhase, setSelectedPhase] = useState(roadmapData.phases[0]);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const { 
    completedSkills, 
    completeSkill, 
    currentPhase,
    addExperience,
    unlockAlienForm 
  } = useGameStore();

  const handleSkillComplete = (skillId) => {
    completeSkill(skillId);
    toast.success('Skill completed! +500 XP');
    
    // Check if phase is complete
    const phaseSkills = selectedPhase.skills.map(s => s.id);
    const phaseComplete = phaseSkills.every(id => 
      completedSkills.includes(id) || id === skillId
    );
    
    if (phaseComplete) {
      toast.success(`Phase "${selectedPhase.name}" completed! Alien form unlocked!`);
      unlockAlienForm(selectedPhase.alienForm.toLowerCase().replace(' ', '-'));
      addExperience(2000);
    }
  };

  const getPhaseProgress = (phase) => {
    const phaseSkills = phase.skills.map(s => s.id);
    const completed = phaseSkills.filter(id => completedSkills.includes(id)).length;
    return (completed / phaseSkills.length) * 100;
  };

  const isPhaseUnlocked = (phaseIndex) => {
    if (phaseIndex === 0) return true;
    const previousPhase = roadmapData.phases[phaseIndex - 1];
    const previousPhaseProgress = getPhaseProgress(previousPhase);
    return previousPhaseProgress >= 80; // 80% of previous phase must be complete
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-orbitron font-bold text-ben10-green mb-4">
          2-Year Quant Research Roadmap
        </h1>
        <p className="text-lg text-gray-300">
          Your transformation journey from BSc Math student to Top 1% Quant Researcher
        </p>
      </motion.div>

      {/* Phase Timeline */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 min-w-max pb-4">
          {roadmapData.phases.map((phase, index) => {
            const progress = getPhaseProgress(phase);
            const isUnlocked = isPhaseUnlocked(index);
            const isActive = selectedPhase.id === phase.id;
            
            return (
              <motion.button
                key={phase.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => isUnlocked && setSelectedPhase(phase)}
                disabled={!isUnlocked}
                className={`
                  relative min-w-[250px] p-6 rounded-xl border-2 transition-all duration-300
                  ${isActive 
                    ? 'bg-ben10-green/10 border-ben10-green shadow-lg shadow-ben10-green/20' 
                    : isUnlocked
                    ? 'bg-gray-800/50 border-gray-700 hover:border-ben10-green/50'
                    : 'bg-gray-900/50 border-gray-800 opacity-50 cursor-not-allowed'
                  }
                `}
              >
                {/* Progress Ring */}
                <div className="absolute -top-3 -right-3">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-gray-700"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${progress * 1.26} 126`}
                        className="text-ben10-green"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{Math.round(progress)}%</span>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2 mb-2">
                    {isUnlocked ? (
                      progress === 100 ? (
                        <CheckCircle className="text-alien-yellow" size={20} />
                      ) : (
                        <Zap className="text-ben10-green" size={20} />
                      )
                    ) : (
                      <Lock className="text-gray-500" size={20} />
                    )}
                    <h3 className="font-orbitron font-bold text-white">{phase.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{phase.duration}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{roadmapData.phases.find(p => p.id === phase.id) && 
                      ['🧠', '⚡', '🌌', '🗿'][index]
                    }</span>
                    <span className="text-sm text-alien-purple font-bold">{phase.alienForm}</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Selected Phase Details */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Phase Overview */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            key={selectedPhase.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="ben10-card"
          >
            <h2 className="text-2xl font-orbitron text-ben10-green mb-4">
              {selectedPhase.name}: {selectedPhase.alienForm}
            </h2>
            <p className="text-gray-300 mb-6">{selectedPhase.description}</p>
            
            {/* Skills */}
            <div className="space-y-4">
              {selectedPhase.skills.map((skill, index) => {
                const isCompleted = completedSkills.includes(skill.id);
                const isExpanded = expandedSkill === skill.id;
                
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      p-4 rounded-lg border transition-all duration-300
                      ${isCompleted 
                        ? 'bg-green-900/20 border-alien-yellow' 
                        : 'bg-gray-800/50 border-gray-700 hover:border-ben10-green/50'
                      }
                    `}
                  >
                    <div 
                      className="flex items-start justify-between cursor-pointer"
                      onClick={() => setExpandedSkill(isExpanded ? null : skill.id)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {isCompleted ? (
                            <CheckCircle className="text-alien-yellow" size={24} />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-gray-600" />
                          )}
                          <h3 className="text-lg font-orbitron text-white">{skill.name}</h3>
                          <span className={`
                            px-2 py-1 rounded text-xs font-bold
                            ${skill.level === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                              skill.level === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                              'bg-red-900/50 text-red-400'}
                          `}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {skill.weeklyHours}h/week
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen size={14} />
                            {skill.resources.length} resources
                          </span>
                          <span className="flex items-center gap-1">
                            <Code size={14} />
                            {skill.projects.length} projects
                          </span>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
                        size={20} 
                      />
                    </div>
                    
                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        {/* Topics */}
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-ben10-green mb-2">Topics to Master:</h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.topics.map((topic, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-300"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Resources */}
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-ben10-green mb-2">Resources:</h4>
                          <div className="space-y-2">
                            {skill.resources.map((resource, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <span className={`
                                  px-2 py-0.5 rounded text-xs font-bold
                                  ${resource.type === 'course' ? 'bg-blue-900/50 text-blue-400' :
                                    resource.type === 'book' ? 'bg-purple-900/50 text-purple-400' :
                                    'bg-green-900/50 text-green-400'}
                                `}>
                                  {resource.type}
                                </span>
                                <a 
                                  href={resource.url}
                                  className="text-gray-300 hover:text-ben10-green transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {resource.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Projects */}
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-ben10-green mb-2">Projects:</h4>
                          <ul className="space-y-1">
                            {skill.projects.map((project, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className="text-alien-yellow mt-0.5">•</span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Action Button */}
                        {!isCompleted && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSkillComplete(skill.id);
                            }}
                            className="omnitrix-button w-full text-sm"
                          >
                            Mark as Complete
                          </button>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Milestones */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="ben10-card"
          >
            <h3 className="text-xl font-orbitron text-ben10-green mb-4">Phase Milestones</h3>
            <div className="space-y-3">
              {selectedPhase.milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="text-alien-yellow mt-0.5" size={16} />
                  <p className="text-sm text-gray-300">{milestone}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weekly Schedule */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="ben10-card"
          >
            <h3 className="text-xl font-orbitron text-ben10-green mb-4">Weekly Schedule</h3>
            <div className="space-y-2">
              {Object.entries(roadmapData.weeklySchedule).map(([day, activities]) => (
                <div key={day} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-alien-purple uppercase w-12">
                    {day.slice(0, 3)}
                  </span>
                  <div className="flex-1">
                    {activities.map((activity, i) => (
                      <span key={i} className="text-xs text-gray-400">
                        {activity}{i < activities.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Progress Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="ben10-card"
          >
            <h3 className="text-xl font-orbitron text-ben10-green mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Phase Progress</span>
                  <span className="text-ben10-green font-bold">
                    {Math.round(getPhaseProgress(selectedPhase))}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${getPhaseProgress(selectedPhase)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Overall Journey</span>
                  <span className="text-alien-purple font-bold">
                    {Math.round(
                      roadmapData.phases.reduce((acc, phase) => acc + getPhaseProgress(phase), 0) / 
                      roadmapData.phases.length
                    )}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="h-full bg-gradient-to-r from-alien-purple to-alien-yellow transition-all duration-500"
                    style={{ 
                      width: `${
                        roadmapData.phases.reduce((acc, phase) => acc + getPhaseProgress(phase), 0) / 
                        roadmapData.phases.length
                      }%` 
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;