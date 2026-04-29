export function FeatureCard({ text, bg, textColor }: { text: string, bg: string, textColor: string }) {
  return (
    <div className="flex-1 h-32 rounded-xl p-3 flex items-center justify-center text-center" style={{ backgroundColor: bg, color: textColor }}>
      <h2>{text}</h2>
    </div>
  )
}