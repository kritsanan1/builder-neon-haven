import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  Heart, 
  MessageSquare,
  BarChart3,
  Zap,
  Brain,
  Target,
  Palette,
  Language,
  Send,
  RefreshCw,
  Download,
  Eye
} from 'lucide-react';

const sentimentData = [
  { label: "Positive", value: 68, color: "bg-neon-green" },
  { label: "Neutral", value: 25, color: "bg-cyber-400" },
  { label: "Negative", value: 7, color: "bg-destructive" }
];

const trendingTopics = [
  { topic: "AI Technology", trend: "+45%", popularity: 92 },
  { topic: "3D Visualization", trend: "+32%", popularity: 87 },
  { topic: "Content Creation", trend: "+28%", popularity: 84 },
  { topic: "Digital Marketing", trend: "+21%", popularity: 76 }
];

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" }
];

export default function AIContent() {
  const [generationType, setGenerationType] = useState("social");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent("🚀 Revolutionize your content creation with our cutting-edge AI platform! Experience the future of digital storytelling through immersive 3D visualizations and intelligent automation. #AIContentCreation #3DVisualization #DigitalInnovation");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
            AI Content Creation
          </h1>
          <p className="text-muted-foreground mt-1">
            Generate intelligent, engaging content with advanced AI algorithms
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="neon-border text-neon-green">
            <Brain className="w-3 h-3 mr-1" />
            AI Engine Active
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Generator */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-primary" />
                <span>AI Content Generator</span>
              </CardTitle>
              <CardDescription>
                Create compelling content using advanced AI algorithms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={generationType} onValueChange={setGenerationType}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="social">Social Media</TabsTrigger>
                  <TabsTrigger value="blog">Blog Post</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="creative">Creative</TabsTrigger>
                </TabsList>
                
                <TabsContent value="social" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="platform">Platform</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="twitter">Twitter</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tone">Tone</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                          <SelectItem value="humorous">Humorous</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="blog" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Blog Topic</Label>
                    <Input placeholder="Enter your blog topic..." />
                  </div>
                </TabsContent>
                
                <TabsContent value="marketing" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="campaign">Campaign Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select campaign" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email Marketing</SelectItem>
                          <SelectItem value="ad">Advertisement</SelectItem>
                          <SelectItem value="landing">Landing Page</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience</Label>
                      <Input placeholder="Describe your audience..." />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="creative" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="style">Creative Style</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="storytelling">Storytelling</SelectItem>
                        <SelectItem value="poetic">Poetic</SelectItem>
                        <SelectItem value="screenplay">Screenplay</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="prompt">Content Brief</Label>
                <Textarea 
                  placeholder="Describe what you want to create..." 
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Target Language</Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGenerate}
                className="w-full bg-gradient-to-r from-primary to-neon-purple hover:opacity-90"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content */}
          {(generatedContent || isGenerating) && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-neon-green" />
                  <span>Generated Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isGenerating ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-primary animate-glow-pulse" />
                      <span className="text-sm text-muted-foreground">AI is analyzing trends and generating content...</span>
                    </div>
                    <Progress value={66} className="h-2" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Textarea 
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="neon-border text-neon-green">
                          Quality Score: 94%
                        </Badge>
                        <Badge variant="outline">
                          Character Count: {generatedContent.length}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-4 h-4 mr-1" />
                          Regenerate
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Export
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-neon-blue to-neon-purple">
                          <Send className="w-4 h-4 mr-1" />
                          Publish
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Analytics Panel */}
        <div className="space-y-6">
          {/* Sentiment Analysis */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-neon-pink" />
                <span>Sentiment Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sentimentData.map((sentiment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{sentiment.label}</span>
                    <span className="text-sm text-muted-foreground">{sentiment.value}%</span>
                  </div>
                  <Progress value={sentiment.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-neon-green" />
                <span>Trending Topics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-sm">{topic.topic}</div>
                    <div className="text-xs text-muted-foreground">Popularity: {topic.popularity}%</div>
                  </div>
                  <Badge variant="outline" className="text-neon-green border-neon-green/30">
                    {topic.trend}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Multi-Language Selector */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-neon-blue" />
                <span>Language Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="justify-start"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span className="text-xs">{lang.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Collaboration */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Team Collaboration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Eye className="w-4 h-4 mr-2" />
                Share for Review
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Assign to Team
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                Performance Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
