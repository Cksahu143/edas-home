import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Visit = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-8 border border-primary-foreground/20">
            <GraduationCap className="h-10 w-10 text-primary-foreground" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-display text-gradient-hero mb-4">
            Visit EDAS
          </h1>
          <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed">
            EDAS is live and ready to use. Click below to open the app and start managing your education smarter.
          </p>

          <a
            href="https://edas.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-8 py-4 text-base font-semibold text-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            <ExternalLink className="h-5 w-5" />
            Open edas.lovable.app
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-8">
            <Link
              to="/"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            >
              ← Back to landing page
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Visit;
