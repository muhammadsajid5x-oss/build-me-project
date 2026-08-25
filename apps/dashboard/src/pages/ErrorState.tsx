export default function ErrorState() {
  return (
    <section
      role="alert"
      className="rounded-lg border border-red-200 bg-red-50 p-6"
    >
      <h1 className="text-xl font-semibold text-red-800">
        Something went wrong
      </h1>
      <p className="mt-2 text-red-700">
        We could not load this page. Please try again.
      </p>
    </section>
  );
}
