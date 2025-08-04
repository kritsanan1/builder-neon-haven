import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, Sparkles, ArrowRight } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  features?: string[];
}

export function PlaceholderPage({ 
  title, 
  description, 
  icon: Icon = Construction,
  features = []
}: PlaceholderPageProps) {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
              {title}
            </CardTitle>
            <CardDescription className="text-lg">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="cyber-grid rounded-lg p-8 min-h-[200px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center mx-auto animate-glow-pulse">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  This advanced feature is currently in development. It will include cutting-edge functionality for enhanced content creation and 3D visualization.
                </p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-neon-blue rounded-full animate-glow-pulse opacity-60"></div>
              <div className="absolute top-12 right-8 w-2 h-2 bg-neon-pink rounded-full animate-glow-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-neon-green rounded-full animate-glow-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full animate-glow-pulse opacity-70" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {features.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Planned Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 glass-card rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Want to see this feature implemented next? Let us know what you'd like to see!
              </p>
              <Button className="bg-gradient-to-r from-primary to-neon-purple hover:opacity-90">
                <ArrowRight className="w-4 h-4 mr-2" />
                Request Priority Development
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
