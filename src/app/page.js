const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-12 tracking-wide">
        Explore Our Latest Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {posts.slice(0, 9).map((post) => (
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
    </div>
  );
};

export default Home;
