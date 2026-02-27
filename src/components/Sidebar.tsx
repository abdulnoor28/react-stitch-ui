import { Plus, History, Search, Trash2, Settings, PanelLeftClose } from "lucide-react";
import { useState } from "react";

const recentQueries = [
  { title: "Rental Agreement Analysis", date: "OCT 12, 2024" },
  { title: "Workplace Rights FAQ", date: "OCT 10, 2024" },
  { title: "Intellectual Property Clause", date: "OCT 08, 2024" },
  { title: "Privacy Policy GDPR", date: "OCT 05, 2024" },
  { title: "Service Level Agreement", date: "SEP 30, 2024" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-60 bg-card border-r border-border flex flex-col transition-transform duration-200 lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-semibold text-foreground">Legal AI</span>
          </div>
          <button onClick={onToggle} className="p-1 rounded-md hover:bg-muted text-muted-foreground">
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* New Chat */}
        <div className="px-3 mb-4">
          <button className="w-full flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Nav items */}
        <div className="px-3 space-y-1">
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
            <History className="w-4 h-4" />
            History
          </button>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Recent queries */}
        <div className="px-3 mt-6 flex-1 overflow-y-auto">
          <p className="text-[11px] font-semibold text-muted-foreground tracking-wider uppercase mb-3 px-3">
            Recent Queries
          </p>
          <div className="space-y-0.5">
            {recentQueries.map((q) => (
              <button
                key={q.title}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
              >
                <p className="text-sm text-foreground truncate">{q.title}</p>
                <p className="text-[11px] text-primary mt-0.5">{q.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted rounded-lg border border-border transition-colors">
            <Trash2 className="w-4 h-4" />
            Clear History
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
