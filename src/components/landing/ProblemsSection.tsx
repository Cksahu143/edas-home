import { motion } from "framer-motion";
import { Layers, TrendingUp, Clock, ShieldCheck } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented Tools",
    description:
      "Replaces 5+ disconnected apps — scheduling, notes, chat, tasks, timers — with one unified platform.",
  },
  {
    icon: TrendingUp,
    title: "Declining Engagement",
    description:
      "Centralized tracking and analytics help teachers identify students who need support before they fall behind.",
  },
  {
    icon: Clock,
    title: "Wasted Admin Time",
    description:
      "Automates attendance, centralizes announcements, and streamlines grade management — saving up to 8 hours per week.",
  },
  {
    icon: ShieldCheck,
    title: "No Role-Based Access",
    description:
      "Provides 4-tier access control (Student, Teacher, School Admin, Platform Admin) with granular permissions.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why EDAS?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mt-3">
            Problems We Eliminate
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Education shouldn't be scattered across a dozen apps. EDAS brings everything together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl bg-card p-8 border feature-card-hover"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
