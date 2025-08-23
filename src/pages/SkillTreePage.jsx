import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Lock, CheckCircle, Star, Zap,
  Brain, Code, TrendingUp, BookOpen, Target
} from 'lucide-react';
import { roadmapData, skillConnections } from '../data/roadmapData';
import { useGameStore } from '../store/gameStore';
import toast from 'react-hot-toast';

const SkillTreePage = () => {
  const canvasRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { 
    completedSkills, 
    skillProgress,
    completeSkill,
    updateSkillProgress,
    addExperience 
  } = useGameStore();

  // Flatten all skills from phases
  const allSkills = roadmapData.phases.flatMap(phase => 
    phase.skills.map(skill => ({
      ...skill,
      phase: phase.name,
      phaseId: phase.id
    }))
  );

  // Calculate skill positions for tree layout
  const getSkillPosition = (skillId) => {
    const skill = allSkills.find(s => s.id === skillId);
    if (!skill) return { x: 0, y: 0 };
    
    const phaseIndex = roadmapData.phases.findIndex(p => p.id === skill.phaseId);
    const skillIndex = roadmapData.phases[phaseIndex].skills.findIndex(s => s.id === skillId);
    
    const x = 200 + phaseIndex * 300;
    const y = 150 + skillIndex * 150;
    
    return { x, y };
  };

  // Check if skill is unlocked (prerequisites completed)
  const isSkillUnlocked = (skillId) => {
    const prerequisites = skillConnections
      .filter(conn => conn.to === skillId)
      .map(conn => conn.from);
    
    if (prerequisites.length === 0) return true; // No prerequisites
    return prerequisites.every(prereq => completedSkills.includes(prereq));
  };

  // Draw connections between skills
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw connections
    skillConnections.forEach(connection => {
      const fromPos = getSkillPosition(connection.from);
      const toPos = getSkillPosition(connection.to);
      
      const isFromCompleted = completedSkills.includes(connection.from);
      const isToCompleted = completedSkills.includes(connection.to);
      
      ctx.beginPath();
      ctx.moveTo(fromPos.x, fromPos.y);
      
      // Create curved path
      const midX = (fromPos.x + toPos.x) / 2;
      ctx.bezierCurveTo(
        midX, fromPos.y,
        midX, toPos.y,
        toPos.x, toPos.y
      );
      
      // Style based on completion status
      if (isFromCompleted && isToCompleted) {
        ctx.strokeStyle = '#ffd700'; // Gold for fully completed path
        ctx.lineWidth = 3;
      } else if (isFromCompleted) {
        ctx.strokeStyle = '#00ff00'; // Green for partially completed
        ctx.lineWidth = 2;
      } else {
        ctx.strokeStyle = '#444444'; // Gray for locked
        ctx.lineWidth = 1;
      }
      
      ctx.stroke();
      
      // Draw arrow
      if (isFromCompleted) {
        const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x);
        ctx.save();
        ctx.translate(toPos.x - 40, toPos.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-10, -5);
        ctx.lineTo(-10, 5);
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
        ctx.restore();
      }
    });
  }, [completedSkills, skillConnections]);

  const handleSkillClick = (skill) => {
    if (!isSkillUnlocked(skill.id)) {
      toast.error('Complete prerequisites first!');
      return;
    }
    setSelectedSkill(skill);
  };

  const handleStartSkill = (skill) => {
    updateSkillProgress(skill.id, 25);
    addExperience(100);
    toast.success('Started learning ' + skill.name);
  };

  const handleCompleteSkill = (skill) => {
    completeSkill(skill.id);
    toast.success('Skill mastered! +500 XP');
    setSelectedSkill(null);
  };

  // Group skills by category
  const skillCategories = {
    Mathematics: { icon: Brain, color: 'text-alien-purple' },
    Programming: { icon: Code, color: 'text-ben10-green' },
    Finance: { icon: TrendingUp, color: 'text-alien-yellow' },
    Trading: { icon: Target, color: 'text-alien-red' },
    Technology: { icon: Zap, color: 'text-alien-blue' },
    Research: { icon: BookOpen, color: 'text-white' },
    Interview: { icon: Star, color: 'text-alien-yellow' }
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
          Skill Tree
        </h1>
        <p className="text-lg text-gray-300">
          Master each skill to unlock new abilities and progress through your journey
        </p>
      </motion.div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gray-600"></div>
          <span className="text-sm text-gray-400">Locked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-ben10-green"></div>
          <span className="text-sm text-gray-400">Unlocked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-alien-yellow"></div>
          <span className="text-sm text-gray-400">Completed</span>
        </div>
      </div>

      {/* Skill Tree Visualization */}
      <div className="relative mb-8 ben10-card overflow-x-auto">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="relative min-h-[600px] min-w-[1200px] p-8">
          {allSkills.map((skill) => {
            const position = getSkillPosition(skill.id);
            const isCompleted = completedSkills.includes(skill.id);
            const isUnlocked = isSkillUnlocked(skill.id);
            const progress = skillProgress[skill.id] || 0;
            const CategoryIcon = skillCategories[skill.category]?.icon || Brain;
            const categoryColor = skillCategories[skill.category]?.color || 'text-white';
            
            return (
              <motion.div
                key={skill.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => handleSkillClick(skill)}
                className="absolute cursor-pointer"
                style={{ 
                  left: `${position.x - 40}px`, 
                  top: `${position.y - 40}px` 
                }}
              >
                <div className={`
                  skill-node ${isCompleted ? 'unlocked' : isUnlocked ? '' : 'locked'}
                  ${isCompleted ? 'border-alien-yellow' : isUnlocked ? 'border-ben10-green' : ''}
                `}>
                  {/* Progress Ring */}
                  {!isCompleted && progress > 0 && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${progress * 2.39} 239`}
                        className="text-alien-blue"
                      />
                    </svg>
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {isCompleted ? (
                      <CheckCircle className="text-alien-yellow" size={32} />
                    ) : isUnlocked ? (
                      <CategoryIcon className={categoryColor} size={32} />
                    ) : (
                      <Lock className="text-gray-500" size={32} />
                    )}
                  </div>
                </div>
                
                {/* Skill Name */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <p className={`text-xs font-space ${
                    isCompleted ? 'text-alien-yellow' : 
                    isUnlocked ? 'text-white' : 'text-gray-500'
                  }`}>
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Skill Categories Overview */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {Object.entries(skillCategories).map(([category, config]) => {
          const Icon = config.icon;
          const categorySkills = allSkills.filter(s => s.category === category);
          const completedCount = categorySkills.filter(s => completedSkills.includes(s.id)).length;
          const progress = (completedCount / categorySkills.length) * 100;
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="ben10-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={config.color} size={24} />
                <h3 className="font-orbitron text-white">{category}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Progress</span>
                  <span className={config.color}>{completedCount}/{categorySkills.length}</span>
                </div>
                <div className="progress-bar h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-ben10-green to-alien-blue transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="ben10-card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-orbitron text-ben10-green mb-2">
                  {selectedSkill.name}
                </h2>
                <div className="flex items-center gap-3">
                  <span className={`
                    px-2 py-1 rounded text-xs font-bold
                    ${selectedSkill.level === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                      selectedSkill.level === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                      'bg-red-900/50 text-red-400'}
                  `}>
                    {selectedSkill.level}
                  </span>
                  <span className="text-sm text-gray-400">{selectedSkill.category}</span>
                  <span className="text-sm text-gray-400">{selectedSkill.weeklyHours}h/week</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Progress */}
            {!completedSkills.includes(selectedSkill.id) && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-ben10-green">{skillProgress[selectedSkill.id] || 0}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${skillProgress[selectedSkill.id] || 0}%` }}
                  />
                </div>
              </div>
            )}

            {/* Topics */}
            <div className="mb-6">
              <h3 className="text-lg font-orbitron text-alien-purple mb-3">Topics to Master</h3>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.topics.map((topic, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-6">
              <h3 className="text-lg font-orbitron text-alien-purple mb-3">Learning Resources</h3>
              <div className="space-y-2">
                {selectedSkill.resources.map((resource, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className={`
                      px-2 py-1 rounded text-xs font-bold
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
            <div className="mb-6">
              <h3 className="text-lg font-orbitron text-alien-purple mb-3">Practice Projects</h3>
              <ul className="space-y-2">
                {selectedSkill.projects.map((project, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-alien-yellow mt-0.5">▸</span>
                    {project}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {completedSkills.includes(selectedSkill.id) ? (
                <div className="flex-1 text-center py-3 bg-green-900/30 rounded-lg border border-alien-yellow">
                  <span className="text-alien-yellow font-bold">✓ Skill Mastered</span>
                </div>
              ) : (
                <>
                  {(skillProgress[selectedSkill.id] || 0) === 0 ? (
                    <button
                      onClick={() => handleStartSkill(selectedSkill)}
                      className="omnitrix-button flex-1"
                    >
                      Start Learning
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCompleteSkill(selectedSkill)}
                      className="omnitrix-button flex-1"
                    >
                      Mark as Complete
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Hovered Skill Tooltip */}
      {hoveredSkill && (
        <div className="fixed bottom-4 right-4 ben10-card max-w-sm pointer-events-none z-40">
          <h4 className="font-orbitron text-ben10-green mb-2">{hoveredSkill.name}</h4>
          <p className="text-sm text-gray-400 mb-2">{hoveredSkill.phase}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>{hoveredSkill.level}</span>
            <span>{hoveredSkill.weeklyHours}h/week</span>
            <span>{hoveredSkill.topics.length} topics</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTreePage;