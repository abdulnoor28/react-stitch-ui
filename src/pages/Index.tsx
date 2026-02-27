import { Search, Home, Briefcase, Sparkles, FileText, Zap, Lock } from "lucide-react";

const suggestions = [
  { icon: Home, label: "Explain my rental agreement" },
  { icon: Briefcase, label: "What are my workplace rights?" },
  { icon: Sparkles, label: "Decode this legal jargon" },
];

const features = [
  {
    icon: FileText,
    title: "Plain English",
    description: "We strip away the legalese to give you clear, understandable summaries of any document.",
    bg: "bg-feature-blue",
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Upload contracts, notices, or terms of service and get key insights in under 30 seconds.",
    bg: "bg-feature-amber",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your data is yours. We use bank-grade encryption and never store your sensitive documents.",
    bg: "bg-feature-green",
  },
];

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          Hi there, what legal right can I help you understand today?
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          We translate complex legal jargon into simple, actionable language.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative max-w-2xl mx-auto mb-6">
        <div className="flex items-center bg-card border border-border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-ring transition-shadow">
          <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Paste a legal clause or ask about your rights..."
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <button className="ml-3 bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-full hover:bg-primary/90 transition-colors shrink-0">
            Analyze
          </button>
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {suggestions.map((s) => (
          <button
            key={s.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:bg-muted transition-colors"
          >
            <s.icon className="w-4 h-4" />
            {s.label}
          </button>
        ))}
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
