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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-foreground hidden sm:inline">Legal Literacy AI</span>
        </div>
      </div>
      <nav className="flex items-center gap-6">
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
