import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Clock, Mic, Shield, MessageCircle } from "lucide-react";

import screenshotDashboard  from "@/assets/screenshot-dashboard.png";
import screenshotTimetable  from "@/assets/screenshot-timetable.png";
import screenshotTranscribe from "@/assets/screenshot-transcribe.png";
import screenshotRoles      from "@/assets/screenshot-roles.png";
import screenshotChat       from "@/assets/screenshot-chat.png";

const TABS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    screenshot: screenshotDashboard,
    title: "Everything at a glance",
    desc: "See your resources, exams, timetables and active groups the moment you open EDAS.",
  },
  {
    id: "timetable",
    label: "Timetable",
    icon: Clock,
    screenshot: screenshotTimetable,
    title: "Your week, perfectly laid out",
    desc: "Build and manage your weekly schedule with periods, teachers, and rooms — all in one view.",
  },
  {
    id: "transcribe",
    label: "AI Transcribe",
    icon: Mic,
    screenshot: screenshotTranscribe,
    title: "Turn lectures into notes instantly",
    desc: "Record live with your mic or upload a file. EDAS converts audio into clean study notes using AI.",
  },
  {
    id: "roles",
    label: "Admin Tools",
    icon: Shield,
    screenshot: screenshotRoles,
    title: "Full control over your school",
    desc: "Manage students, teachers, schools, and roles from one powerful admin panel.",
  },
  {
    id: "chat",
    label: "Study Chat",
    icon: MessageCircle,
    screenshot: screenshotChat,
    title: "Stay connected with classmates",
    desc: "End-to-end encrypted chats and group rooms built right into the app — no third-party needed.",
  },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="screenshots" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            See it in action
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="text-gradient-hero">students</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature designed to make school life less chaotic.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {TABS.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = i === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Screenshot + caption */}
        <div className="relative">
          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-caption"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-center mb-6"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {TABS[active].title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                {TABS[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Screenshot frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-2xl"
          >
            {/* Fake traffic lights */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-muted-foreground font-medium">
                EDAS — {TABS[active].label}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={TABS[active].screenshot}
                alt={TABS[active].label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="w-full object-cover"
                draggable={false}
              />
            </AnimatePresence>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
