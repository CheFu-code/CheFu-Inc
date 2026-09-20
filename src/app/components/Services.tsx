import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Music Production',
    link: '/services/music',
    description: 'From beat production to mixing and mastering, we engineer audio experiences that hold attention.',
    features: ['Beat Production', 'Mixing & Mastering', 'Sound Design & Foley'],
    image: 'https://images.unsplash.com/photo-1598847873329-ed1608fb858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y3Rpb24lMjBtaXhpbmclMjBjb25zb2xlfGVufDF8fHx8MTc3MDk4NTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'AI Solutions',
    link: '/services/ai',
    description: 'We design practical AI systems that reduce friction and turn signal into action.',
    features: ['AI-Powered Apps', 'Machine Learning Systems', 'Voice Technology'],
    image: 'https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzA5ODU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Software Development',
    link: '/services/software',
    description: 'Scalable digital products built with sound architecture and clear product direction.',
    features: ['Web Applications', 'Mobile App Development', 'Custom Systems'],
    image: 'https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section className="bg-[#f7f5f3] py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl">
          <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
            Expertise
          </p>
          <h2 className="text-center text-2xl font-semibold tracking-[-0.05em] text-[#111827] md:text-4xl">
            Built for product thinking and delivery.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#e5e1dc] bg-white">
              <div className="relative h-52 overflow-hidden border-b border-[#e5e1dc] bg-[#f3f2ef]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em] text-[#111827]">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-6 text-[#5f5b56]">
                  {service.description}
                </p>

                <ul className="mb-7 space-y-3 text-xs text-[#374151]">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 border-b border-[#f0ece8] pb-2 last:border-b-0 last:pb-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1f3c5b]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.link} className="mt-auto inline-flex items-center text-sm font-medium text-[#111827] transition-colors hover:text-[#1f3c5b]">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
