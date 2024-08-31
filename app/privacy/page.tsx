import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <main className="mx-4 sm:mx-8 lg:mx-16 xl:mx-36 relative">
      <div 
        className="absolute inset-0 bg-secondary/30 rounded-full filter blur-3xl"
        style={{
          width: '20%',
          height: '10%',
          top: '2%',
          left: '60%',
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Use and Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="mb-4">By using ResumeMaker.Online, you agree to the following terms:</p>
          <ul className="list-disc list-inside mb-4">
            <li>You must be at least 18 years old or have parental consent to use our service.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials and all account activity.</li>
            <li>You agree to use our services legally and responsibly.</li>
            <li>We reserve the right to terminate access for violation of these terms without notice.</li>
            <li>Account and payment processing are handled securely by Outseta and Stripe. Please review <a href="#" className="text-primary hover:underline">Outseta's Terms</a> and <a href="#" className="text-primary hover:underline">Stripe's Terms</a>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy & Data Management</h2>
          <p className="mb-4">We prioritize your privacy:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Your resume data is stored locally on your device, not on our servers.</li>
            <li>Account and payment information is managed by Outseta and Stripe. See <a href="#" className="text-primary hover:underline">Outseta's Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Stripe's Privacy Policy</a>.</li>
            <li>We comply with GDPR, offering data access, correction, and deletion requests at resumemakeronline@in.outseta.com.</li>
            <li>We do not intentionally collect data from individuals under 16. If identified, such data will be deleted.</li>
            <li>Our platform integrates Rewardful for affiliate management. To use Rewardful's services, you need to agree to its <a href="#" className="text-primary hover:underline">Terms of Use</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">OpenAI API Usage</h3>
          <p className="mb-2">We utilize OpenAI's API to enhance our services. Your data:</p>
          <ul className="list-disc list-inside mb-4">
            <li>May be processed to provide personalized features.</li>
            <li>Is managed in compliance with OpenAI's privacy commitment, avoiding personal data memorization.</li>
            <li>Is protected through anonymization, data minimization, and secure transmission.</li>
          </ul>
          <p className="mb-4">We ensure compliance with privacy laws and recommend reviewing <a href="#" className="text-primary hover:underline">OpenAI's privacy policy</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Usage</h2>
          <p className="mb-4">We use essential cookies to enhance your experience:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Google Fonts for improved site aesthetics. See their <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</li>
            <li>Rewardful may use cookies for their services. See <a href="#" className="text-primary hover:underline">Rewardful's Privacy Policy</a>.</li>
            <li>Geolocation and currency conversion via FreeCurrencyAPI and ipapi.co. See <a href="#" className="text-primary hover:underline">FreeCurrencyAPI's Terms</a> and <a href="#" className="text-primary hover:underline">ipapi's Terms</a>.</li>
            <li>Outseta and Stripe for account management. See <a href="#" className="text-primary hover:underline">Outseta's Terms</a> and <a href="#" className="text-primary hover:underline">Stripe's Terms</a>.</li>
          </ul>
          <p className="mb-4">By using our services, you consent to our cookie usage. We periodically update our terms and policies.</p>
        </section>

        <p className="mt-8">If you have any questions, please don't hesitate to contact us.</p>
      </div>
    </main>
  );
};

export default PrivacyPage;