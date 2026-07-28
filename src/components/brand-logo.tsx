"use client";

import Image from "next/image";
import { assetPath } from "@/lib/paths";

export function BrandLogo({ height = 40 }: { height?: number }) {
  return (
    <Image
      src={assetPath("/brand/logo-horizontal.png")}
      alt="Amirhossein Farzaneh"
      width={Math.round(height * 4.2)}
      height={height}
      className="h-9 w-auto max-w-[220px] rounded-md object-contain sm:h-10 sm:max-w-[260px]"
      priority
      unoptimized
    />
  );
}
