import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'PEDRARA Salon',
  fallbackTitle = 'PEDRARA Salon',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#EFECE6] ${containerClassName}`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : null}

      {/* Fallback container with editorial quiet texture */}
      {(hasError || !src) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#EFECE6] via-[#E7E3DC] to-[#DDD8CE] p-6 text-center">
          <div className="w-10 h-[1px] bg-[#C5A880] mb-3" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#7E7E88] font-sans">
            PEDRARA Salon
          </span>
          <span className="text-sm font-serif text-[#1A1A1D] mt-1 italic">
            {fallbackTitle}
          </span>
        </div>
      )}
    </div>
  );
};
