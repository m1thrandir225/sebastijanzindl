import type { PageSEOSanity } from "../components/page-seo";
import type { TextBlock } from "../components/custom-text-block";
import type { Technology } from "../content/technology";
import type { SocialLink } from "../content/socialLink";

export type HomePageProperties = {
  title: string;
  seo: PageSEOSanity;
  shortIntroSection: {
    title: string;
    subtitle: string;
    shortIntro: TextBlock;
  };
  socialSection: {
    title: string,
    socialLinks: SocialLink[];
  }
  favouriteToolsSection: {
    title: string;
    subtitle: string;
    tools: Technology[];
  };
};
