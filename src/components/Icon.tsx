import {
  Monitor,
  PenTool,
  Smartphone,
  Gauge,
  Search,
  MessageCircle,
  MessageSquare,
  Layers,
  LifeBuoy,
  ClipboardList,
  Code2,
  Presentation,
  CheckCircle2,
  Server,
  Eye,
  Compass,
  Gem,
  Users,
  FileText,
  Image,
  Target,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Monitor,
  PenTool,
  Smartphone,
  Gauge,
  Search,
  MessageCircle,
  MessageSquare,
  Layers,
  LifeBuoy,
  ClipboardList,
  Code2,
  Presentation,
  CheckCircle2,
  Server,
  Eye,
  Compass,
  Gem,
  Users,
  FileText,
  Image,
  Target,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Layers;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
