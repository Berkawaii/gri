"use client";

import SmoothScroll from "@/components/shared/SmoothScroll";
import AuthButton from "@/components/shared/AuthButton";
import CyberNoirView from "@/components/views/CyberNoirView";
import { useTheme } from "@/lib/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <SmoothScroll>
      <AuthButton />
      <CyberNoirView />
    </SmoothScroll>
  );
}
