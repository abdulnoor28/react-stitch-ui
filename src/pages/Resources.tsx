import { Search, Grid3X3, Home, Briefcase, Users, FileText, Scale, Download, ChevronRight } from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: Grid3X3, label: "All" },
  { icon: Home, label: "Housing" },
  { icon: Briefcase, label: "Workplace" },
  { icon: Users, label: "Family" },
  { icon: FileText, label: "Contracts" },
  { icon: Scale, label: "Civic Rights" },
];

const resources = [
  {
    icon: Home,
    iconColor: "text-primary",
    badge: "HOUSING",
    badgeColor: "bg-feature-blue text-primary",
    title: "Tenant Rights 101",
    description: "Everything you need to know about leases, security deposits, and evictions.",
  },
  {
    icon: Briefcase,
    iconColor: "text-amber-600",
    badge: "WORKPLACE",
    badgeColor: "bg-feature-amber text-amber-700",
    title: "Employment Basics",
    description: "Understanding your rights regarding wages, overtime, and termination.",
  },
  {
    icon: Users,
    iconColor: "text-rose-500",
    badge: "FAMILY",
    badgeColor: "bg-feature-red text-rose-600",
    title: "Healthcare Proxy",
    description: "A guide to designating a medical decision-maker for your future.",
  },
];

const faqs = [
  "Are these templates legally binding?",
  "How do I customize the templates?",
  "Can I suggest a new resource?",
  "Is my data secure when downloading?",
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Resource Library</h1>
      <p className="text-muted-foreground mb-8 max-w-xl">
        Access high-quality legal templates and comprehensive guides curated by experts.
      </p>

      {/* Search */}
      <div className="flex items-center bg-card border border-border rounded-xl px-4 py-3 mb-6 shadow-sm">
        <Search className="w-5 h-5 text-muted-foreground mr-3" />
        <input
          type="text"
          placeholder="Search the resource library for templates, guides, or legal documents..."
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c.label}
            onClick={() => setActiveCategory(c.label)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === c.label
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            <c.icon className="w-4 h-4" />
            {c.label}
          </button>
        ))}
      </div>

      {/* Resource cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
        {resources.map((r) => (
          <div key={r.title} className="bg-card border border-border rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <r.icon className={`w-5 h-5 ${r.iconColor}`} />
              </div>
              <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${r.badgeColor}`}>
                {r.badge}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{r.description}</p>
            <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 transition-colors mb-2">
              <Download className="w-4 h-4" />
              Download Template
            </button>
            <p className="text-xs text-muted-foreground text-center font-medium tracking-wide uppercase">Preview</p>
          </div>
        ))}
      </div>

      {/* Quick Help / FAQ */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-1">Quick Help</h2>
        <p className="text-sm text-muted-foreground">Common questions about our legal resources.</p>
      </div>

      <div className="space-y-3 max-w-2xl mx-auto">
        {faqs.map((faq) => (
          <button
            key={faq}
            className="w-full flex items-center justify-between bg-card border border-border rounded-xl px-5 py-4 text-sm text-foreground hover:bg-muted transition-colors"
          >
            {faq}
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resources;
