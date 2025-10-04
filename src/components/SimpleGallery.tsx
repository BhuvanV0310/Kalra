import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { isValidGooglePhotosUrl } from '@/lib/googlePhotos';

interface SimpleGalleryProps {
  googlePhotosUrl?: string;
  staticImages?: string[];
  className?: string;
}

interface ImageData {
  url: string;
  alt: string;
  id: string;
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({
  googlePhotosUrl,
  staticImages = [],
  className = ''
}) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Create autoplay plugin with 2 second delay
  const autoplayPlugin = React.useMemo(() => Autoplay({ 
    delay: 2000, // 2 seconds as requested
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: false
  }), []);

  // Initialize Embla with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps'
    },
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    // Start autoplay after a short delay
    const timer = setTimeout(() => {
      autoplayPlugin.play();
    }, 1000);

    return () => {
      clearTimeout(timer);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, autoplayPlugin]);

  // Effect to load images
  useEffect(() => {
    const loadImages = async () => {
      try {
        let imagesToShow: ImageData[] = [];

        // Add static images
        if (staticImages.length > 0) {
          const staticImageData = staticImages.map((url, index) => ({
            url,
            alt: `Moving service ${index + 1}`,
            id: `static-${index}`
          }));
          imagesToShow = [...imagesToShow, ...staticImageData];
        }

        // Add fallback images if no images are available
        if (imagesToShow.length === 0) {
          const fallbackImages = [
            { url: '/assets/office-relocation.jpg', alt: 'Office Relocation Services', id: 'fallback-1' },
            { url: '/assets/residential-moving.jpg', alt: 'Residential Moving Services', id: 'fallback-2' },
            { url: '/assets/services-truck.jpg', alt: 'Professional Moving Truck', id: 'fallback-3' },
          ];
          imagesToShow = fallbackImages;
        }

        setImages(imagesToShow);

        // Set error for Google Photos (if provided but can't be accessed)
        if (googlePhotosUrl && isValidGooglePhotosUrl(googlePhotosUrl)) {
          setError('google-photos-restricted');
        }
      } catch (err) {
        console.error('Error loading gallery images:', err);
        setError('Failed to load gallery images');
      }
    };

    loadImages();
  }, [googlePhotosUrl, staticImages]);

  if (images.length === 0) {
    return (
      <section className={`py-12 sm:py-16 lg:py-20 bg-gradient-section ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="mt-4 text-muted-foreground">Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gradient-section ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Our Services Gallery</h2>
          {/* Animated camera emoji */}
          <motion.div
            className="absolute -top-2 right-1/4 text-3xl"
            animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            📸
          </motion.div>
          <p className="text-lg text-gray-600 mb-6">Showcasing our professional moving and packing services</p>
          
          {error && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-700 text-sm">
                <span className="font-medium">Note:</span> Due to security restrictions, we're showing our curated gallery images. 
                <a href={googlePhotosUrl} target="_blank" rel="noopener noreferrer" className="underline ml-1">
                  View all
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image) => (
                <div key={image.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <Card className="mx-2 overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/assets/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white text-sm p-4 font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Only show if more than 3 images */}
          {images.length > 3 && (
            <>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50 z-10"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50 z-10"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* View All Button */}
        {googlePhotosUrl && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-200 text-gray-800 border-yellow-300 hover:bg-yellow-300 hover:text-gray-900 w-auto"
            >
              <a href={googlePhotosUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View all
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SimpleGallery;
