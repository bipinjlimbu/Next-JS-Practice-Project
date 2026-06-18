import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
                <h1 className="text-6xl font-bold text-red-500">404</h1>

                <h2 className="text-2xl font-semibold mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mt-2">
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}