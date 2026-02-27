const Footer = () => (
  <footer className="border-t border-border bg-card px-6 py-6 mt-auto">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold text-primary">Lexi</span>
        <span className="text-sm font-bold text-foreground">Chat</span>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Support</a>
      </div>
      <p className="text-xs text-muted-foreground sm:ml-auto">
        © 2024 LexiChat. Empowering citizens through knowledge.
      </p>
    </div>
  </footer>
);

export default Footer;
