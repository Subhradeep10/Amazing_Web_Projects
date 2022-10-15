//Social Media Icons
import { Qoura, Linkedin, Reddit, Twitter } from "@assets/Icon/social";
export function getSocialIcon(type: string) {
  switch (type) {
    case "qoura":
      return <Qoura />;
    case "linkedin":
      return <Linkedin />;
    case "reddit":
      return <Reddit />;
    case "twitter":
      return <Twitter />;
  }
}
