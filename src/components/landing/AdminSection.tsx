import { motion } from "framer-motion";
import {
  Users,
  School,
  Megaphone,
  ClipboardCheck,
  BarChart3,
  BookOpenCheck,
  ToggleRight,
  UserCircle,
  Bell,
  Palette,
  Lock,
} from "lucide-react";

const adminFeatures = [
  { icon: Users, title: "Role Management (RBAC)", desc: "4 role tiers with 15+ permission flags and visual role badges." },
  { icon: School, title: "School Management", desc: "Multi-school support with profiles, subscriptions, and feature toggles." },
  { icon: Megaphone, title: "Announcements", desc: "School-wide and targeted announcements with priority levels." },
  { icon: ClipboardCheck, title: "Attendance Tracking", desc: "Mark attendance by class with Present, Absent, Late, Excused statuses." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Activity overview, student engagement metrics, and attendance trends." },
  { icon: BookOpenCheck, title: "Class Management", desc: "Create classes, manage subjects, student enrollment, and roll numbers." },
];

const uxFeatures = [
  { icon: UserCircle, title: "User Profiles", desc: "Customizable display names, photos, activity feeds, and follow system." },
  { icon: Bell, title: "Notifications", desc: "Real-time and browser push notifications with preference controls." },
  { icon: Palette, title: "Theming", desc: "Light, Dark, and Pastel themes with a consistent design system." },
  { icon: Lock, title: "Auth & Security", desc: "Email-based auth, password reset, and Row-Level Security on all tables." },
  { icon: ToggleRight, title: "Feature Toggles", desc: "Enable/disable features per school or platform-wide." },
];

const AdminSection = () => {
  return (
    <section id="admin" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Administration
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mt-3">
            Powerful Admin Tools
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive administration features for schools of every size.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {adminFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-card border p-6 feature-card-hover"
            >
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold font-display text-card-foreground text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* UX Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            User Experience & Security
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {uxFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-card border p-6 feature-card-hover"
            >
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold font-display text-card-foreground text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
