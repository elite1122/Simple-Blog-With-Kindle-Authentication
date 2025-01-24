"use client";
import { useState, useEffect } from "react";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    // Get current posts for the page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="py-12 bg-gray-100 min-h-screen">
            <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-12 tracking-wide">
                Explore Our All Blog
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12">
                {currentPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                <strong>Description:</strong> {post.body.substring(0, 100)}...
                            </p>
                            <div className="mt-6">
                                <a
                                    href={`/blog/${post.id}`}
                                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
                <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => paginate(index + 1)}
                                className={`px-4 py-2 text-sm md:text-base rounded-md flex flex-wrap ${
                                    currentPage === index + 1
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                                } transition`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Blogs;
