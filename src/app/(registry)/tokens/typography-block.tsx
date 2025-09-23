interface TypographyTokenProps {
  name: string;
  value: string; // e.g., "Font(family: \"Inter\", style: Semi Bold, size: 24, weight: 600, lineHeight: 32)"
}

function parseFigmaFontString(value: string) {
  const familyMatch = value.match(/family:\s*\"([^\"]+)\"/i);
  const weightMatch = value.match(/weight:\s*(\d+)/i);
  const sizeMatch = value.match(/size:\s*(\d+)/i);
  const lineHeightMatch = value.match(/lineHeight:\s*(\d+)/i);
  const styleMatch = value.match(/style:\s*([^,\)]+)/i);

  return {
    family: familyMatch?.[1] ?? "",
    weight: weightMatch ? Number(weightMatch[1]) : undefined,
    sizePx: sizeMatch ? Number(sizeMatch[1]) : undefined,
    lineHeightPx: lineHeightMatch ? Number(lineHeightMatch[1]) : undefined,
    style: styleMatch?.[1]?.trim() ?? "",
  };
}

export function TypographyBlock({ name, value }: TypographyTokenProps) {
  const parsed = parseFigmaFontString(value);
  const style: React.CSSProperties = {
    fontFamily: parsed.family || undefined,
    fontWeight: parsed.weight as any,
    fontSize: parsed.sizePx ? `${parsed.sizePx}px` : undefined,
    lineHeight: parsed.lineHeightPx ? `${parsed.lineHeightPx}px` : undefined,
  };

  return (
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <p style={style}>
          The quick brown fox jumps over the lazy dog
        </p>
        <code className="font-mono text-muted-foreground text-sm">
          {value}
        </code>
      </div>
    </div>
  );
}

export default TypographyBlock;


