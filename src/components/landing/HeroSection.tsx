import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="EDAS educational technology background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-foreground"
            style={{
              width: 4 + Math.random() * 6,
              height: 4 + Math.random() * 6,
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              opacity: 0.15 + Math.random() * 0.2,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary-glow" />
            <span className="text-sm font-medium text-primary-foreground/80">
              All-in-One Education Platform
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 text-gradient-hero">
            Education,
            <br />
            Reimagined.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            EDAS unifies scheduling, collaboration, productivity, and administration
            into one intelligent system for students, teachers, and administrators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://edas.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-semibold text-foreground hover:opacity-90 transition-opacity glow-primary"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass-card px-8 py-4 text-base font-semibold text-primary-foreground/90 hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "15+", label: "Core Features" },
            { value: "4", label: "User Roles" },
            { value: "8hrs", label: "Saved Weekly" },
            { value: "5+", label: "Apps Replaced" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
