import React from "react";

const Gallery = () => (
  <section className="py-20 bg-yellow-200">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Gallery</h2>
      <div className="flex justify-center">
        {/* Flickr Embed */}
        <div style={{ width: "100%", maxWidth: 800 }}>
          <a data-flickr-embed="true" href="https://www.flickr.com/photos/203559838@N08/albums/72177720328970100" title="Phootoo">
            <img src="https://live.staticflickr.com/65535/54782168375_d1890ecb6f_b.jpg" width="100%" height="auto" alt="Phootoo" />
          </a>
        </div>
      </div>
  <script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
    </div>
  </section>
);

export default Gallery;
