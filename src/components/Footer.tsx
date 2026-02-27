const Footer = () => (
  <footer className="border-t border-border bg-card px-6 py-6 mt-auto">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="text-sm font-medium text-foreground">Legal Literacy AI</span>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Support</a>
      </div>
      <p className="text-xs text-muted-foreground sm:ml-auto">
        © 2024 Legal Literacy AI. Empowering citizens through knowledge.
      </p>
    </div>
  </footer>
);

export default Footer;
