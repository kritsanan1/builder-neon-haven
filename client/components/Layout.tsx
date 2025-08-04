import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  BarChart3, 
  Bot, 
  Calendar,
  Box,
  Home, 
  Menu, 
  Palette, 
  Settings, 
  Users, 
  X,
  Zap,
  Globe,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'AI Content', href: '/ai-content', icon: Bot },
  { name: 'Scheduling', href: '/scheduling', icon: Calendar },
  { name: '3D Analytics', href: '/analytics', icon: BarChart3 },
  { name: '3D Preview', href: '/preview', icon: Box },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'History', href: '/history', icon: History },
];

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 z-50 w-64 glass-card animate-slide-in">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-neon-purple rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
                FusionCreate
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <Navigation currentPath={location.pathname} onNavigate={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col glass-card border-r border-border/50">
          <div className="flex items-center space-x-2 p-6 border-b border-border/50">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-neon-purple rounded-xl flex items-center justify-center animate-glow-pulse">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
              FusionCreate
            </span>
          </div>
          <Navigation currentPath={location.pathname} />
        </div>
      </div>

      {/* Header */}
      <div className="lg:pl-64">
        <header className="glass-card border-b border-border/50 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-muted-foreground hover:text-foreground"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">EN</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-neon-purple rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">U</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

function Navigation({ currentPath, onNavigate }: { currentPath: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col p-4 space-y-1">
      {navigation.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary/10 text-primary neon-border"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              isActive && "animate-glow-pulse"
            )} />
            <span>{item.name}</span>
          </Link>
        );
      })}
      
      <div className="pt-6 mt-auto">
        <div className="space-y-2">
          <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Quick Actions
          </div>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Palette className="w-4 h-4 mr-2" />
            New Content
          </Button>
        </div>
      </div>
    </nav>
  );
}
