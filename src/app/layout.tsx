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
        
        {/* JavaScript to force style ALL Ezoic elements after they load */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function styleEzoicElements() {
              console.log('Styling Ezoic elements...');
              
              // Force style on ALL elements that could be privacy-related
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                const position = styles.position;
                const zIndex = parseInt(styles.zIndex) || 0;
                
                // If it's positioned and has high z-index (likely a modal/popup)
                if ((position === 'fixed' || position === 'absolute') && zIndex > 1000) {
                  console.log('Found high z-index element:', el);
                  
                  // Force dark theme with inline styles
                  el.style.backgroundColor = '#000000';
                  el.style.color = '#ffffff';
                  el.style.border = '1px solid #333333';
                  
                  // Style ALL children aggressively
                  const allChildren = el.querySelectorAll('*');
                  allChildren.forEach(child => {
                    child.style.color = '#ffffff';
                    child.style.backgroundColor = 'transparent';
                    
                    // Force button styling
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
              
              // Also target specific selectors
              const selectors = [
                'div[style*="position: fixed"]',
                'div[style*="position: absolute"]',
                'div[style*="bottom"]',
                'div[style*="top"]',
                'div[style*="z-index"]',
                '.gk-consent-banner',
                '[id*="gk-consent"]',
                '[class*="gk-consent"]',
                '[data-gk-consent]',
                '[id*="consent"]',
                '[class*="consent"]',
                '[id*="privacy"]',
                '[class*="privacy"]',
                'div[role="dialog"]',
                'div[role="alertdialog"]',
                'div[aria-modal="true"]'
              ];
              
              selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                  // Force dark theme with inline styles (stronger than CSS)
                  el.style.backgroundColor = '#000000';
                  el.style.color = '#ffffff';
                  el.style.border = '1px solid #333333';
                  
                  // Style ALL descendants with inline styles
                  const allChildren = el.querySelectorAll('*');
                  allChildren.forEach(child => {
                    child.style.color = '#ffffff';
                    child.style.backgroundColor = 'transparent';
                    
                    // If it's a button or input
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
                });
              });
            }
            
            // Add click listeners to "Do Not Sell" buttons to catch popup creation
            function addClickListeners() {
              document.addEventListener('click', function(e) {
                const target = e.target;
                const text = target.textContent || target.innerText || '';
                
                // If they clicked "Do Not Sell" or similar text
                if (text.includes('Do Not Sell') || text.includes('Privacy') || text.includes('Consent')) {
                  console.log('Privacy button clicked, will style popup aggressively');
                  
                  // Style immediately and repeatedly with more attempts
                  for (let i = 0; i < 20; i++) {
                    setTimeout(styleEzoicElements, i * 100);
                  }
                }
              });
            }
            
            // Run immediately
            styleEzoicElements();
            addClickListeners();
            
            // Run when DOM loads
            document.addEventListener('DOMContentLoaded', function() {
              styleEzoicElements();
              addClickListeners();
            });
            
            // Run very frequently to catch dynamic content
            setInterval(styleEzoicElements, 200);
            
            // Watch for ANY changes to the DOM - super aggressive
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  // Style immediately when new nodes are added
                  setTimeout(styleEzoicElements, 0);
                  setTimeout(styleEzoicElements, 50);
                  setTimeout(styleEzoicElements, 100);
                }
              });
            });
            observer.observe(document.body, { 
              childList: true, 
              subtree: true, 
              attributes: true
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

