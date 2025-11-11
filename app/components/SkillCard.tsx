interface SkillCardProps {
  title: string;
  icon?: string;
}

export default function SkillCard({ title, icon }: SkillCardProps) {
  return (
    <div className="bg-white/60 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-xl p-8 text-center transition-all hover:shadow-2xl">
      <div className="text-4xl mb-4">{icon ?? "💠"}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
