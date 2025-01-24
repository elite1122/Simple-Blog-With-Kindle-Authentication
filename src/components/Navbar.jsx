"use client";

import Link from "next/link";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Navbar() {
    const { isAuthenticated, login, logout } = useKindeAuth();

    return (
        <nav className="flex justify-between items-center  px-5 py-6 sticky top-0 z-50">
            <div className="text-2xl font-bold">My Blog</div>
            <div className="flex gap-4">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <Link href="/blogs" className="hover:underline">
                    Blogs
                </Link>
                <Link href="/profile" className="hover:underline">
                    Profile
                </Link>
            </div>
            <div>
                {isAuthenticated ? (
                    <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                        Logout
                    </button>
                ) : (
                    <button onClick={login} className="bg-green-500 px-3 py-1 rounded">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}
