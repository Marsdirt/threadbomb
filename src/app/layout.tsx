import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure this is correctly importing from src/app/globals.css
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ThreadBomb - Explode Your Wardrobe with Retro Finds',
  description: 'Search multiple vintage clothing marketplaces with one click. Find unique vintage pieces across eBay, Vinted, Depop, Poshmark, Etsy, Grailed, and more.',
  keywords: 'vintage clothing, retro fashion, vintage marketplace, thrift shopping, vintage finder, retro clothing search',
  authors: [{ name: 'ThreadBomb' }],
  creator: 'ThreadBomb',
  publisher: 'ThreadBomb',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://threadbomb.com',
    siteName: 'ThreadBomb',
    title: 'ThreadBomb - Explode Your Wardrobe with Retro Finds',
    description: 'Search multiple vintage clothing marketplaces with one click. Find unique vintage pieces across eBay, Vinted, Depop, Poshmark, Etsy, Grailed, and more.',
    images: [
      {
        url: 'https://threadbomb.com/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'ThreadBomb - Vintage Clothing Search',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ThreadBomb',
    creator: '@ThreadBomb',
    title: 'ThreadBomb - Explode Your Wardrobe with Retro Finds',
    description: 'Search multiple vintage clothing marketplaces with one click. Find unique vintage pieces across eBay, Vinted, Depop, Poshmark, Etsy, Grailed, and more.',
    images: ['https://threadbomb.com/favicon.svg'],
  },
  alternates: {
    canonical: 'https://threadbomb.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Ezoic Privacy Scripts - must be first */}
        <script
          src="https://cmp.gatekeeperconsent.com/min.js"
          data-cfasync="false"
        ></script>
        <script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          data-cfasync="false"
        ></script>
        {/* Ezoic Header Script */}
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />
        
        {/* Enhanced CSS for Ezoic consent banner dark theme */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* More aggressive targeting for consent banner */
            div[style*="position: fixed"],
            div[style*="bottom"],
            div[style*="left"],
            div[style*="right"],
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner,
            [id*="consent"],
            [class*="consent"],
            [id*="privacy"],
            [class*="privacy"] {
              background-color: #000000 !important;
              color: #ffffff !important;
              border-color: #333333 !important;
            }
            
            /* Target all text elements in consent banners */
            div[style*="position: fixed"] *,
            div[style*="bottom"] *,
            .gk-consent-banner *,
            .gk-consent-banner-container *,
            [id*="gk-consent"] *,
            [class*="gk-consent"] *,
            [data-gk-consent] *,
            .consent-banner *,
            #consent-banner *,
            .privacy-banner *,
            [id*="consent"] *,
            [class*="consent"] *,
            [id*="privacy"] *,
            [class*="privacy"] * {
              color: #ffffff !important;
              background-color: transparent !important;
            }
            
            /* Super aggressive button targeting - only for consent banners */
            div[style*="position: fixed"] button,
            div[style*="bottom"] button,
            div[style*="position: absolute"] button,
            div[style*="position: fixed"] input[type="button"],
            div[style*="bottom"] input[type="button"],
            .gk-consent-banner button,
            .gk-consent-banner input[type="button"],
            [id*="gk-consent"] button,
            [id*="gk-consent"] input[type="button"],
            .consent-banner button,
            .consent-banner input[type="button"],
            [id*="consent"] button:not(.search-button):not(.marketplace-button),
            [class*="consent"] button:not(.search-button):not(.marketplace-button),
            [id*="privacy"] button,
            [class*="privacy"] button {
              background-color: #333333 !important;
              color: #ffffff !important;
              border: 2px solid #555555 !important;
              border-radius: 6px !important;
              padding: 8px 16px !important;
              font-weight: 500 !important;
              cursor: pointer !important;
              transition: all 0.2s ease !important;
              margin: 4px !important;
              min-height: 36px !important;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
            }
            
            /* Button hover effects - only for consent banners */
            div[style*="position: fixed"] button:hover,
            div[style*="bottom"] button:hover,
            .gk-consent-banner button:hover,
            [id*="gk-consent"] button:hover,
            [id*="consent"] button:not(.search-button):not(.marketplace-button):hover,
            [id*="privacy"] button:hover {
              background-color: #555555 !important;
              color: #ffffff !important;
              border-color: #777777 !important;
              box-shadow: 0 4px 8px rgba(0,0,0,0.4) !important;
              transform: translateY(-1px) !important;
            }
          `
        }} />
        
        {/* Nuclear CSS approach - force visibility on everything */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Global override for white-on-white issues */
            * {
              text-shadow: 0 0 1px rgba(255,255,255,0.8) !important;
            }
            
            /* More aggressive targeting for consent banner */
            div[style*="position: fixed"],
            div[style*="bottom"],
            div[style*="left"],
            div[style*="right"],
            div[style*="position: absolute"],
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner,
            [id*="consent"],
            [class*="consent"],
            [id*="privacy"],
            [class*="privacy"] {
              background: #000000 !important;
              background-color: #000000 !important;
              color: #ffffff !important;
              border-color: #333333 !important;
            }
            
            /* Target all text elements in consent banners */
            div[style*="position: fixed"] *,
            div[style*="bottom"] *,
            div[style*="position: absolute"] *,
            .gk-consent-banner *,
            .gk-consent-banner-container *,
            [id*="gk-consent"] *,
            [class*="gk-consent"] *,
            [data-gk-consent] *,
            .consent-banner *,
            #consent-banner *,
            .privacy-banner *,
            [id*="consent"] *,
            [class*="consent"] *,
            [id*="privacy"] *,
            [class*="privacy"] * {
              color: #ffffff !important;
              background: transparent !important;
              background-color: transparent !important;
            }
            
            /* Super aggressive button targeting - only for consent banners */
            div[style*="position: fixed"] button,
            div[style*="bottom"] button,
            div[style*="position: absolute"] button,
            div[style*="position: fixed"] input,
            div[style*="bottom"] input,
            div[style*="position: absolute"] input,
            .gk-consent-banner button,
            .gk-consent-banner input,
            [id*="gk-consent"] button,
            [id*="gk-consent"] input,
            .consent-banner button,
            .consent-banner input,
            [id*="consent"] button:not(.search-button):not(.marketplace-button),
            [class*="consent"] button:not(.search-button):not(.marketplace-button),
            [id*="privacy"] button,
            [class*="privacy"] button {
              background: #333333 !important;
              background-color: #333333 !important;
              color: #ffffff !important;
              border: 2px solid #555555 !important;
              border-radius: 6px !important;
              padding: 8px 16px !important;
              font-weight: 500 !important;
              cursor: pointer !important;
              margin: 4px !important;
              min-height: 36px !important;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
              text-shadow: none !important;
            }
            
            /* Button hover effects */
            div[style*="position: fixed"] button:hover,
            div[style*="bottom"] button:hover,
            div[style*="position: absolute"] button:hover,
            .gk-consent-banner button:hover,
            [id*="gk-consent"] button:hover,
            [id*="consent"] button:not(.search-button):not(.marketplace-button):hover,
            [id*="privacy"] button:hover {
              background-color: #555555 !important;
              color: #ffffff !important;
              border-color: #777777 !important;
            }
          `
        }} />
        
        {/* Nuclear JavaScript approach with inline styles */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function styleEzoicElements() {
              console.log('Nuclear styling approach...');
              
              // Target ALL elements and force styling
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                const position = styles.position;
                const zIndex = parseInt(styles.zIndex) || 0;
                
                // If it's positioned and has high z-index (likely a modal/popup)
                if ((position === 'fixed' || position === 'absolute') && zIndex > 1000) {
                  console.log('Found modal element:', el);
                  
                  // Force inline styles (stronger than CSS)
                  el.style.backgroundColor = '#000000';
                  el.style.color = '#ffffff';
                  el.style.border = '1px solid #333333';
                  
                  // Style ALL descendants with inline styles
                  const allChildren = el.querySelectorAll('*');
                  allChildren.forEach(child => {
                    child.style.color = '#ffffff';
                    child.style.backgroundColor = 'transparent';
                    
                    // Force button styling with inline styles
                    if (child.tagName === 'BUTTON' || child.tagName === 'INPUT') {
                      child.style.backgroundColor = '#333333';
                      child.style.color = '#ffffff';
                      child.style.border = '2px solid #555555';
                      child.style.borderRadius = '6px';
                      child.style.padding = '8px 16px';
                      child.style.margin = '4px';
                      child.style.cursor = 'pointer';
                      child.style.fontWeight = '500';
                    }
                  });
                }
              });
              
              // Also target specific selectors with inline styles
              const selectors = [
                'div[style*="position: fixed"]',
                'div[style*="bottom"]'
              ];
              
              selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                  el.style.backgroundColor = '#000000';
                  el.style.color = '#ffffff';
                  
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.color = '#ffffff';
                    child.style.backgroundColor = 'transparent';
                    
                    if (child.tagName === 'BUTTON' || child.tagName === 'INPUT') {
                      child.style.backgroundColor = '#333333';
                      child.style.color = '#ffffff';
                      child.style.border = '2px solid #555555';
                      child.style.borderRadius = '6px';
                      child.style.padding = '8px 16px';
                      child.style.margin = '4px';
                      child.style.cursor = 'pointer';
                    }
                  });
                });
              });
            }
            
            // Run immediately and very frequently
            styleEzoicElements();
            setInterval(styleEzoicElements, 100);
            
            // Listen for clicks on "Do Not Sell"
            document.addEventListener('click', function(e) {
              const target = e.target;
              const text = target.textContent || target.innerText || '';
              
              if (text.includes('Do Not Sell') || text.includes('Privacy') || text.includes('Consent')) {
                console.log('Privacy clicked - nuclear styling mode');
                
                // Run styling 100 times with short intervals
                for (let i = 0; i < 100; i++) {
                  setTimeout(styleEzoicElements, i * 25);
                }
              }
            });
            
            // Super aggressive DOM observer
            const observer = new MutationObserver(function() {
              styleEzoicElements();
            });
            observer.observe(document.body, { 
              childList: true, 
              subtree: true, 
              attributes: true,
              attributeFilter: ['style', 'class', 'id']
            });
          `
        }} />
        
        {/* Nuclear JavaScript with setProperty and iframe handling */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function styleEzoicElements() {
              console.log('Nuclear approach - styling all elements...');
              
              // Style all positioned elements with high z-index
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                const position = styles.position;
                const zIndex = parseInt(styles.zIndex) || 0;
                
                if ((position === 'fixed' || position === 'absolute') && zIndex > 999) {
                  // Force with setProperty and important flag
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('color', '#ffffff', 'important');
                  
                  // Style all children
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.setProperty('color', '#ffffff', 'important');
                    child.style.setProperty('background-color', 'transparent', 'important');
                    
                    if (child.tagName === 'BUTTON' || child.tagName === 'INPUT') {
                      child.style.setProperty('background-color', '#333333', 'important');
                      child.style.setProperty('color', '#ffffff', 'important');
                      child.style.setProperty('border', '2px solid #555555', 'important');
                      child.style.setProperty('border-radius', '6px', 'important');
                      child.style.setProperty('padding', '8px 16px', 'important');
                    }
                  });
                }
              });
              
              // Target specific selectors
              const selectors = [
                'div[style*="position: fixed"]',
                'div[style*="absolute"]',
                'div[style*="bottom"]',
                'iframe'
              ];
              
              selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                  if (selector === 'iframe') {
                    // Try to style iframe content
                    try {
                      const iframeDoc = el.contentDocument || el.contentWindow.document;
                      if (iframeDoc && iframeDoc.body) {
                        iframeDoc.body.style.setProperty('background-color', '#000000', 'important');
                        iframeDoc.body.style.setProperty('color', '#ffffff', 'important');
                      }
                    } catch(e) {} // Cross-origin blocked
                  } else {
                    el.style.setProperty('background-color', '#000000', 'important');
                    el.style.setProperty('color', '#ffffff', 'important');
                    
                    el.querySelectorAll('*').forEach(child => {
                      child.style.setProperty('color', '#ffffff', 'important');
                      child.style.setProperty('background-color', 'transparent', 'important');
                    });
                  }
                });
              });
            }
            
            // Run immediately and constantly
            styleEzoicElements();
            setInterval(styleEzoicElements, 50); // Every 50ms
            
            // Listen for any click
            document.addEventListener('click', function(e) {
              const text = (e.target.textContent || '').toLowerCase();
              if (text.includes('do not sell') || text.includes('privacy') || text.includes('consent')) {
                // Rapid fire styling
                for (let i = 0; i < 200; i++) {
                  setTimeout(styleEzoicElements, i * 10);
                }
              }
            });
            
            // Watch for any DOM changes
            const observer = new MutationObserver(styleEzoicElements);
            observer.observe(document.body, { 
              childList: true, 
              subtree: true, 
              attributes: true
            });
          `
        }} />
        
        {/* Simplified CSS - just force black backgrounds on privacy elements */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Force black background on ALL positioned elements that could be privacy-related */
            div[style*="position: fixed"],
            div[style*="position: absolute"],
            div[style*="bottom"],
            div[style*="top"],
            div[style*="left"],
            div[style*="right"],
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner,
            [id*="consent"],
            [class*="consent"],
            [id*="privacy"],
            [class*="privacy"],
            div[role="dialog"],
            div[role="alertdialog"],
            div[aria-modal="true"] {
              background: #000000 !important;
              background-color: #000000 !important;
              border: 1px solid #333333 !important;
            }
            
            /* Also force black background on their children */
            div[style*="position: fixed"] *,
            div[style*="position: absolute"] *,
            div[style*="bottom"] *,
            .gk-consent-banner *,
            [id*="gk-consent"] *,
            [class*="gk-consent"] *,
            [id*="consent"] *,
            [class*="consent"] *,
            [id*="privacy"] *,
            [class*="privacy"] *,
            div[role="dialog"] *,
            div[role="alertdialog"] *,
            div[aria-modal="true"] * {
              background-color: #000000 !important;
            }
            
            /* Style buttons to be visible */
            div[style*="position: fixed"] button,
            div[style*="position: absolute"] button,
            div[style*="bottom"] button,
            [id*="consent"] button,
            [class*="consent"] button,
            [id*="privacy"] button,
            [class*="privacy"] button {
              background: #333333 !important;
              background-color: #333333 !important;
              color: #ffffff !important;
              border: 2px solid #555555 !important;
              border-radius: 6px !important;
              padding: 8px 16px !important;
              margin: 4px !important;
              cursor: pointer !important;
            }
          `
        }} />
        
        {/* Simplified JavaScript - just force black backgrounds */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function forceBlackBackgrounds() {
              console.log('Forcing black backgrounds on privacy elements...');
              
              // Target ALL positioned elements and force black background
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                const position = styles.position;
                const zIndex = parseInt(styles.zIndex) || 0;
                
                // If it's positioned and might be a modal/popup
                if ((position === 'fixed' || position === 'absolute') && zIndex > 999) {
                  console.log('Found positioned element, forcing black background:', el);
                  
                  // Just force black background - don't worry about text color
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('background', '#000000', 'important');
                  
                  // Force black background on all children too
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.setProperty('background-color', '#000000', 'important');
                    child.style.setProperty('background', '#000000', 'important');
                  });
                }
              });
              
              // Also target specific selectors
              const selectors = [
                'div[style*="position: fixed"]',
                'div[style*="position: absolute"]',
                'div[style*="bottom"]',
                '[id*="consent"]',
                '[class*="consent"]',
                '[id*="privacy"]',
                '[class*="privacy"]'
              ];
              
              selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('background', '#000000', 'important');
                  
                  // Force black on all children
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.setProperty('background-color', '#000000', 'important');
                    child.style.setProperty('background', '#000000', 'important');
                  });
                });
              });
            }
            
            // Run immediately and frequently
            forceBlackBackgrounds();
            setInterval(forceBlackBackgrounds, 100);
            
            // Run extra times when privacy buttons are clicked
            document.addEventListener('click', function(e) {
              const text = (e.target.textContent || '').toLowerCase();
              if (text.includes('do not sell') || text.includes('privacy') || text.includes('consent')) {
                console.log('Privacy button clicked - forcing black backgrounds');
                
                // Force black backgrounds multiple times
                for (let i = 0; i < 50; i++) {
                  setTimeout(forceBlackBackgrounds, i * 50);
                }
              }
            });
            
            // Watch for DOM changes
            const observer = new MutationObserver(forceBlackBackgrounds);
            observer.observe(document.body, { 
              childList: true, 
              subtree: true, 
              attributes: true
            });
          `
        }} />
        
        {/* Enhanced JavaScript specifically for popup elements */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function forceBlackBackgroundsOnPopup() {
              console.log('Targeting popup elements specifically...');
              
              // Target ALL elements - more aggressive for popups
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                const position = styles.position;
                const zIndex = parseInt(styles.zIndex) || 0;
                
                // Lower z-index threshold to catch more popups
                if ((position === 'fixed' || position === 'absolute') && zIndex > 100) {
                  console.log('Found positioned element (z-index:', zIndex, '):', el);
                  
                  // Force black background with all possible CSS properties
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('background', '#000000', 'important');
                  el.style.setProperty('background-image', 'none', 'important');
                  
                  // Force black background on ALL children and descendants
                  const allChildren = el.querySelectorAll('*');
                  allChildren.forEach(child => {
                    child.style.setProperty('background-color', '#000000', 'important');
                    child.style.setProperty('background', '#000000', 'important');
                    child.style.setProperty('background-image', 'none', 'important');
                  });
                }
              });
              
              // Also target by content - look for elements containing privacy-related text
              const textSelectors = [
                '*[innerHTML*="Do Not Sell"]',
                '*[innerHTML*="Privacy"]', 
                '*[innerHTML*="Consent"]',
                '*[innerHTML*="Cookie"]'
              ];
              
              textSelectors.forEach(selector => {
                try {
                  const elements = document.querySelectorAll(selector);
                  elements.forEach(el => {
                    // Go up the DOM tree to find the container
                    let parent = el;
                    for (let i = 0; i < 5; i++) {
                      if (parent) {
                        parent.style.setProperty('background-color', '#000000', 'important');
                        parent.style.setProperty('background', '#000000', 'important');
                        parent = parent.parentElement;
                      }
                    }
                  });
                } catch(e) {}
              });
            }
            
            // Run the enhanced function
            forceBlackBackgroundsOnPopup();
            setInterval(forceBlackBackgroundsOnPopup, 50); // Even more frequent
            
            // Enhanced click listener with more triggers
            document.addEventListener('click', function(e) {
              const target = e.target;
              const text = (target.textContent || target.innerText || '').toLowerCase();
              
              if (text.includes('do not sell') || 
                  text.includes('privacy') || 
                  text.includes('consent') ||
                  text.includes('cookie') ||
                  text.includes('preference')) {
                console.log('Privacy-related button clicked - aggressive popup styling');
                
                // Run styling 100 times with very short intervals
                for (let i = 0; i < 100; i++) {
                  setTimeout(forceBlackBackgroundsOnPopup, i * 10);
                }
                
                // Also try after longer delays to catch slow-loading popups
                setTimeout(forceBlackBackgroundsOnPopup, 1000);
                setTimeout(forceBlackBackgroundsOnPopup, 2000);
                setTimeout(forceBlackBackgroundsOnPopup, 3000);
              }
            });
            
            // Watch for ANY DOM changes and respond immediately
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  // New nodes added - might be popup
                  setTimeout(forceBlackBackgroundsOnPopup, 0);
                  setTimeout(forceBlackBackgroundsOnPopup, 10);
                  setTimeout(forceBlackBackgroundsOnPopup, 50);
                }
              });
            });
            observer.observe(document.body, { 
              childList: true, 
              subtree: true
            });
          `
        }} />
        
        {/* Specific targeting for California Privacy Settings popup */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function styleCaliforniaPrivacyPopup() {
              console.log('Targeting California Privacy Settings popup specifically...');
              
              // Look for elements containing the specific popup text
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const textContent = el.textContent || el.innerText || '';
                
                // If this element contains the California privacy popup text
                if (textContent.includes('California residents may opt out') ||
                    textContent.includes('Privacy Settings') ||
                    textContent.includes('Do not sell or share my information') ||
                    textContent.includes('Save Settings')) {
                  
                  console.log('Found California privacy popup element:', el);
                  
                  // Style this element and go up the DOM tree to style containers
                  let parent = el;
                  for (let i = 0; i < 10; i++) {
                    if (parent) {
                      parent.style.setProperty('background-color', '#000000', 'important');
                      parent.style.setProperty('background', '#000000', 'important');
                      parent.style.setProperty('background-image', 'none', 'important');
                      
                      // Also style all children
                      const children = parent.querySelectorAll('*');
                      children.forEach(child => {
                        child.style.setProperty('background-color', '#000000', 'important');
                        child.style.setProperty('background', '#000000', 'important');
                        child.style.setProperty('background-image', 'none', 'important');
                      });
                      
                      parent = parent.parentElement;
                    }
                  }
                }
              });
              
              // Also target by specific button text
              const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
              buttons.forEach(button => {
                const buttonText = button.textContent || button.value || '';
                if (buttonText.includes('Do not sell') || 
                    buttonText.includes('Save Settings') ||
                    buttonText.includes('share my information')) {
                  
                  console.log('Found California privacy button:', button);
                  
                  // Style the button and its containers
                  let parent = button;
                  for (let i = 0; i < 15; i++) {
                    if (parent) {
                      parent.style.setProperty('background-color', '#000000', 'important');
                      parent.style.setProperty('background', '#000000', 'important');
                      parent.style.setProperty('background-image', 'none', 'important');
                      
                      // Style all children of this container
                      const children = parent.querySelectorAll('*');
                      children.forEach(child => {
                        child.style.setProperty('background-color', '#000000', 'important');
                        child.style.setProperty('background', '#000000', 'important');
                        child.style.setProperty('background-image', 'none', 'important');
                      });
                      
                      parent = parent.parentElement;
                    }
                  }
                }
              });
            }
            
            // Run the California popup styling function
            styleCaliforniaPrivacyPopup();
            setInterval(styleCaliforniaPrivacyPopup, 25); // Very frequent - every 25ms
            
            // Enhanced click listener specifically for California privacy popup
            document.addEventListener('click', function(e) {
              const target = e.target;
              const text = (target.textContent || target.innerText || '').toLowerCase();
              
              if (text.includes('do not sell') || 
                  text.includes('privacy') || 
                  text.includes('consent') ||
                  text.includes('cookie') ||
                  text.includes('preference') ||
                  text.includes('california')) {
                console.log('California privacy-related button clicked - aggressive styling');
                
                // Run California popup styling 200 times with very short intervals
                for (let i = 0; i < 200; i++) {
                  setTimeout(styleCaliforniaPrivacyPopup, i * 5); // Every 5ms for 1 second
                }
                
                // Also try after longer delays
                setTimeout(styleCaliforniaPrivacyPopup, 1000);
                setTimeout(styleCaliforniaPrivacyPopup, 2000);
                setTimeout(styleCaliforniaPrivacyPopup, 3000);
                setTimeout(styleCaliforniaPrivacyPopup, 5000);
              }
            });
            
            // Watch for ANY DOM changes and respond immediately with California styling
            const californiaObserver = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  // Check if new nodes contain California privacy content
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                      const text = node.textContent || '';
                      if (text.includes('California residents') || 
                          text.includes('Privacy Settings') ||
                          text.includes('Do not sell')) {
                        console.log('California privacy popup detected in new DOM nodes');
                        
                        // Style immediately multiple times
                        setTimeout(styleCaliforniaPrivacyPopup, 0);
                        setTimeout(styleCaliforniaPrivacyPopup, 5);
                        setTimeout(styleCaliforniaPrivacyPopup, 10);
                        setTimeout(styleCaliforniaPrivacyPopup, 25);
                        setTimeout(styleCaliforniaPrivacyPopup, 50);
                      }
                    }
                  });
                }
              });
            });
            californiaObserver.observe(document.body, { 
              childList: true, 
              subtree: true
            });
          `
        }} />
        
        {/* More targeted CSS - only for privacy elements */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Only target privacy-related elements, not all positioned elements */
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner,
            [id*="consent"]:not(.search-results):not(.marketplace-links),
            [class*="consent"]:not(.search-results):not(.marketplace-links),
            [id*="privacy"]:not(.search-results):not(.marketplace-links),
            [class*="privacy"]:not(.search-results):not(.marketplace-links),
            div[role="dialog"],
            div[role="alertdialog"],
            div[aria-modal="true"] {
              background: #000000 !important;
              background-color: #000000 !important;
              border: 1px solid #333333 !important;
            }
            
            /* Only target children of privacy elements */
            .gk-consent-banner *,
            [id*="gk-consent"] *,
            [class*="gk-consent"] *,
            [id*="consent"]:not(.search-results) *,
            [class*="consent"]:not(.search-results) *,
            [id*="privacy"]:not(.search-results) *,
            [class*="privacy"]:not(.search-results) *,
            div[role="dialog"] *,
            div[role="alertdialog"] *,
            div[aria-modal="true"] * {
              background-color: #000000 !important;
            }
            
            /* Style privacy buttons to be visible */
            .gk-consent-banner button,
            [id*="gk-consent"] button,
            [class*="gk-consent"] button,
            [id*="consent"] button:not(.search-button):not(.marketplace-button),
            [class*="consent"] button:not(.search-button):not(.marketplace-button),
            [id*="privacy"] button:not(.search-button):not(.marketplace-button),
            [class*="privacy"] button:not(.search-button):not(.marketplace-button) {
              background: #333333 !important;
              background-color: #333333 !important;
              color: #ffffff !important;
              border: 2px solid #555555 !important;
              border-radius: 6px !important;
              padding: 8px 16px !important;
              margin: 4px !important;
              cursor: pointer !important;
            }
          `
        }} />
        
        {/* More targeted JavaScript - only for high z-index positioned elements */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function forceBlackBackgroundsTargeted() {
              console.log('Targeting only high z-index privacy elements...');
              
              // Only target elements with very high z-index (likely modals/popups)
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                const position = styles.position;
                const zIndex = parseInt(styles.zIndex) || 0;
                
                // Only target elements with very high z-index (modals/popups)
                if ((position === 'fixed' || position === 'absolute') && zIndex > 9999) {
                  console.log('Found high z-index element (z-index:', zIndex, '):', el);
                  
                  // Force black background
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('background', '#000000', 'important');
                  
                  // Force black background on children
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.setProperty('background-color', '#000000', 'important');
                    child.style.setProperty('background', '#000000', 'important');
                  });
                }
              });
              
              // Only target specific privacy-related selectors
              const privacySelectors = [
                '[id*="gk-consent"]',
                '[class*="gk-consent"]',
                '[id*="consent"]',
                '[class*="consent"]',
                '[id*="privacy"]',
                '[class*="privacy"]',
                'div[role="dialog"]',
                'div[role="alertdialog"]'
              ];
              
              privacySelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                  // Skip if this looks like part of search results
                  if (el.closest('.search-results') || 
                      el.closest('.marketplace-links') ||
                      el.classList.contains('search-results') ||
                      el.classList.contains('marketplace-links')) {
                    return;
                  }
                  
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('background', '#000000', 'important');
                  
                  // Force black on children
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.setProperty('background-color', '#000000', 'important');
                    child.style.setProperty('background', '#000000', 'important');
                  });
                });
              });
            }
            
            // Run targeted function
            forceBlackBackgroundsTargeted();
            setInterval(forceBlackBackgroundsTargeted, 200); // Less frequent
            
            // Only run on privacy button clicks
            document.addEventListener('click', function(e) {
              const text = (e.target.textContent || '').toLowerCase();
              if (text.includes('do not sell') || text.includes('privacy settings') || text.includes('consent')) {
                console.log('Privacy button clicked - targeted styling');
                
                // Run targeted styling
                for (let i = 0; i < 20; i++) {
                  setTimeout(forceBlackBackgroundsTargeted, i * 100);
                }
              }
            });
            
            // Targeted DOM observer
            const targetedObserver = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                      const text = node.textContent || '';
                      // Only respond to privacy-related content
                      if (text.includes('California residents') || 
                          text.includes('Privacy Settings') ||
                          text.includes('Do not sell')) {
                        setTimeout(forceBlackBackgroundsTargeted, 0);
                      }
                    }
                  });
                }
              });
            });
            targetedObserver.observe(document.body, { 
              childList: true, 
              subtree: true
            });
          `
        }} />
      </head>
      <body className="font-body antialiased bg-black text-white">
        <div className="flex justify-center pt-4 px-4 md:pt-6">
          <img 
            src="/new-logo.png" 
            alt="ThreadBomb Logo" 
            width="400" 
            height="120"
            className="max-w-full h-auto w-80 sm:w-96 md:w-full max-w-md"
          />
        </div>
        <div className="text-center mb-2 px-4">
          <p className="text-lg sm:text-xl text-gray-300 font-medium">
            Explode Your Wardrobe with Retro Finds.
          </p>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

