import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="font-display font-bold text-foreground">EDAS</span>
          <span className="text-sm text-muted-foreground ml-2">— Education Assist</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} EDAS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
