"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export interface DynamicNavigationProps {
  links: {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  backgroundColor?: string;
  textColor?: string;
  highlightColor?: string;
  glowIntensity?: number;
  className?: string;
  showLabelsOnMobile?: boolean;
  onLinkClick?: (id: string) => void;
  activeLink?: string;
  enableRipple?: boolean;
}

export const DynamicNavigation = ({
  links,
  backgroundColor,
  textColor,
  highlightColor,
  glowIntensity = 5,
  className,
  showLabelsOnMobile = false,
  onLinkClick,
  activeLink,
  enableRipple = true,
}: DynamicNavigationProps) => {
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(
    activeLink || (links.length > 0 ? links[0].id : null)
  );

  const defaultThemeStyles = {
    bg: backgroundColor || "bg-background",
    border: "border",
    text: textColor || "text-foreground",
    highlight: highlightColor || "bg-foreground/10",
    glow: `shadow-[0_0_${glowIntensity}px_rgba(255,255,255,0.3)]`,
  };

  const updateHighlightPosition = () => {
    if (!navRef.current || !highlightRef.current || !active) return;

    const activeElement = navRef.current.querySelector(`#nav-item-${active}`) as HTMLElement;
    if (!activeElement) return;

    const { offsetLeft, offsetWidth } = activeElement;

    highlightRef.current.style.transform = `translateX(${offsetLeft}px)`;
    highlightRef.current.style.width = `${offsetWidth}px`;
  };

  const handleLinkClick = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setActive(id);
    if (onLinkClick) onLinkClick(id);
  };

  useEffect(() => {
    const timer = setTimeout(updateHighlightPosition, 0);
    
    window.addEventListener("resize", updateHighlightPosition);
    return () => {
      window.removeEventListener("resize", updateHighlightPosition);
      clearTimeout(timer);
    };
  }, [active]);

  useEffect(() => {
    if (activeLink && activeLink !== active) {
      setActive(activeLink);
    }
  }, [activeLink]);

  return (
    <nav
      ref={navRef}
      className={cn(
        `relative rounded-full backdrop-blur-md border shadow-lg transition-all duration-300`,
        defaultThemeStyles.bg,
        defaultThemeStyles.border,
        defaultThemeStyles.glow,
        className
      )}
    >
      <div
        ref={highlightRef}
        className={cn(
          `absolute top-0 left-0 h-full rounded-full transition-all 
          duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0`,
          defaultThemeStyles.highlight
        )}
      />

      <ul className="flex justify-between items-center gap-4 py-2 relative z-10">
        {links.map((link) => (
          <li
            key={link.id}
            className="flex-1 rounded-full mx-1 lg:mx-2 px-0" 
            id={`nav-item-${link.id}`}
          >
            <a
              href={link.href}
              className={cn(
                `flex gap-1 items-center justify-center h-8 md:h-8 text-xs md:text-sm 
                rounded-full font-medium transition-all duration-300 hover:scale-105 
                relative overflow-hidden whitespace-nowrap px-4`,
                defaultThemeStyles.text,
                active === link.id && "font-semibold"
              )}
              onClick={(e) => {
                e.preventDefault(); 
                handleLinkClick(link.id, e);
              }}
            >
              {link.icon && <span className="text-current text-xs">{link.icon}</span>}
              <span className={cn(showLabelsOnMobile ? "flex" : "hidden sm:flex")}>
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DynamicNavigation;