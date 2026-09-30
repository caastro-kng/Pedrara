import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'PEDRARA Salon',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasImage = Boolean(src) && !hasError;

  return (
    <div
      className={`relative overflow-hidden bg-[#EDE8DF] border border-[#D8D5CF]/60 ${containerClassName}`}
      aria-label={!hasImage ? 'Espaço reservado para fotografia real da PEDRARA Salon' : undefined}
    >
      {hasImage ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 bg-[#EDE8DF]" />
      )}
    </div>
  );
};