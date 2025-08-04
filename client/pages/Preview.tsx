import { PlaceholderPage } from "@/components/PlaceholderPage";
import { Box } from "lucide-react";

export default function Preview() {
  const features = [
    "Real-time 3D content rendering",
    "Interactive preview environments",
    "Multi-device preview simulation",
    "AR/VR compatibility testing",
    "Performance optimization tools",
    "Collaborative review system",
    "Version comparison tools",
    "Export to various 3D formats",
  ];

  return (
    <PlaceholderPage
      title="3D Content Preview"
      description="Advanced 3D content preview system with real-time rendering, interactive environments, and comprehensive testing tools."
      icon={Box}
      features={features}
    />
  );
}
