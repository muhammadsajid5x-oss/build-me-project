import {
  X,
  Shield,
  Rocket,
  DollarSign,
  Star,
  Gift,
  Share2,
  Info,
  TrendingDown,
  Lock,
  Check,
  ArrowRight,
  Play,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const iconMap = {
  x: X,
  shield: Shield,
  rocket: Rocket,
  dollar: DollarSign,
  star: Star,
  gift: Gift,
  share: Share2,
  info: Info,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  "trending-down": TrendingDown,
  lock: Lock,
  check: Check,
  "arrow-right": ArrowRight,
  play: Play,
};

export type IconName = keyof typeof iconMap;
