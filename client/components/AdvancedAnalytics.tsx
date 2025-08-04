import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Activity, 
  TrendingUp, 
  Zap, 
  Brain, 
  Eye, 
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb
} from 'lucide-react';
import { useRealTimeAnalytics } from '@/hooks/useRealTimeAnalytics';
import { ThreeVisualization, Performance3D } from './ThreeVisualization';

export function AdvancedAnalytics() {
  const { data, isConnected, refreshData } = useRealTimeAnalytics();
  const [activeTab, setActiveTab] = useState('overview');

  // Transform data for 3D visualization
  const visualizationData = data.metrics.map((metric, index) => ({
    x: (index - 1.5) * 2,
    y: metric.value / 100,
    z: Math.sin(index) * 2,
    value: metric.value,
    color: metric.color.replace('text-', '#'),
    label: metric.name
  }));

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'optimization': return Lightbulb;
      case 'alert': return AlertTriangle;
      case 'achievement': return CheckCircle;
      default: return Info;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'content_published': return CheckCircle;
      case 'user_engaged': return TrendingUp;
      case 'ai_generated': return Brain;
      case '3d_rendered': return Eye;
      default: return Activity;
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Status */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-neon-green" />
              <span>Real-Time Analytics</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={isConnected ? "default" : "secondary"}
                className={isConnected ? "bg-neon-green/20 text-neon-green border-neon-green/30" : ""}
              >
                <div className={`w-2 h-2 rounded-full mr-1 ${isConnected ? 'bg-neon-green animate-pulse' : 'bg-gray-400'}`} />
                {isConnected ? 'Live' : 'Offline'}
              </Badge>
              <Button variant="outline" size="sm" onClick={refreshData}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Refresh
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="3d-analytics">3D Analytics</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="activity">Live Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Live Metrics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Live Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.metrics.map((metric) => (
                  <div key={metric.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">{metric.value}</span>
                        <Badge 
                          variant="outline" 
                          className={metric.trend === 'up' ? 'text-neon-green border-neon-green/30' : 
                                   metric.trend === 'down' ? 'text-red-400 border-red-400/30' : 
                                   'text-gray-400 border-gray-400/30'}
                        >
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          metric.color.includes('blue') ? 'bg-neon-blue' :
                          metric.color.includes('pink') ? 'bg-neon-pink' :
                          metric.color.includes('green') ? 'bg-neon-green' :
                          'bg-primary'
                        }`}
                        style={{ width: `${Math.min(100, (metric.value / 100) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-neon-purple" />
                  <span>Performance Dashboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Content Creation</span>
                    <span>{data.performance.contentCreation.toFixed(1)}%</span>
                  </div>
                  <Progress value={data.performance.contentCreation} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>User Engagement</span>
                    <span>{data.performance.userEngagement.toFixed(1)}%</span>
                  </div>
                  <Progress value={data.performance.userEngagement} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>AI Processing</span>
                    <span>{data.performance.aiProcessing.toFixed(1)}%</span>
                  </div>
                  <Progress value={data.performance.aiProcessing} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Render Queue</span>
                    <span>{data.performance.renderQueue.toFixed(1)}%</span>
                  </div>
                  <Progress value={data.performance.renderQueue} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="3d-analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>3D Metrics Visualization</CardTitle>
                <CardDescription>
                  Interactive 3D representation of your key metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThreeVisualization data={visualizationData} width={350} height={250} />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Performance Bars 3D</CardTitle>
                <CardDescription>
                  Real-time 3D performance visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Performance3D data={data.performance} width={350} height={250} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-neon-purple" />
                <span>AI-Powered Insights</span>
              </CardTitle>
              <CardDescription>
                Intelligent recommendations based on your data patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              {data.insights.length > 0 ? (
                <div className="space-y-4">
                  {data.insights.map((insight, index) => {
                    const Icon = getInsightIcon(insight.type);
                    return (
                      <div key={index} className="flex items-start space-x-3 p-4 glass-card rounded-lg">
                        <Icon className={`w-5 h-5 mt-0.5 ${
                          insight.type === 'achievement' ? 'text-neon-green' :
                          insight.type === 'alert' ? 'text-yellow-400' :
                          'text-neon-blue'
                        }`} />
                        <div className="flex-1">
                          <h4 className="font-medium">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>AI is analyzing your data patterns...</p>
                  <p className="text-sm mt-1">Insights will appear as data trends are detected.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-neon-green" />
                <span>Live Activity Feed</span>
              </CardTitle>
              <CardDescription>
                Real-time system events and user activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                {data.activities.length > 0 ? (
                  <div className="space-y-3">
                    {data.activities.map((activity) => {
                      const Icon = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 glass-card rounded-lg">
                          <Icon className={`w-4 h-4 mt-1 ${
                            activity.severity === 'success' ? 'text-neon-green' :
                            activity.severity === 'warning' ? 'text-yellow-400' :
                            'text-neon-blue'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{activity.message}</p>
                            <p className="text-xs text-muted-foreground">
                              {activity.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No recent activity</p>
                    <p className="text-sm mt-1">Activity events will appear here as they occur.</p>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
