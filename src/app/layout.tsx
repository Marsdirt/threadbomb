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
        
        {/* ONLY EZOIC PRIVACY STYLING - Remove persistent banner, keep CA popup only */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Hide the persistent privacy banner entirely */
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner {
              display: none !important;
              visibility: hidden !important;
            }
          `
        }} />
        
        {/* ONLY CALIFORNIA POPUP JAVASCRIPT - No persistent banner */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function styleCaliforniaPopupOnly() {
              console.log('Styling California popup only...');
              
              // Only target California Privacy popup by exact text
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const textContent = el.textContent || el.innerText || '';
                
                // Only target the actual California privacy popup
                if (textContent.includes('California residents may opt out') ||
                    textContent.includes('Privacy Settings') ||
                    textContent.includes('Do not sell or share my information')) {
                  
                  let parent = el;
                  for (let i = 0; i < 8; i++) {
                    if (parent && parent !== document.body) {
                      const styles = window.getComputedStyle(parent);
                      
                      // Only style if it's a positioned modal/popup
                      if ((styles.position === 'fixed' || styles.position === 'absolute') && 
                          parseInt(styles.zIndex || '0') > 1000) {
                        
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
            
            // Only run when California popup is triggered
            document.addEventListener('click', function(e) {
              const text = (e.target.textContent || '').toLowerCase();
              
              if (text.includes('do not sell') || 
                  text.includes('privacy settings')) {
                
                console.log('California popup triggered');
                
                // Style California popup
                for (let i = 0; i < 20; i++) {
                  setTimeout(styleCaliforniaPopupOnly, i * 100);
                }
              }
            });
            
            // Watch for California popup content only
            const californiaObserver = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                      const text = node.textContent || '';
                      if (text.includes('Privacy Settings') && 
                          text.includes('California residents may opt out')) {
                        styleCaliforniaPopupOnly();
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
        
        {/* Footer with privacy policy link */}
        <footer className="mt-12 py-6 text-center border-t border-gray-800">
          <div className="text-sm text-gray-500">
            <a 
              href="/privacy-policy" 
              className="hover:text-gray-300 transition-colors underline"
            >
              Privacy Policy
            </a>
            {" | "}
            <span>© 2025 ThreadBomb</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

