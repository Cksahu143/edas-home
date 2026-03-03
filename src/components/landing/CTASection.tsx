import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient-hero mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10">
            Join EDAS today and experience the future of educational management — for free.
          </p>
          <a
            href="https://edas.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-semibold text-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            Launch EDAS Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
