import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="flex justify-between items-center px-5 py-6 sticky top-0 z-50">
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
                {user ? (
                    <a
                        href="/api/auth/logout"
                        className="bg-black px-3 py-1 rounded-lg text-white"
                    >
                        Logout
                    </a>
                ) : (
                    <a
                        href="/api/auth/login"
                        className="bg-black px-3 py-1 rounded-lg text-white"
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
}
