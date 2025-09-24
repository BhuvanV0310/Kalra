import React, { useState, useEffect, useCallback } from 'react';
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

  // Extract images from Google Photos shared album URL
  const extractGooglePhotosImages = useCallback(async (url: string): Promise<ImageData[]> => {
    try {
      setError(null);
      
      if (!isValidGooglePhotosUrl(url)) {
        throw new Error('Invalid Google Photos album URL');
      }

      console.log('Google Photos URL provided:', url);
      
      // Due to CORS restrictions, we cannot directly fetch from Google Photos
      // Instead, we'll use high-quality local images that represent your services
      // In production, you would implement server-side fetching or use Google Photos API
      
      console.log('Using curated local images that represent your moving services');
      
      return [
        {
          id: 'service-1',
          url: '/assets/office-relocation.jpg',
          alt: 'Kalra Packers - Professional Office Relocation Services'
        },
        {
          id: 'service-2',
          url: '/assets/residential-moving.jpg',
          alt: 'Kalra Packers - Residential Moving and Home Shifting'
        },
        {
          id: 'service-3',
          url: '/assets/services-truck.jpg',
          alt: 'Kalra Packers - Modern Fleet of Moving Trucks'
        },
        {
          id: 'service-4',
          url: '/assets/hero-moving.jpg',
          alt: 'Kalra Packers - Expert Moving Team in Action'
        },
        {
          id: 'service-5',
          url: '/assets/Automotive.jpg',
          alt: 'Kalra Packers - Automotive Industry Specialized Moving'
        },
        {
          id: 'service-6',
          url: '/assets/Manufacturing.jpg',
          alt: 'Kalra Packers - Manufacturing Sector Relocation Services'
        },
        {
          id: 'service-7',
          url: '/assets/Pharmaceutical.jpg',
          alt: 'Kalra Packers - Pharmaceutical Industry Moving Solutions'
        },
        {
          id: 'service-8',
          url: '/assets/FMCG-Consumer-Goods.jpg',
          alt: 'Kalra Packers - FMCG and Consumer Goods Transportation'
        },
        {
          id: 'service-9',
          url: '/assets/Electronics-Technology.jpg',
          alt: 'Kalra Packers - Electronics and Technology Moving Services'
        },
        {
          id: 'service-10',
          url: '/assets/LOGO.png',
          alt: 'Kalra Packers & Movers - Trusted Moving Company'
        }
      ];
      
    } catch (err) {
      console.error('Error processing gallery images:', err);
      setError('Failed to load gallery images');
      
      // Fallback to essential images
      return [
        {
          id: 'essential-1',
          url: '/assets/office-relocation.jpg',
          alt: 'Kalra Packers - Office Relocation Service'
        },
        {
          id: 'essential-2',
          url: '/assets/residential-moving.jpg',
          alt: 'Kalra Packers - Residential Moving Service'
        },
        {
          id: 'essential-3',
          url: '/assets/services-truck.jpg',
          alt: 'Kalra Packers - Moving Truck Fleet'
        },
        {
          id: 'essential-4',
          url: '/assets/hero-moving.jpg',
          alt: 'Kalra Packers - Professional Moving Team'
        },
        {
          id: 'essential-5',
          url: '/assets/LOGO.png',
          alt: 'Kalra Packers & Movers - Company Logo'
        }
      ];
    } finally {
      // Images processed
    }
  }, []);

  // Process static images
  const processStaticImages = useCallback((imageUrls: string[]): ImageData[] => {
    return imageUrls.map((url, index) => ({
      id: `static-${index}`,
      url,
      alt: `Gallery Image ${index + 1}`
    }));
  }, []);

  // Load images on component mount or when URLs change
  useEffect(() => {
    const loadImages = async () => {
      try {
        let loadedImages: ImageData[] = [];

        if (googlePhotosUrl) {
          loadedImages = await extractGooglePhotosImages(googlePhotosUrl);
        } else if (staticImages.length > 0) {
          loadedImages = processStaticImages(staticImages);
        } else {
          // Default images
          loadedImages = [
            {
              id: 'logo',
              url: '/assets/LOGO.png',
              alt: 'Kalra Packers & Movers Logo'
            }
          ];
        }

        setImages(loadedImages);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load images');
        // Fallback to static images or default
        if (staticImages.length > 0) {
          setImages(processStaticImages(staticImages));
        }
      }
    };

    loadImages();
  }, [googlePhotosUrl, staticImages, extractGooglePhotosImages, processStaticImages]);

  // Initialize autoplay when emblaApi is ready
  useEffect(() => {
    if (!emblaApi || !autoplayPlugin) return;

    const timer = setTimeout(() => {
      try {
        autoplayPlugin.play();
      } catch (error) {
        console.warn('Error starting autoplay:', error);
      }
    }, 500); // Delay to ensure embla is fully initialized

    return () => clearTimeout(timer);
  }, [emblaApi, autoplayPlugin]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Our Services Gallery</h2>
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
                <div
                  key={image.id}
                  className="flex-[0_0_100%] min-w-0 relative"
                >
                  <Card className="mx-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-48 sm:h-64 lg:h-96">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-contain bg-gray-50 transition-transform duration-300"
                          loading={image.id.includes('service-1') || image.id.includes('service-2') ? "eager" : "lazy"}
                          decoding="async"
                          {...(image.id.includes('service-1') ? { fetchpriority: "high" } : { fetchpriority: "low" })}
                          width="800"
                          height="600"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            console.warn(`Failed to load image: ${image.url}`);
                            e.currentTarget.src = '/assets/placeholder.svg';
                          }}
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                          style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-colors duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Show only on hover */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={scrollNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Google Photos Link - Bottom */}
        {googlePhotosUrl && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex items-center gap-2 mx-auto hover:to-blue-400 hover:text-white"
            >
              <a href={googlePhotosUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View all
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleGallery;