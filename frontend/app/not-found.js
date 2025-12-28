// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          It might have been moved or deleted.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
