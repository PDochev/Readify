import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverInformationProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function HoverInformation({ icon, title, description }: HoverInformationProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{icon}</HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default HoverInformation;
