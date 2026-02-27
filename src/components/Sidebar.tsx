import { Plus, History, Search, Trash2, PanelLeftClose, PanelLeft, Pencil, Trash } from "lucide-react";
import { useState } from "react";

const initialQueries = [
  { id: 1, title: "Rental Agreement Analysis", date: "OCT 12, 2024" },
  { id: 2, title: "Workplace Rights FAQ", date: "OCT 10, 2024" },
  { id: 3, title: "Intellectual Property Clause", date: "OCT 08, 2024" },
  { id: 4, title: "Privacy Policy GDPR", date: "OCT 05, 2024" },
  { id: 5, title: "Service Level Agreement", date: "SEP 30, 2024" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [queries, setQueries] = useState(initialQueries);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleDelete = (id: number) => {
    setQueries((prev) => prev.filter((q) => q.id !== id));
  };

  const handleEditStart = (id: number, title: string) => {
    setEditingId(id);
    setEditValue(title);
  };

  const handleEditSave = (id: number) => {
    setQueries((prev) =>
      prev.map((q) => (q.id === id ? { ...q, title: editValue } : q))
    );
    setEditingId(null);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Collapsed toggle for desktop */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="hidden lg:flex fixed top-3 left-3 z-50 p-2 rounded-md bg-card border border-border hover:bg-muted text-muted-foreground shadow-sm"
        >
          <PanelLeft className="w-4 h-4" />
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-60 bg-card border-r border-border flex flex-col transition-transform duration-200 lg:relative ${
          isOpen ? "lg:translate-x-0 translate-x-0" : "-translate-x-full lg:-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-primary tracking-tight">Lexi</span>
            <span className="text-lg font-bold text-foreground tracking-tight">Chat</span>
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
            {queries.map((q) => (
              <div
                key={q.id}
                className="group w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
              >
                {editingId === q.id ? (
                  <input
                    autoFocus
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleEditSave(q.id)}
                    onKeyDown={(e) => e.key === "Enter" && handleEditSave(q.id)}
                    className="w-full text-sm bg-background border border-border rounded px-2 py-1 outline-none focus:ring-1 focus:ring-ring text-foreground"
                  />
                ) : (
                  <div className="flex items-start justify-between gap-1">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-foreground truncate">{q.title}</p>
                      <p className="text-[11px] text-primary mt-0.5">{q.date}</p>
                    </div>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5">
                      <button
                        onClick={() => handleEditStart(q.id, q.title)}
                        className="p-1 rounded hover:bg-accent text-muted-foreground"
                      >
                        <Pencil className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleDelete(q.id)}
                        className="p-1 rounded hover:bg-destructive/10 text-destructive"
                      >
                        <Trash className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3">
          <button
            onClick={() => setQueries([])}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted rounded-lg border border-border transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear History
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
