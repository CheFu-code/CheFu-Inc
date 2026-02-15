import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Bridging the Gap Between Art & Algorithms
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                CheFu Inc was founded on the belief that the future belongs to those who can synthesize creativity with technology. We are a team of musicians, engineers, and data scientists working together to push the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Whether it's composing a symphony with AI assistance or building a cloud-native platform that scales to millions, we bring the same level of passion and precision to every project.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Forward-Thinking Strategy',
                  'Cross-Disciplinary Teams',
                  'Agile Development',
                  'High-Fidelity Results'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-cyan-900/20"
            >
              <img
                src="https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
