export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with <span className="text-blue-400">Next.js</span> and{" "}
          <span className="text-teal-400">Tailwind CSS</span>
        </p>
      </footer>
    );
  }
  