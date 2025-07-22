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
          <h2 className="text-2xl font-semibent mb-4 text-white">4. Cookies and Tracking</h2>
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
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Privacy Rights</h2>
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
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Security</h2>
          <p className="text-gray-300 mb-4">
            We implement appropriate security measures to protect your information. However, no internet 
            transmission is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
          <p className="text-gray-300">
            If you have questions about this Privacy Policy, please contact us at: marsdirtmedia@gmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. We will notify users of any material 
            changes by posting the new policy on this page.
          </p>
        </section>
      </div>
    </div>
  );
}