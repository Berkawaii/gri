"use client";

import SmoothScroll from "@/components/shared/SmoothScroll";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import CyberNoirView from "@/components/views/CyberNoirView";
import EditorialView from "@/components/views/EditorialView";
import BrutalistView from "@/components/views/BrutalistView";
import GlitchView from "@/components/views/GlitchView";
import EtherealView from "@/components/views/EtherealView";
import { useTheme } from "@/lib/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <SmoothScroll>
      <ThemeSwitcher />
      {theme === "raw-editorial" && <EditorialView />}
      {theme === "cyber-noir" && <CyberNoirView />}
      {theme === "brutalist" && <BrutalistView />}
      {theme === "glitch" && <GlitchView />}
      {theme === "ethereal" && <EtherealView />}
    </SmoothScroll>
  );
}
