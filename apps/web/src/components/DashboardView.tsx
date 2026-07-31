import React from "react";
import { featureFlags } from "@build-me/config";

// Example Component consuming feature flags
export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-4">
      {featureFlags.navbar && (
        <nav className="p-4 bg-slate-800">Navbar Component</nav>
      )}
      <main className="p-6">
        <h1>Welcome to Build Me</h1>
        {/* Conditional rendering based on feature flag status */}
        {featureFlags.bookingJourney ? (
          <section>Booking Journey Component Active</section>
        ) : (
          <p className="text-gray-400">
            Booking journey is currently under scheduled maintenance.
          </p>
        )}
      </main>

      {featureFlags.footer && (
        <footer className="p-4 bg-slate-800">Footer Component</footer>
      )}
    </div>
  );
};
