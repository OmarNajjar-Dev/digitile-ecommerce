import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  href?: string;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  src,
  width = 320,
  height = 100,
  alt = "Logo",
  href = "/",
  priority,
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Go to homepage"
      className="relative h-full w-full"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
    </Link>
  );
}
