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
          <h2 className="text-2xl font-semibold mb-4">Terms of Use for Waitlist</h2>
          <p className="mb-4">By joining the waitlist for Rexume, you agree to the following terms:</p>
          <ul className="list-disc list-inside mb-4">
            <li>You must be at least 18 years old to join our waitlist.</li>
            <li>The information you provide (name and email) will be used solely for the purpose of notifying you about our launch and related updates.</li>
            <li>We will not share your information with third parties without your consent.</li>
            <li>You can request to be removed from the waitlist at any time by contacting us.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">At Rexume, we prioritize your privacy:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Your waitlist data (name and email) is stored securely on our servers.</li>
            <li>We comply with GDPR, offering data access, correction, and deletion requests.</li>
            <li>We don&apos;t intentionally collect data from individuals under 16. If identified, such data will be deleted.</li>
          </ul>
        </section>

        <p className="mt-8">If you have any questions about our waitlist terms or privacy policy, please don&apos;t hesitate to <a href="#" className="text-secondary hover:underline">contact us</a>.</p>
      </div>
    </main>
  );
};

export default PrivacyPage;