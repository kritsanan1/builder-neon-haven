import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Bot,
  TrendingUp,
  Users,
  Zap,
  Eye,
  Heart,
  Share2,
  Plus,
  Calendar,
  Globe,
  Sparkles,
  Activity,
  Target,
  Box,
  PieChart,
  Brain,
} from "lucide-react";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";

const statsCards = [
  {
    title: "Total Content",
    value: "2,847",
    change: "+12.5%",
    icon: Bot,
    color: "text-neon-blue",
  },
  {
    title: "Engagement Rate",
    value: "94.2%",
    change: "+8.1%",
    icon: Heart,
    color: "text-neon-pink",
  },
  {
    title: "Active Users",
    value: "18.4K",
    change: "+23.2%",
    icon: Users,
    color: "text-neon-green",
  },
  {
    title: "AI Efficiency",
    value: "99.7%",
    change: "+2.3%",
    icon: Sparkles,
    color: "text-primary",
  },
];

const recentContent = [
  {
    id: 1,
    title: "AI-Generated Marketing Campaign",
    type: "Campaign",
    status: "Published",
    engagement: 98.5,
    views: 15420,
  },
  {
    id: 2,
    title: "3D Product Visualization",
    type: "3D Content",
    status: "Processing",
    engagement: 0,
    views: 0,
  },
  {
    id: 3,
    title: "Social Media Strategy",
    type: "Strategy",
    status: "Draft",
    engagement: 0,
    views: 0,
  },
];

const analyticsData = [
  { name: "Content Creation", value: 85, color: "bg-neon-blue" },
  { name: "User Engagement", value: 92, color: "bg-neon-pink" },
  { name: "3D Interactions", value: 78, color: "bg-neon-green" },
  { name: "AI Processing", value: 96, color: "bg-primary" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
            Content Command Center
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your AI-powered content creation and 3D visualization
            platform
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-gradient-to-r from-primary to-neon-purple hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            New Content
          </Button>
          <Button variant="outline" className="neon-border">
            <Box className="w-4 h-4 mr-2" />
            3D View
          </Button>
        </div>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center space-x-2">
            <Brain className="w-4 h-4" />
            <span>Advanced Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center space-x-2">
            <Bot className="w-4 h-4" />
            <span>Content Hub</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center space-x-1 text-sm">
                    <TrendingUp className="w-3 h-3 text-neon-green" />
                    <span className="text-neon-green">{stat.change}</span>
                    <span className="text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Content Analytics */}
            <Card className="lg:col-span-2 glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Performance Analytics</span>
                </CardTitle>
                <CardDescription>
                  Real-time insights into your content performance and AI
                  optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {analyticsData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.value}%
                      </span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">3D Render Queue</span>
                    <Badge variant="secondary" className="neon-border">
                      <Activity className="w-3 h-3 mr-1" />
                      Processing
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Current: Product Visualization #2847
                      </span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-neon-purple" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-gradient-to-r from-neon-blue/20 to-transparent border border-neon-blue/30 hover:bg-neon-blue/10">
                  <Bot className="w-4 h-4 mr-2" />
                  Generate AI Content
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-neon-pink/20 to-transparent border border-neon-pink/30 hover:bg-neon-pink/10">
                  <Box className="w-4 h-4 mr-2" />
                  Create 3D Model
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-neon-green/20 to-transparent border border-neon-green/30 hover:bg-neon-green/10">
                  <PieChart className="w-4 h-4 mr-2" />
                  Analyze Trends
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 hover:bg-primary/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Content
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 3D Visualization Preview */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Box className="w-5 h-5 text-neon-blue" />
                <span>3D Visualization Hub</span>
              </CardTitle>
              <CardDescription>
                Interactive 3D content preview and analytics dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="cyber-grid rounded-lg p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto animate-float">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      3D Analytics Dashboard
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Interactive 3D widgets and immersive data visualization - now available in Advanced Analytics tab!
                    </p>
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
                      <Globe className="w-4 h-4 mr-2" />
                      Explore 3D Space
                    </Button>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-neon-blue rounded-full animate-glow-pulse opacity-60"></div>
                <div
                  className="absolute top-12 right-8 w-2 h-2 bg-neon-pink rounded-full animate-glow-pulse opacity-40"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-8 left-12 w-4 h-4 bg-neon-green rounded-full animate-glow-pulse opacity-50"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full animate-glow-pulse opacity-70"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <AdvancedAnalytics />
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          {/* Recent Content */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-neon-green" />
                <span>Recent Content</span>
              </CardTitle>
              <CardDescription>
                Your latest AI-generated content and 3D visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContent.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-center justify-between p-4 glass-card rounded-lg hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-neon-purple rounded-lg flex items-center justify-center">
                        {content.type === "3D Content" ? (
                          <Box className="w-6 h-6 text-primary-foreground" />
                        ) : content.type === "Campaign" ? (
                          <Target className="w-6 h-6 text-primary-foreground" />
                        ) : (
                          <Bot className="w-6 h-6 text-primary-foreground" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {content.type}
                          </Badge>
                          <span>•</span>
                          <Badge
                            variant={
                              content.status === "Published"
                                ? "default"
                                : content.status === "Processing"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              content.status === "Published"
                                ? "bg-neon-green/20 text-neon-green border-neon-green/30"
                                : ""
                            }
                          >
                            {content.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      {content.status === "Published" && (
                        <>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{content.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{content.engagement}%</span>
                          </div>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Content Creation Hub */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-primary" />
                <span>Content Creation Hub</span>
              </CardTitle>
              <CardDescription>
                Advanced tools for creating and managing your content pipeline
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Bot className="w-6 h-6 text-neon-blue" />
                <span className="text-sm">AI Generator</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Box className="w-6 h-6 text-neon-pink" />
                <span className="text-sm">3D Creator</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Calendar className="w-6 h-6 text-neon-green" />
                <span className="text-sm">Scheduler</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span className="text-sm">Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="w-6 h-6 text-neon-purple" />
                <span className="text-sm">Collaboration</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Globe className="w-6 h-6 text-neon-blue" />
                <span className="text-sm">Distribution</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
