import type { PageSEOSanity } from "../components/page-seo";
import type { TextBlock } from "../custom-text-block";
import type { Technology } from "../technology";
import type { SocialLink } from "../socialLink";

export type HomePageProperties = {
  title: string;
  pageSEO: PageSEOSanity;
  shortIntroSection: {
    title: string;
    subtitle: string;
    shortIntro: TextBlock;
  };
  socialLinks: SocialLink[];
  favouriteToolsSection: {
    title: string;
    subtitle: string;
    tools: Technology[];
  };
};
