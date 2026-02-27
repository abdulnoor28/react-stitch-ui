import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import Footer from "./Footer";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopNav onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
