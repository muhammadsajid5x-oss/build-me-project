export default function Loading() {
  return (
    <section
      role="status"
      aria-live="polite"
      className="flex min-h-64 items-center justify-center"
    >
      <p className="text-gray-600">
        Loading...
      </p>
    </section>
  );
}
