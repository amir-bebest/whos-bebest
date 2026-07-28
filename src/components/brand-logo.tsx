"use client";

import Image from "next/image";

export function BrandLogo({ height = 40 }: { height?: number }) {
  return (
    <Image
      src="/brand/logo-horizontal.png"
      alt="Amirhossein Farzaneh"
      width={Math.round(height * 4.2)}
      height={height}
      className="h-9 w-auto max-w-[220px] rounded-md object-contain sm:h-10 sm:max-w-[260px]"
      priority
    />
  );
}
