import Image from "next/image";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Music Production",
        link: "/services/music",
        description:
            "From beat production to mixing and mastering, we engineer audio experiences that hold attention.",
        image: "https://images.unsplash.com/photo-1598847873329-ed1608fb858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y3Rpb24lMjBtaXhpbmclMjBjb25zb2xlfGVufDF8fHx8MTc3MDk4NTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: 2,
        title: "AI Solutions",
        link: "/services/ai",
        description:
            "We design practical AI systems that reduce friction and turn signal into action.",
        image: "https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzA5ODU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: 3,
        title: "Software Development",
        link: "/services/software",
        description:
            "Scalable digital products built with sound architecture and clear product direction.",
        image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
];

export function Services() {
    return (
        <section className="bg-[#f7f5f3] py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-6">
                <div className="mx-auto mb-16 max-w-3xl">
                    <h2 className="text-center text-2xl font-semibold tracking-[-0.05em] text-[#111827] md:text-4xl">
                        Built for product thinking and delivery.
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.link}
                            className="group overflow-hidden rounded-[1rem] border border-[#e5e1dc] bg-white transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden border-b border-[#e5e1dc] bg-[#f3f2ef]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, 50vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>

                            <div className="p-3 sm:p-4 md:p-5">
                                <h3 className="mb-2 break-words text-base font-semibold tracking-[-0.04em] text-[#111827] sm:text-lg">
                                    {service.title}
                                </h3>
                                <p className="line-clamp-3 text-sm leading-5 text-[#5f5b56] md:line-clamp-none">
                                    {service.description}
                                </p>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
