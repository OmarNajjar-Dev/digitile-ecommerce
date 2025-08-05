import { HeaderTopProps } from "./HeaderTop.types";
import HeaderIcon from "@/components/layout/Header/desktop/HeaderIcon";
import { config } from "@/data/config";
import { getIcon } from "@/components/layout/Header/desktop/HeaderIcon/HeaderIcon.utils";

function HeaderTop({ className }: HeaderTopProps) {
  const socialLinks = Object.entries(config.response.social_media_link).filter(
    ([, url]) => url.trim() !== ""
  );

  return (
    <div className={className}>
      <div className="flex items-center gap-6">
        {socialLinks.map(([platform, url]) => (
          <HeaderIcon key={platform} href={url} icon={getIcon(platform)} />
        ))}
      </div>
    </div>
  );
}

export default HeaderTop;
