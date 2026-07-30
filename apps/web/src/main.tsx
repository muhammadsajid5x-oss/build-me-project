import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
    <h1 className="text-3xl font-bold">Build Me Web Application</h1>
  </main>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
