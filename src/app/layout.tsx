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
        
        {/* Custom CSS for Ezoic consent banner dark theme */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Ezoic consent banner dark theme styling */
            .gk-consent-banner,
            .gk-consent-banner-container,
            [id*="gk-consent"],
            [class*="gk-consent"],
            [data-gk-consent],
            .consent-banner,
            #consent-banner,
            .privacy-banner {
              background-color: #000000 !important;
              color: #ffffff !important;
              border-color: #333333 !important;
            }
            
            .gk-consent-banner p,
            .gk-consent-banner div,
            .gk-consent-banner span,
            [id*="gk-consent"] p,
            [id*="gk-consent"] div,
            [id*="gk-consent"] span {
              color: #ffffff !important;
              background-color: transparent !important;
            }
            
            .gk-consent-banner button,
            [id*="gk-consent"] button,
            .consent-banner button {
              background-color: #333333 !important;
              color: #ffffff !important;
              border: 1px solid #555555 !important;
              border-radius: 4px !important;
            }
            
            .gk-consent-banner button:hover,
            [id*="gk-consent"] button:hover {
              background-color: #555555 !important;
              color: #ffffff !important;
            }
            
            /* Target any privacy-related elements */
            [class*="privacy"],
            [id*="privacy"],
            [class*="consent"],
            [id*="consent"] {
              background-color: #000000 !important;
              color: #ffffff !important;
            }
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

