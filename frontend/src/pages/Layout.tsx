import { Outlet } from "react-router-dom";
import { MainNav } from "../components/dashboard/main-nav";
import { ThemeToggle } from "../components/ThemeToggle";
import TeamSwitcher from "../components/dashboard/team-switcher";
import { UserNav } from "../components/dashboard/user-nav";
import { Search } from "../components/dashboard/search";
import { siteConfig } from "../config/site";

const Layout = () => {
  return (
    <>
      <div className=" flex-col md:flex ">
        <div className="border-b">
          <div className="flex h-16 items-center px-4 z-[100] bg-background inset-0 border-b-2 fixed ">
            <MainNav items={siteConfig.mainNav} />
            <div className="ml-auto flex items-center space-x-2">
              <Search />
              <UserNav />
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
