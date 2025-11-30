import { Badge } from "../ui/badge";

type BadgeTemplateProps = {
  title: string;
  icon: React.ElementType;
  variant?: "default" | "secondary" | "destructive" | "outline";
};

export default function BadgeTemplate(props: BadgeTemplateProps) {
  return (
    <Badge
      variant={props.variant || "secondary"}
      className="text-[#b39100] font-bold capitalize px-2 py-1 text-sm"
    >
      <props.icon />
      {props.title}
    </Badge>
  );
}
