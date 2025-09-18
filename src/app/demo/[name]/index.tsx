import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { footer } from "@/app/demo/[name]/components/footer";
import { logo } from "@/app/demo/[name]/components/logo";

// ui
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { button } from "@/app/demo/[name]/ui/button";
import { card } from "@/app/demo/[name]/ui/card";
import { input } from "@/app/demo/[name]/ui/input";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  dashboard,

  // components
  logo,
  "brand-header": brandHeader,
  footer,

  // ui
  avatar,
  button,
  card,
  input,
  sonner,
  tabs,
  tooltip,
};
