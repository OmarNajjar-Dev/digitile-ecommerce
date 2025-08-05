import Link from "next/link";
import { HeaderIconProps } from "./HeaderIcon.types";

function HeaderIcon({ href, icon }: HeaderIconProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="mx-2">
      {icon}
    </Link>
  );
}

export default HeaderIcon;
