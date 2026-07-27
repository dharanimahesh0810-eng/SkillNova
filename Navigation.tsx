'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  User,
  Zap,
  TrendingUp,
  BookOpen,
  Video,
  BarChart3,
  MessageSquare,
  Briefcase,
  Settings as SettingsIcon,
  Menu,
  X,
  LogOut,
} from 'lucide-react'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'assessment', label: 'Skill Assessment', icon: Zap },
  { id: 'skill-gap', label: 'Skill Gap Analysis', icon: TrendingUp },
  { id: 'roadmap', label: 'Learning Roadmap', icon: BookOpen },
  { id: 'courses', label: 'Courses', icon: Video },
  { id: 'progress', label: 'Progress', icon: BarChart3 },
  { id: 'chat', label: 'AI Chat', icon: MessageSquare },
  { id: 'career', label: 'Career Guidance', icon: Briefcase },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
]

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="glass p-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </motion.button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-gradient-to-b from-card/80 to-card/40 glass-lg border-r border-white/10 flex-col h-screen sticky top-0">
        <div className="p-6">
          <motion.div
            className="flex items-center gap-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                SkillNova
              </h1>
              <p className="text-xs text-muted-foreground">Learning Hub</p>
            </div>
          </motion.div>

          {/* User Card */}
          <div className="glass rounded-xl p-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-3 flex items-center justify-center">
              <span className="text-white font-bold text-lg">JD</span>
            </div>
            <p className="font-semibold text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Student</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 overflow-y-auto">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id

              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActive
                      ? 'bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            onClick={() => window.location.reload()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-destructive smooth-transition"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Sign Out</span>
          </motion.button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-0 md:hidden z-40"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-card flex flex-col h-screen">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    SkillNova
                  </h1>
                  <p className="text-xs text-muted-foreground">Learning Hub</p>
                </div>
              </div>

              {/* User Card */}
              <div className="glass rounded-xl p-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <p className="font-semibold text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Student</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 overflow-y-auto">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = currentPage === item.id

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setIsOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
              <motion.button
                onClick={() => window.location.reload()}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-destructive smooth-transition"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium text-sm">Sign Out</span>
              </motion.button>
            </div>
          </aside>
        </motion.div>
      )}
    </>
  )
}
