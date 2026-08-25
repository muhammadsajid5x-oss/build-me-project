import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import DashboardHome from "../pages/DashboardHome";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { DASHBOARD_ROUTES } from "./routes";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path={DASHBOARD_ROUTES.ROOT}
            element={<DashboardHome />}
          />
          <Route
            path={DASHBOARD_ROUTES.HOME}
            element={<Home />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
