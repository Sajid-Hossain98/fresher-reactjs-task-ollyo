import { Link, Outlet } from "react-router-dom";

import Header from "../components/Header";

const Layout = () => {
  return (
    <main className="h-screen bg-slate-400 grid place-items-center overflow-hidden">
      <Link to="/">
        <img
          className="h-8 md:h-16 w-full"
          src="./ollyo-logo-landscape.png"
          alt="Ollyo"
        />
      </Link>
      <div className="h-[85vh] md:h-[80vh] w-[95vw] md:w-[85vw] lg:w-[70vw] bg-gray-100 rounded-lg overflow-y-auto scrollbar-w-2 scrollbar-thumb scrollbar-track">
        <Header />

        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
