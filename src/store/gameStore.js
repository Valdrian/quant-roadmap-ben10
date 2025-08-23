import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGameStore = create(
  persist(
    (set, get) => ({
      // Player Profile
      playerName: '',
      level: 1,
      experience: 0,
      experienceToNextLevel: 1000,
      currentAlienForm: 'grey-matter',
      unlockedAliens: ['grey-matter'],
      
      // Progress Tracking
      completedSkills: [],
      currentPhase: 'phase1',
      skillProgress: {},
      achievements: [],
      dailyStreak: 0,
      lastLoginDate: null,
      totalStudyHours: 0,
      
      // Resources & Bookmarks
      bookmarkedResources: [],
      completedCourses: [],
      solvedProblems: 0,
      projectsCompleted: [],
      
      // Stats
      stats: {
        mathScore: 0,
        programmingScore: 0,
        financeScore: 0,
        researchScore: 0,
        interviewScore: 0,
      },
      
      // Initialize game
      initializeGame: () => {
        const today = new Date().toDateString();
        const lastLogin = get().lastLoginDate;
        
        if (lastLogin !== today) {
          set({
            lastLoginDate: today,
            dailyStreak: lastLogin === new Date(Date.now() - 86400000).toDateString() 
              ? get().dailyStreak + 1 
              : 1
          });
        }
      },
      
      // Set player name
      setPlayerName: (name) => set({ playerName: name }),
      
      // Add experience
      addExperience: (amount) => {
        const currentExp = get().experience;
        const expToNext = get().experienceToNextLevel;
        const newExp = currentExp + amount;
        
        if (newExp >= expToNext) {
          // Level up!
          set({
            experience: newExp - expToNext,
            level: get().level + 1,
            experienceToNextLevel: expToNext * 1.5,
          });
          return true; // Leveled up
        } else {
          set({ experience: newExp });
          return false;
        }
      },
      
      // Complete a skill
      completeSkill: (skillId) => {
        const completed = get().completedSkills;
        if (!completed.includes(skillId)) {
          set({
            completedSkills: [...completed, skillId],
          });
          get().addExperience(500);
        }
      },
      
      // Update skill progress
      updateSkillProgress: (skillId, progress) => {
        set({
          skillProgress: {
            ...get().skillProgress,
            [skillId]: Math.min(100, progress),
          }
        });
      },
      
      // Unlock achievement
      unlockAchievement: (achievementId, xp) => {
        const achievements = get().achievements;
        if (!achievements.includes(achievementId)) {
          set({
            achievements: [...achievements, achievementId],
          });
          get().addExperience(xp);
          return true;
        }
        return false;
      },
      
      // Unlock alien form
      unlockAlienForm: (alienId) => {
        const unlocked = get().unlockedAliens;
        if (!unlocked.includes(alienId)) {
          set({
            unlockedAliens: [...unlocked, alienId],
          });
        }
      },
      
      // Switch alien form
      switchAlienForm: (alienId) => {
        if (get().unlockedAliens.includes(alienId)) {
          set({ currentAlienForm: alienId });
        }
      },
      
      // Add study hours
      addStudyHours: (hours) => {
        set({ totalStudyHours: get().totalStudyHours + hours });
      },
      
      // Bookmark resource
      toggleBookmark: (resourceId) => {
        const bookmarks = get().bookmarkedResources;
        if (bookmarks.includes(resourceId)) {
          set({
            bookmarkedResources: bookmarks.filter(id => id !== resourceId)
          });
        } else {
          set({
            bookmarkedResources: [...bookmarks, resourceId]
          });
        }
      },
      
      // Complete course
      completeCourse: (courseId) => {
        const completed = get().completedCourses;
        if (!completed.includes(courseId)) {
          set({
            completedCourses: [...completed, courseId],
          });
          get().addExperience(1000);
        }
      },
      
      // Update stats
      updateStats: (category, points) => {
        set({
          stats: {
            ...get().stats,
            [category]: Math.min(100, get().stats[category] + points),
          }
        });
      },
      
      // Reset game
      resetGame: () => {
        set({
          playerName: '',
          level: 1,
          experience: 0,
          experienceToNextLevel: 1000,
          currentAlienForm: 'grey-matter',
          unlockedAliens: ['grey-matter'],
          completedSkills: [],
          currentPhase: 'phase1',
          skillProgress: {},
          achievements: [],
          dailyStreak: 0,
          lastLoginDate: null,
          totalStudyHours: 0,
          bookmarkedResources: [],
          completedCourses: [],
          solvedProblems: 0,
          projectsCompleted: [],
          stats: {
            mathScore: 0,
            programmingScore: 0,
            financeScore: 0,
            researchScore: 0,
            interviewScore: 0,
          },
        });
      },
    }),
    {
      name: 'quant-research-game',
    }
  )
);

export { useGameStore };