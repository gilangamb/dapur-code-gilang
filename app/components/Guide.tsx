import React from 'react';
import Image from 'next/image';

export default function Guide() {
  const steps = [
    { num: "1", title: "Consult Your Design", desc: "Choose a design that you want and consult with us via DM to confirm the style and complexity." },
    { num: "2", title: "Measure with a Coin", desc: "Take a picture of your hand with a coin in the frame. We'll use this to perfect the fit for every nail." },
    { num: "3", title: "Order & Payment", desc: "Send your order format via WhatsApp and complete your payment so we can secure your slot." },
    { num: "4", title: "Review Your Set", desc: "We will send you a picture of your set for you to check and make any revisions if needed before top coat." },
    { num: "5", title: "Ready to Wear", desc: "Your set will be sent within 2-3 days. Get ready for your new stunning look!" },
  ];

  return (
    <section id="guide" className="py-24 px-6 bg-[#E3DFD4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-kuku-text mb-4">
            How to custom press-on nails
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-kuku-primary/20">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 relative z-10 group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-kuku-primary text-white font-bold flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-kuku-text mb-2">{step.title}</h3>
                  <p className="text-kuku-text/70 text-sm leading-relaxed max-w-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative sticky top-32 flex flex-col gap-6">
            <div className="w-full bg-kuku-text rounded-3xl overflow-hidden aspect-square relative shadow-2xl rotate-2">
              <Image src="/images/hero-2.png" alt="A hand measuring size" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-center px-8 font-medium">Take a photo of your hand with a coin for accurate sizing.</p>
              </div>
            </div>

            {/* Small doodle tip */}
            <div className="absolute -bottom-10 -left-10 bg-kuku-green text-kuku-bg p-4 rounded-2xl rounded-tl-none font-display text-xl shadow-lg -rotate-6 z-20">
              "Fits perfect! Tik, every single time. It feels like magic."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
