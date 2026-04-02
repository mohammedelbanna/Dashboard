import { Link, useLocation } from "react-router-dom";
import type { ComponentType } from "react";
import { FiHome, FiUser, FiPaperclip, FiLink, FiDollarSign } from "react-icons/fi";

const RouteSelect = () => {
  const location = useLocation();

  const navItems: Array<{ path: string; icon: ComponentType<{ size?: number; className?: string }>; title: string }> = [
    { path: "/", icon: FiHome, title: "Home" },
    { path: "/team", icon: FiUser, title: "Team" },
    { path: "/invoices", icon: FiPaperclip, title: "Invoices" },
    { path: "/integration", icon: FiLink, title: "Integration" },
    { path: "/pricing", icon: FiDollarSign, title: "Pricing" },
  ];

  return (
    <div className="rounded-3xl bg-stone-100 p-4 shadow-sm">
      <div className="space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            Icon={item.icon}
            title={item.title}
            active={item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

type NavItemProps = {
  to: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  active: boolean;
};

const NavItem = ({ to, Icon, title, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`${
        active
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 text-stone-500"
      } flex items-center gap-2 w-full px-3 py-2 rounded transition-colors`}
    >
      <Icon size={18} className={active ? "text-violet-500" : "text-stone-500"} />
      <span>{title}</span>
    </Link>
  );
};

export default RouteSelect;
