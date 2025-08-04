import { useState, useEffect, useCallback } from "react";

export interface MetricData {
  id: string;
  name: string;
  value: number;
  change: number;
  trend: "up" | "down" | "stable";
  color: string;
  history: number[];
}

export interface ActivityEvent {
  id: string;
  type: "content_published" | "user_engaged" | "ai_generated" | "3d_rendered";
  message: string;
  timestamp: Date;
  severity: "info" | "success" | "warning";
}

export interface AnalyticsData {
  metrics: MetricData[];
  activities: ActivityEvent[];
  performance: {
    contentCreation: number;
    userEngagement: number;
    aiProcessing: number;
    renderQueue: number;
  };
  insights: {
    title: string;
    description: string;
    type: "optimization" | "alert" | "achievement";
  }[];
}

export function useRealTimeAnalytics() {
  const [data, setData] = useState<AnalyticsData>({
    metrics: [
      {
        id: "content",
        name: "Total Content",
        value: 2847,
        change: 12.5,
        trend: "up",
        color: "text-neon-blue",
        history: [2800, 2810, 2825, 2835, 2847],
      },
      {
        id: "engagement",
        name: "Engagement Rate",
        value: 94.2,
        change: 8.1,
        trend: "up",
        color: "text-neon-pink",
        history: [92.1, 92.8, 93.2, 93.8, 94.2],
      },
      {
        id: "users",
        name: "Active Users",
        value: 18400,
        change: 23.2,
        trend: "up",
        color: "text-neon-green",
        history: [17200, 17600, 17900, 18100, 18400],
      },
      {
        id: "efficiency",
        name: "AI Efficiency",
        value: 99.7,
        change: 2.3,
        trend: "up",
        color: "text-primary",
        history: [98.2, 98.8, 99.1, 99.4, 99.7],
      },
    ],
    activities: [],
    performance: {
      contentCreation: 85,
      userEngagement: 92,
      aiProcessing: 96,
      renderQueue: 78,
    },
    insights: [],
  });

  const [isConnected, setIsConnected] = useState(false);

  // Simulate WebSocket connection for real-time updates
  useEffect(() => {
    setIsConnected(true);

    const updateInterval = setInterval(() => {
      setData((prevData) => {
        const newMetrics = prevData.metrics.map((metric) => {
          const variation = (Math.random() - 0.5) * 0.1; // Small random variation
          const newValue = Math.max(0, metric.value + variation);
          const newHistory = [...metric.history.slice(1), newValue];

          return {
            ...metric,
            value: parseFloat(newValue.toFixed(1)),
            history: newHistory,
            change: parseFloat(
              (
                ((newValue - metric.history[0]) / metric.history[0]) *
                100
              ).toFixed(1),
            ),
            trend:
              newValue > metric.value
                ? "up"
                : newValue < metric.value
                  ? "down"
                  : "stable",
          };
        });

        // Generate random activity events
        const shouldAddActivity = Math.random() < 0.3; // 30% chance
        let newActivities = [...prevData.activities];

        if (shouldAddActivity) {
          const activityTypes = [
            {
              type: "content_published",
              message: "New AI content published to Instagram",
              severity: "success",
            },
            {
              type: "user_engaged",
              message: "User engagement spike detected",
              severity: "info",
            },
            {
              type: "ai_generated",
              message: "AI model completed content generation",
              severity: "success",
            },
            {
              type: "3d_rendered",
              message: "3D visualization render completed",
              severity: "info",
            },
          ] as const;

          const randomActivity =
            activityTypes[Math.floor(Math.random() * activityTypes.length)];

          newActivities = [
            {
              id: Date.now().toString(),
              ...randomActivity,
              timestamp: new Date(),
            },
            ...newActivities.slice(0, 9), // Keep only last 10 activities
          ];
        }

        // Update performance metrics
        const newPerformance = {
          contentCreation: Math.max(
            0,
            Math.min(
              100,
              prevData.performance.contentCreation + (Math.random() - 0.5) * 2,
            ),
          ),
          userEngagement: Math.max(
            0,
            Math.min(
              100,
              prevData.performance.userEngagement + (Math.random() - 0.5) * 1.5,
            ),
          ),
          aiProcessing: Math.max(
            0,
            Math.min(
              100,
              prevData.performance.aiProcessing + (Math.random() - 0.5) * 0.5,
            ),
          ),
          renderQueue: Math.max(
            0,
            Math.min(
              100,
              prevData.performance.renderQueue + (Math.random() - 0.5) * 3,
            ),
          ),
        };

        // Generate insights based on data
        const newInsights = [];
        if (newPerformance.contentCreation > 90) {
          newInsights.push({
            title: "Content Creation Peak",
            description:
              "Your content creation rate is at an all-time high! Consider scaling your distribution.",
            type: "achievement" as const,
          });
        }
        if (newPerformance.renderQueue < 60) {
          newInsights.push({
            title: "Render Queue Optimization",
            description:
              "Low render queue detected. Perfect time to queue more 3D visualizations.",
            type: "optimization" as const,
          });
        }

        return {
          metrics: newMetrics,
          activities: newActivities,
          performance: newPerformance,
          insights: newInsights.slice(0, 3), // Keep max 3 insights
        };
      });
    }, 2000); // Update every 2 seconds

    return () => {
      clearInterval(updateInterval);
      setIsConnected(false);
    };
  }, []);

  const refreshData = useCallback(() => {
    // Simulate a manual refresh
    setData((prevData) => ({
      ...prevData,
      metrics: prevData.metrics.map((metric) => ({
        ...metric,
        change: metric.change + (Math.random() - 0.5) * 5,
      })),
    }));
  }, []);

  return {
    data,
    isConnected,
    refreshData,
  };
}
