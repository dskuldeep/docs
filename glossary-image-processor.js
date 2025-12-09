// Process glossary images to extract size from alt text
(function() {
  function processGlossaryImages() {
    const cards = document.querySelectorAll('.glossary-card, .glossary-mdx-content');
    cards.forEach(function(card) {
      const images = card.querySelectorAll('img');
      images.forEach(function(img) {
        // Skip if already processed
        if (img.dataset.processed) return;
        
        const alt = img.getAttribute('alt') || '';
        // Check if alt text contains size syntax: alt|widthxheight
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

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processGlossaryImages);
  } else {
    processGlossaryImages();
  }

  // Also run after a delay to catch dynamically loaded content
  setTimeout(processGlossaryImages, 100);
  setTimeout(processGlossaryImages, 500);
})();

