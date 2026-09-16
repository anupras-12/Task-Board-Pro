import { Link } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
  { label: "Profile", to: "/profile" },
  { label: "Tasks", to: "/tasks" },
];

const Sidebar = ({ items = menuItems }) => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">My Dashboard</h1>

      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="hover:bg-gray-700 p-2 rounded transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;