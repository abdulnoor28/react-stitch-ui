import { Upload, Zap, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: 1,
    title: "Input your document",
    description: "Upload a PDF, image, or simply paste the complex legal text you want us to simplify and analyze.",
    color: "text-primary",
    bg: "bg-feature-blue",
  },
  {
    icon: Zap,
    number: 2,
    title: "AI Refactoring",
    description: "Our specialized legal AI scans the text, identifies hidden risks, and translates everything into plain, everyday English.",
    color: "text-amber-500",
    bg: "bg-feature-amber",
  },
  {
    icon: CheckCircle,
    number: 3,
    title: "Act with Confidence",
    description: "Receive a clear summary and a checklist of actionable next steps. Sign, negotiate, or decline with total peace of mind.",
    color: "text-emerald-500",
    bg: "bg-feature-green",
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          How It Works — Step-by-Step Guide
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Demystifying legal jargon has never been easier. Follow our three-step process to gain complete clarity on your documents.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
        {steps.map((s) => (
          <div key={s.number} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-5`}>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">
              {s.number}. {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
          Start your analysis
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
