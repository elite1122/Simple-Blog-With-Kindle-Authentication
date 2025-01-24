
import { getUserSession } from '../../lib/kindeAuth';

export default async function Profile() {
    const user = await getUserSession();

    if (!user) {
        return <div className="text-center text-xl font-semibold mt-10">Please log in to view your profile.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">
                Welcome To Your <span className="">Profile</span>
            </h1>
            <div className="border rounded-lg shadow-lg p-6 flex items-center gap-6 bg-white">
                <div>
                    <p className="text-lg font-semibold">
                        Username: <span className="font-normal">{user.given_name} {user.family_name}</span>
                    </p>
                    <p className="text-lg font-semibold">
                        Email: <span className="font-normal">{user.email}</span>
                    </p>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Edit Profile
                </button>
            </div>
        </div>
    );
}
