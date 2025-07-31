import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(data);
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 lg:px-40 bg-white text-[#2f2f2f]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#7f4a18] mb-8">
        Blog
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center">No blog posts yet.</p>
      ) : (
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-[#7f4a18]">
                {blog.title}
              </h2>
              <p className="text-sm mt-2">{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
