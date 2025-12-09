import { useEffect } from 'react';

/**
 * Processes images in glossary cards to extract size from alt text.
 * Supports all image formats including: PNG, JPG, JPEG, GIF, WebP, AVIF, SVG, etc.
 * Syntax: ![alt|widthxheight](/path/to/image.avif)
 */
export const GlossaryImageProcessor = () => {
  useEffect(() => {
    function processGlossaryImages() {
      const cards = document.querySelectorAll('.glossary-card, .glossary-mdx-content');
      cards.forEach(function(card) {
        // Process all img elements regardless of format (PNG, JPG, AVIF, WebP, SVG, etc.)
        const images = card.querySelectorAll('img');
        images.forEach(function(img) {
          if (img.dataset.processed) return;
          const alt = img.getAttribute('alt') || '';
          // Extract size from alt text: alt|widthxheight
          const sizeMatch = alt.match(/^(.+)\|(\d+)x(\d+)$/);
          if (sizeMatch) {
            const cleanAlt = sizeMatch[1];
            const width = sizeMatch[2];
            const height = sizeMatch[3];
            img.setAttribute('alt', cleanAlt);
            img.setAttribute('width', width);
            img.setAttribute('height', height);
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.dataset.processed = 'true';
          }
        });
      });
    }

    // Run immediately
    processGlossaryImages();

    // Also run after delays to catch dynamically loaded content
    const timeout1 = setTimeout(processGlossaryImages, 100);
    const timeout2 = setTimeout(processGlossaryImages, 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return null;
};

