import { Link, Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl gap-6 px-6 py-4"
        >
          <Link
            to="/"
            className="font-semibold text-gray-900"
          >
            Dashboard
          </Link>
          <Link
            to="/home"
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
