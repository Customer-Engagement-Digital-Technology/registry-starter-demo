import { cn } from "@/lib/utils";

type BrandColor = "Black" | "Brand Yellow";

interface LogoProps {
  className?: string;
  alt?: string;
  color?: BrandColor;
}

const imgBrandDewaltColorBrandYellow = "/brands/dewalt.svg";

export function Logo({ className, alt = "DEWALT", color = "Brand Yellow" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)} data-name="Brand=DEWALT" data-node-id="6:745">
      <img
        src={imgBrandDewaltColorBrandYellow}
        alt={alt}
        className="block h-[32px] w-[132px]"
      />
    </div>
  );
}
