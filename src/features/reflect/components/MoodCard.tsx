import { Card } from "@/components/ui/card";

type MoodCardProps = {
  title: string;
  description: string;
  selected?: boolean;
  onClick: () => void;
};

export function MoodCard({
  title,
  description,
  selected = false,
  onClick,
}: MoodCardProps) {
  return (
    <Card
      className={`cursor-pointer p-4 transition ${selected ? "border-2 border-primary" : "opacity-80"}`}
      onClick={onClick}
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}
