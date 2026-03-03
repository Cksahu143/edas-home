import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckSquare,
  Timer,
  MessageCircle,
  BookOpen,
  Mic,
  Music,
  Calendar,
} from "lucide-react";
import featuresBg from "@/assets/features-bg.jpg";

const features = [
  {
    icon: CalendarDays,
    title: "Timetable Management",
    description: "Create, manage, and share class timetables with color-coded subjects and break support.",
  },
  {
    icon: Calendar,
    title: "Calendar & Scheduling",
    description: "Month and week views with exam tracking, event reminders, and timetable integration.",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Create prioritized tasks linked to timetable periods with completion tracking.",
  },
  {
    icon: Timer,
    title: "Pomodoro Timer",
    description: "Customizable work/break durations with session tracking and distraction-free focus mode.",
  },
  {
    icon: MessageCircle,
    title: "Study Chat & Collaboration",
    description: "Group chats, DMs, voice messages, file sharing, reactions, pinned messages, and more.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Upload and organize PDFs, links, videos. In-app PDF viewer with favorites and tag filtering.",
  },
  {
    icon: Mic,
    title: "AI Transcription",
    description: "Live lecture transcription using speech recognition, saved directly to your Resource Library.",
  },
  {
    icon: Music,
    title: "Study Music Player",
    description: "Built-in ambient music — Lofi, Nature Sounds, Calm Piano — with volume control.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Subtle bg image */}
      <div className="absolute inset-0">
        <img src={featuresBg} alt="" className="h-full w-full object-cover opacity-5" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mt-3">
            Everything You Need
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From timetables to AI transcription — EDAS covers every aspect of your educational journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-card border p-6 feature-card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold font-display text-card-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
