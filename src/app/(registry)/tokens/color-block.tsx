import { cn } from "@/lib/utils";

interface ColorBlockProps {
  name: string;
  /** Tailwind utility like "bg-primary". */
  className?: string;
  /** Raw hex or CSS color value (e.g. #FEBD17 or rgba(...)). */
  hex?: string;
  /** Optional code label to display under the name. */
  code?: string;
}

export function ColorBlock({ name, className, hex, code }: ColorBlockProps) {
  const showUsingClass = !!className && !hex;
  const codeLabel = code
    ? code
    : showUsingClass && className
      ? `--${className.slice(3)}`
      : hex;

  return (
    <div className="flex items-center gap-4">
      {showUsingClass ? (
        <div className={cn("size-12 rounded border", className)} />
      ) : (
        <div
          className="size-12 rounded border"
          style={{ backgroundColor: hex }}
        />
      )}
      <div>
        <div className="font-medium">{name}</div>
        {codeLabel ? (
          <code className="font-mono text-muted-foreground text-sm">{codeLabel}</code>
        ) : null}
      </div>
    </div>
  );
}
