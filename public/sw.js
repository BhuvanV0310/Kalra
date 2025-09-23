const CACHE_NAME = 'kalra-packers-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/assets/LOGO.png',
  '/assets/hero-moving.jpg',
  '/assets/office-relocation.jpg',
  '/assets/residential-moving.jpg',
  '/assets/services-truck.jpg',
  '/assets/placeholder.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch((error) => {
        console.error('[ServiceWorker] Failed to cache static assets:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache specific types of resources
            const url = new URL(event.request.url);
            const isAsset = url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$/);
            const isApiCall = url.pathname.startsWith('/api/');

            if (isAsset && !isApiCall) {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            // If both cache and network fail, return a fallback
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
            if (event.request.destination === 'image') {
              return caches.match('/assets/placeholder.svg');
            }
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleContactFormSync()
    );
  }
});

async function handleContactFormSync() {
  try {
    // Get stored form data from IndexedDB or localStorage
    const formData = await getStoredFormData();
    if (formData) {
      // Attempt to submit the form
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Clear stored data on successful submission
        await clearStoredFormData();
        console.log('[ServiceWorker] Contact form submitted successfully');
      }
    }
  } catch (error) {
    console.error('[ServiceWorker] Failed to sync contact form:', error);
  }
}

async function getStoredFormData() {
  // Implement your storage retrieval logic here
  return null;
}

async function clearStoredFormData() {
  // Implement your storage clearing logic here
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/LOGO.png',
      badge: '/assets/LOGO.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
          icon: '/assets/LOGO.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/assets/LOGO.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[ServiceWorker] Service Worker registered successfully');