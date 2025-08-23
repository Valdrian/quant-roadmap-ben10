import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Map, 
  GitBranch, 
  BookOpen, 
  TrendingUp, 
  BrainCircuit,
  FileText,
  Menu,
  X,
  Zap
} from 'lucide-react';
import { useGameStore } from '../store/gameStore';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { level, experience, experienceToNextLevel, currentAlienForm } = useGameStore();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/roadmap', label: 'Roadmap', icon: Map },
    { path: '/skills', label: 'Skill Tree', icon: GitBranch },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/progress', label: 'Progress', icon: TrendingUp },
    { path: '/interview', label: 'Interview Prep', icon: BrainCircuit },
    { path: '/notion', label: 'Notion Template', icon: FileText },
  ];

  const expPercentage = (experience / experienceToNextLevel) * 100;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-ben10-green/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ben10-green to-alien-blue flex items-center justify-center animate-pulse-green">
                <span className="text-2xl font-orbitron font-bold text-black">Q</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-alien-yellow rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold text-ben10-green">Quant Master</h1>
              <p className="text-xs text-gray-400">Ben 10 Edition</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-ben10-green/20 text-ben10-green border border-ben10-green/30' 
                      : 'text-gray-400 hover:text-ben10-green hover:bg-gray-800/50'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="font-space text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Player Stats */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs text-gray-400">Level {level}</p>
              <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-ben10-green to-alien-blue transition-all duration-500"
                  style={{ width: `${expPercentage}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-lg border border-ben10-green/30">
              <Zap className="text-alien-yellow" size={16} />
              <span className="text-sm font-orbitron text-ben10-green">{currentAlienForm.replace('-', ' ').toUpperCase()}</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-ben10-green"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 border-t border-ben10-green/30">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-ben10-green/20 text-ben10-green border border-ben10-green/30' 
                      : 'text-gray-400 hover:text-ben10-green hover:bg-gray-800/50'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-space">{item.label}</span>
                </Link>
              );
            })}
            
            {/* Mobile Player Stats */}
            <div className="pt-4 border-t border-gray-800">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-gray-400">Level {level}</span>
                <span className="text-sm font-orbitron text-ben10-green">
                  {currentAlienForm.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <div className="mt-2 mx-4">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-ben10-green to-alien-blue transition-all duration-500"
                    style={{ width: `${expPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;