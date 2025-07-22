import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ThreadBomb',
  description: 'ThreadBomb Privacy Policy - How we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            ThreadBomb is a vintage clothing search tool that helps users find items across multiple marketplaces. 
            We collect minimal information to provide our service:
          </p>
          <ul className="text-gray-300 ml-6 list-disc">
            <li>Search queries you enter on our site</li>
            <li>Basic analytics data (page views, browser type, etc.)</li>
            <li>Information collected by our advertising partners</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
          <ul className="text-gray-300 ml-6 list-disc">
            <li>To provide search functionality across vintage clothing marketplaces</li>
            <li>To improve our service and user experience</li>
            <li>To display relevant advertisements through our advertising partners</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Third-Party Services</h2>
          <p className="text-gray-300 mb-4">
            We use third-party services to operate our website:
          </p>
          <ul className="text-gray-300 ml-6 list-disc">
            <li><strong>Ezoic:</strong> Provides advertising and website optimization services</li>
            <li><strong>External Marketplaces:</strong> When you click search results, you're directed to third-party sites (eBay, Etsy, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Ezoic Services</h2>
          <p className="text-gray-300 mb-4">
            This website uses the services of Ezoic Inc. ("Ezoic"), including to manage third-party interest-based advertising. 
            Ezoic may employ a variety of technologies on this website, including tools to serve content, display advertisements 
            and enable advertising to visitors of this website, which may utilize first and third-party cookies.
          </p>
          <p className="text-gray-300 mb-4">
            A cookie is a small text file sent to your device by a web server that enables the website to remember information 
            about your browsing activity. First-party cookies are created by the site you are visiting, while third-party 
            cookies are set by domains other than the one you're visiting. Ezoic and our partners may place third-party cookies, 
            tags, beacons, pixels, and similar technologies to monitor interactions with advertisements and optimize ad targeting. 
            Please note that disabling cookies may limit access to certain content and features on the website, and rejecting 
            cookies does not eliminate advertisements but will result in non-personalized advertising. You can find more 
            information about cookies and how to manage them <a href="https://www.allaboutcookies.org/" className="text-blue-400 hover:text-blue-300 underline">here</a>.
          </p>
          <p className="text-gray-300 mb-4">
            The following information may be collected, used, and stored in a cookie when serving personalized ads:
          </p>
          <ul className="text-gray-300 ml-6 list-disc mb-4">
            <li>IP address</li>
            <li>Operating system type and version</li>
            <li>Device type</li>
            <li>Language preferences</li>
            <li>Web browser type</li>
            <li>Email (in a hashed or encrypted form)</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Ezoic and its partners may use this data in combination with information that has been independently collected to 
            deliver targeted advertisements across various platforms and websites. Ezoic's partners may also gather additional 
            data, such as unique IDs, advertising IDs, geolocation data, usage data, device information, traffic data, referral 
            sources, and interactions between users and websites or advertisements, to create audience segments for targeted 
            advertising across different devices, browsers, and apps. You can find more information about interest-based 
            advertising and how to manage them <a href="https://optout.aboutads.info/" className="text-blue-400 hover:text-blue-300 underline">here</a>.
          </p>
          <p className="text-gray-300">
            You can view <a href="https://www.ezoic.com/privacy-policy/" className="text-blue-400 hover:text-blue-300 underline">Ezoic's privacy policy here</a>, 
            or for additional information about Ezoic's advertising and other partners, you can view <a href="https://www.ezoic.com/advertising-partners/" className="text-blue-400 hover:text-blue-300 underline">Ezoic's advertising partners here</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Cookies and Tracking</h2>
          <p className="text-gray-300 mb-4">
            We and our partners use cookies and similar technologies for:
          </p>
          <ul className="text-gray-300 ml-6 list-disc">
            <li>Website functionality and user experience</li>
            <li>Analytics to understand how our site is used</li>
            <li>Advertising personalization and measurement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Privacy Rights</h2>
          <p className="text-gray-300 mb-4">
            Depending on your location, you may have rights regarding your personal information:
          </p>
          <ul className="text-gray-300 ml-6 list-disc">
            <li><strong>California Residents:</strong> Right to opt out of sale/sharing of personal information</li>
            <li><strong>EU Residents:</strong> Rights under GDPR including access, deletion, and portability</li>
            <li><strong>All Users:</strong> You can adjust cookie preferences through your browser settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Data Security</h2>
          <p className="text-gray-300 mb-4">
            We implement appropriate security measures to protect your information. However, no internet 
            transmission is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Us</h2>
          <p className="text-gray-300">
            If you have questions about this Privacy Policy, please contact us at: marsdirtmedia@gmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. We will notify users of any material 
            changes by posting the new policy on this page.
          </p>
        </section>
      </div>
    </div>
  );
}