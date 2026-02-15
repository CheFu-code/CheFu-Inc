import { ShieldCheck } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 mb-4 text-cyan-400">
             <ShieldCheck className="w-8 h-8" />
             <span className="font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: February 13, 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            At CheFu Inc ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website chefuinc.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>

          <h3 className="text-white font-bold mt-8 mb-4 text-xl">1. Information We Collect</h3>
          <p>
            We collect several types of information from and about users of our Website, including information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
            <li>That is about you but individually does not identify you, such as industry, role, or company size.</li>
            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
          </ul>

          <h3 className="text-white font-bold mt-8 mb-4 text-xl">2. How We Use Your Information</h3>
          <p>
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it (e.g., project inquiries).</li>
            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
          </ul>

          <h3 className="text-white font-bold mt-8 mb-4 text-xl">3. Data Security</h3>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
          </p>
          
          <h3 className="text-white font-bold mt-8 mb-4 text-xl">4. Contact Information</h3>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@chefuinc.com" className="text-cyan-400 hover:underline">privacy@chefuinc.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
