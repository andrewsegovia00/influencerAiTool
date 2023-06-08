import { ChartIcon, SparklesIcon, BookOpenIcon, HashtagIcon, BriefcaseIcon } from "../Icons";
import { SidebarItem } from "./";

const Sidebar = () => {

  // TODO: 
  // - The sidebar item's <ul> and <li> share css with the navbar, needs to separate
  // - Add a container sticky to bottom of sidebar for (User Icon, Name and settings)

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <SidebarItem icon={<ChartIcon/>} href="#dashboard" text="Dashboard" />
          <SidebarItem icon={<HashtagIcon/>} href="#platforms" text="My Platforms" />
          <SidebarItem icon={<SparklesIcon/>} href="#insights" text="Insights" />
          <SidebarItem icon={<BriefcaseIcon/>} href="#partnerships" text="Partnerships" />
          <SidebarItem icon={<BookOpenIcon/>} href="#resources" text="Resources" />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
