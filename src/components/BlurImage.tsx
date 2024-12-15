import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

interface BlurImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function BlurImage({ src, alt, width, height, fill = false, className, priority = false }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden', { 'relative': fill })}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(
          className,
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
        priority={priority}
      />
    </div>
  );
}
