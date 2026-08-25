import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        404
      </h1>
      <p className="mt-2 text-gray-600">
        Page not found.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block font-semibold underline"
      >
        Go back to Dashboard
      </Link>
    </section>
  );
}
