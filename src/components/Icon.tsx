import {
  Monitor,
  PenTool,
  Smartphone,
  Gauge,
  Search,
  MessageCircle,
  Layers,
  LifeBuoy,
  ClipboardList,
  Code2,
  Presentation,
  CheckCircle2,
  Server,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Monitor,
  PenTool,
  Smartphone,
  Gauge,
  Search,
  MessageCircle,
  Layers,
  LifeBuoy,
  ClipboardList,
  Code2,
  Presentation,
  CheckCircle2,
  Server,
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
