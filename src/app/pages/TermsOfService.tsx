import React from 'react';
import { Scale } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 mb-4 text-cyan-400">
             <Scale className="w-8 h-8" />
             <span className="font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-500">Last updated: February 13, 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CheFu Inc website (the "Service") operated by CheFu Inc ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <h3 className="text-white font-bold mt-8 mb-4 text-xl">1. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of CheFu Inc and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CheFu Inc.
          </p>

          <h3 className="text-white font-bold mt-8 mb-4 text-xl">2. Links To Other Web Sites</h3>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by CheFu Inc. CheFu Inc has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that CheFu Inc shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>

          <h3 className="text-white font-bold mt-8 mb-4 text-xl">3. Termination</h3>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>
          
          <h3 className="text-white font-bold mt-8 mb-4 text-xl">4. Governing Law</h3>
          <p>
             These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
          </p>
          
          <h3 className="text-white font-bold mt-8 mb-4 text-xl">5. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
}
