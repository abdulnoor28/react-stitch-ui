import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

interface TopNavProps {
  onMenuClick: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      location.pathname === path
        ? "text-foreground border-b-2 border-primary pb-0.5"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Link to="/" className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-primary tracking-tight">Lexi</span>
          <span className="text-xl font-bold text-foreground tracking-tight">Chat</span>
        </Link>
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/how-it-works" className={linkClass("/how-it-works")}>
          How it works
        </Link>
        <Link to="/resources" className={linkClass("/resources")}>
          Resources
        </Link>
      </nav>
    </header>
  );
};

export default TopNav;
