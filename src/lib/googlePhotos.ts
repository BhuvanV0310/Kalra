/**
 * Utility functions for handling Google Photos integration
 * 
 * Note: Google Photos API requires authentication and has specific rate limits.
 * For production use, you'll need to:
 * 1. Set up Google Photos API credentials
 * 2. Implement proper OAuth2 flow
 * 3. Handle API rate limits and error responses
 * 4. Consider using Google Photos Library API
 */

export interface GooglePhotosConfig {
  apiKey?: string;
  clientId?: string;
  albumId?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  thumbnail?: string;
  originalUrl?: string;
  mediaMetadata?: {
    width: string;
    height: string;
    creationTime: string;
  };
}

/**
 * Extract album ID from Google Photos shared URL
 */
export function extractAlbumId(url: string): string | null {
  try {
    // Match various Google Photos URL patterns
    const patterns = [
      /\/albums\/([a-zA-Z0-9_-]+)/,           // Standard album URL
      /\/share\/([a-zA-Z0-9_-]+)/,            // Shared album URL
      /album\/([a-zA-Z0-9_-]+)/,              // Alternative format
      /[?&]album=([a-zA-Z0-9_-]+)/,           // Query parameter format
      /AF1QipP1um1JOHdcggYiV7M6f6dY6F1_kNYpJId6aUQ5jCI9QusWPY1nQE9Y4OdvVXjEwg/, // Direct album ID pattern
      /AF1Qip[a-zA-Z0-9_-]+/,                 // General AF1Qip pattern
      /photos\.app\.goo\.gl\/([a-zA-Z0-9]+)/  // Shortened goo.gl URLs
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
      // For direct matches without capture groups
      if (match && match[0] && match[0].startsWith('AF1Qip')) {
        return match[0];
      }
    }

    // For goo.gl URLs, extract the ID from the path
    if (url.includes('photos.app.goo.gl/')) {
      const pathMatch = url.match(/photos\.app\.goo\.gl\/([a-zA-Z0-9]+)/);
      if (pathMatch && pathMatch[1]) {
        return pathMatch[1];
      }
    }

    return null;
  } catch (error) {
    console.error('Error extracting album ID:', error);
    return null;
  }
}

/**
 * Validate Google Photos URL format
 */
export function isValidGooglePhotosUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    const validDomains = [
      'photos.google.com',
      'photos.app.goo.gl',
      'goo.gl'
    ];

    return validDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

/**
 * Fetch photos from Google Photos shared album
 * 
 * @param albumUrl - The shared Google Photos album URL
 * @param config - API configuration (for future use)
 * @returns Promise resolving to array of photo items
 */
export async function fetchGooglePhotosAlbum(
  albumUrl: string, 
  config?: GooglePhotosConfig
): Promise<PhotoItem[]> {
  
  if (!isValidGooglePhotosUrl(albumUrl)) {
    throw new Error('Invalid Google Photos URL format');
  }

  const albumId = extractAlbumId(albumUrl);
  if (!albumId) {
    throw new Error('Could not extract album ID from URL');
  }

  try {
    // TODO: Implement actual Google Photos API integration
    // For now, return demo/fallback images
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demonstration, return static images with proper structure
    // Based on the album URL provided, these represent moving/packing services
    const demoPhotos: PhotoItem[] = [
      {
        id: 'kalra-office-1',
        url: '/assets/office-relocation.jpg',
        alt: 'Kalra Packers - Office Relocation Service',
        thumbnail: '/assets/office-relocation.jpg',
        originalUrl: '/assets/office-relocation.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-residential-1',
        url: '/assets/residential-moving.jpg',
        alt: 'Kalra Packers - Residential Moving Service',
        thumbnail: '/assets/residential-moving.jpg',
        originalUrl: '/assets/residential-moving.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-truck-1',
        url: '/assets/services-truck.jpg',
        alt: 'Kalra Packers - Moving Truck Fleet',
        thumbnail: '/assets/services-truck.jpg',
        originalUrl: '/assets/services-truck.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-hero-1',
        url: '/assets/hero-moving.jpg',
        alt: 'Kalra Packers - Professional Moving Team',
        thumbnail: '/assets/hero-moving.jpg',
        originalUrl: '/assets/hero-moving.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-logo-1',
        url: '/assets/LOGO.png',
        alt: 'Kalra Packers & Movers - Company Logo',
        thumbnail: '/assets/LOGO.png',
        originalUrl: '/assets/LOGO.png',
        mediaMetadata: {
          width: '800',
          height: '600',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-automotive-1',
        url: '/assets/Automotive.jpg',
        alt: 'Kalra Packers - Automotive Industry Services',
        thumbnail: '/assets/Automotive.jpg',
        originalUrl: '/assets/Automotive.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-manufacturing-1',
        url: '/assets/Manufacturing.jpg',
        alt: 'Kalra Packers - Manufacturing Sector Moving',
        thumbnail: '/assets/Manufacturing.jpg',
        originalUrl: '/assets/Manufacturing.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      },
      {
        id: 'kalra-pharma-1',
        url: '/assets/Pharmaceutical.jpg',
        alt: 'Kalra Packers - Pharmaceutical Moving Services',
        thumbnail: '/assets/Pharmaceutical.jpg',
        originalUrl: '/assets/Pharmaceutical.jpg',
        mediaMetadata: {
          width: '1200',
          height: '800',
          creationTime: new Date().toISOString()
        }
      }
    ];

    return demoPhotos;

    /*
    // Production implementation would look like this:
    
    const response = await fetch(
      `https://photoslibrary.googleapis.com/v1/sharedAlbums/${albumId}/mediaItems`,
      {
        headers: {
          'Authorization': `Bearer ${config?.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Google Photos API error: ${response.status}`);
    }

    const data = await response.json();
    
    return data.mediaItems?.map((item: any) => ({
      id: item.id,
      url: item.baseUrl,
      alt: item.filename || 'Gallery image',
      thumbnail: `${item.baseUrl}=w400-h300-c`,
      originalUrl: item.baseUrl,
      mediaMetadata: item.mediaMetadata
    })) || [];
    */

  } catch (error) {
    console.error('Error fetching Google Photos album:', error);
    throw new Error(`Failed to load Google Photos album: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generate optimized image URL with size parameters
 */
export function getOptimizedImageUrl(baseUrl: string, width: number = 800, height: number = 600): string {
  // Google Photos allows appending size parameters to image URLs
  if (baseUrl.includes('googleusercontent.com') || baseUrl.includes('photos.google.com')) {
    return `${baseUrl}=w${width}-h${height}-c`;
  }
  
  return baseUrl;
}

/**
 * Generate thumbnail URL
 */
export function getThumbnailUrl(baseUrl: string): string {
  return getOptimizedImageUrl(baseUrl, 400, 300);
}

/**
 * Cache management for Google Photos data
 */
class GooglePhotosCache {
  private cache = new Map<string, { data: PhotoItem[]; timestamp: number }>();
  private readonly CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

  set(albumId: string, data: PhotoItem[]): void {
    this.cache.set(albumId, {
      data,
      timestamp: Date.now()
    });
  }

  get(albumId: string): PhotoItem[] | null {
    const cached = this.cache.get(albumId);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(albumId);
      return null;
    }

    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const googlePhotosCache = new GooglePhotosCache();