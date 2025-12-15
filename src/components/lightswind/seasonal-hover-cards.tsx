
import React from 'react';
import { cn } from "../../lib/utils";

export interface SeasonCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

interface SeasonalHoverCardsProps {
  cards: SeasonCardProps[];
  className?: string;
}

const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
}: SeasonCardProps) => {
  return (
    <div
      className={cn(
        "group relative w-full md:w-1/3 h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:w-2/3",
        className
      )}
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt={imageAlt || title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-200" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        
        {/* TITLE + SUBTITLE */}
        <div className="space-y-1 transition-opacity duration-150 group-hover:opacity-0">
          <h2 className="text-xl font-bold text-white drop-shadow">
            {title}
          </h2>
          <p className="text-sm text-white/80 drop-shadow">
            {subtitle}
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-base text-white leading-relaxed drop-shadow-lg">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

export function SeasonalHoverCards({
  cards,
  className,
}: SeasonalHoverCardsProps) {
  return (
    <div className={cn("flex flex-wrap md:flex-nowrap gap-4 w-full px-4", className)}>
      {cards.map((card, index) => (
        <SeasonCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
        />
      ))}
    </div>
  );
}
