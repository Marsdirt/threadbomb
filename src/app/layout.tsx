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
        {/* Ezoic Privacy Scripts */}
        <script
          src="https://cmp.gatekeeperconsent.com/min.js"
          data-cfasync="false"
        ></script>
        <script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          data-cfasync="false"
        ></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />
        
        {/* ONLY EZOIC PRIVACY STYLING - No interference with ThreadBomb */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Only target EZOIC-specific elements */
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner {
              background: #000000 !important;
              background-color: #000000 !important;
              color: #ffffff !important;
              border: 1px solid #333333 !important;
            }
            
            .gk-consent-banner *,
            [id*="gk-consent"] *,
            [class*="gk-consent"] *,
            [data-gk-consent] *,
            .consent-banner *,
            #consent-banner *,
            .privacy-banner * {
              background-color: #000000 !important;
              color: #ffffff !important;
            }
            
            .gk-consent-banner button,
            [id*="gk-consent"] button,
            [class*="gk-consent"] button,
            [data-gk-consent] button,
            .consent-banner button,
            #consent-banner button,
            .privacy-banner button {
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
        
        {/* ONLY EZOIC PRIVACY JAVASCRIPT - No interference with ThreadBomb */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function styleEzoicPrivacyOnly() {
              // Only target EZOIC-specific selectors
              const ezoicSelectors = [
                '.gk-consent-banner',
                '[id*="gk-consent"]',
                '[class*="gk-consent"]',
                '[data-gk-consent]',
                '.consent-banner',
                '#consent-banner',
                '.privacy-banner'
              ];
              
              ezoicSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                  el.style.setProperty('background-color', '#000000', 'important');
                  el.style.setProperty('background', '#000000', 'important');
                  el.style.setProperty('color', '#ffffff', 'important');
                  
                  const children = el.querySelectorAll('*');
                  children.forEach(child => {
                    child.style.setProperty('background-color', '#000000', 'important');
                    child.style.setProperty('background', '#000000', 'important');
                    child.style.setProperty('color', '#ffffff', 'important');
                    
                    if (child.tagName === 'BUTTON' || child.tagName === 'INPUT') {
                      child.style.setProperty('background-color', '#333333', 'important');
                      child.style.setProperty('border', '2px solid #555555', 'important');
                      child.style.setProperty('border-radius', '6px', 'important');
                      child.style.setProperty('padding', '8px 16px', 'important');
                    }
                  });
                });
              });
              
              // Target California Privacy popup by exact text only
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const textContent = el.textContent || el.innerText || '';
                
                if (textContent.includes('California residents may opt out') ||
                    textContent.includes('Do not sell or share my information')) {
                  
                  let parent = el;
                  for (let i = 0; i < 8; i++) {
                    if (parent && parent !== document.body) {
                      const styles = window.getComputedStyle(parent);
                      
                      if (styles.position === 'fixed' || styles.position === 'absolute') {
                        parent.style.setProperty('background-color', '#000000', 'important');
                        parent.style.setProperty('background', '#000000', 'important');
                        parent.style.setProperty('color', '#ffffff', 'important');
                        
                        const children = parent.querySelectorAll('*');
                        children.forEach(child => {
                          child.style.setProperty('background-color', '#000000', 'important');
                          child.style.setProperty('background', '#000000', 'important');
                          child.style.setProperty('color', '#ffffff', 'important');
                        });
                        break;
                      }
                      
                      parent = parent.parentElement;
                    }
                  }
                }
              });
            }
            
            // Run less frequently to avoid interference
            styleEzoicPrivacyOnly();
            setInterval(styleEzoicPrivacyOnly, 500);
            
            // Only trigger on specific EZOIC privacy clicks
            document.addEventListener('click', function(e) {
              const text = (e.target.textContent || '').toLowerCase();
              
              if (text.includes('do not sell') || 
                  text.includes('privacy settings') ||
                  text.includes('save settings')) {
                
                for (let i = 0; i < 10; i++) {
                  setTimeout(styleEzoicPrivacyOnly, i * 200);
                }
              }
            });
            
            // Only watch for EZOIC privacy content
            const ezoicObserver = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                      const text = node.textContent || '';
                      if (text.includes('California residents may opt out') || 
                          text.includes('Do not sell or share my information') ||
                          text.includes('gk-consent')) {
                        setTimeout(styleEzoicPrivacyOnly, 100);
                      }
                    }
                  });
                }
              });
            });
            ezoicObserver.observe(document.body, { 
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

