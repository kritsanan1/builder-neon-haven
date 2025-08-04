import { PlaceholderPage } from '@/components/PlaceholderPage';
import { Users } from 'lucide-react';

export default function Team() {
  const features = [
    "Role-based access control",
    "Real-time collaboration tools",
    "Team performance analytics",
    "Project assignment system",
    "Communication hub integration",
    "Skill-based task matching",
    "Progress tracking dashboard",
    "Team productivity insights"
  ];

  return (
    <PlaceholderPage
      title="Team Management"
      description="Comprehensive team collaboration platform with advanced project management, real-time communication, and productivity analytics."
      icon={Users}
      features={features}
    />
  );
}
