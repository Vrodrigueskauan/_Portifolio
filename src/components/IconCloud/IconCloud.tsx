"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%", // 🔹 deixa o Cloud ocupar toda a altura disponível
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.02,
    minSpeed: 0.01,
  },
};

// 🔹 Renderização responsiva dos ícones
export const renderCustomIcon = (icon: SimpleIcon, theme: string, width: number) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  // 🔸 Tamanho do ícone conforme tela
  const size =
    width < 480 ? 28 : width < 768 ? 36 : width < 1200 ? 44 : 52;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size,
    aProps: { onClick: (e) => e.preventDefault() },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(
    null
  );
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState<number>(1200);
  const [key, setKey] = useState<number>(0); // 🔹 força re-render no resize

  // 🔹 Atualiza tamanho e força o Cloud a recalcular
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setKey((prev) => prev + 1); // força remount do Cloud
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light", windowWidth)
    );
  }, [data, theme, windowWidth]);

  // 🔸 altura responsiva pro container
  const containerHeight =
    windowWidth < 480 ? "300px" : windowWidth < 1024 ? "400px" : "500px";

  return (
    <div
      style={{
        width: "100%",
        height: containerHeight,
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔹 A key força o Cloud a recriar o canvas quando a tela muda */}
      <Cloud key={key} {...cloudProps}>
        {renderedIcons}
      </Cloud>
    </div>
  );
}
