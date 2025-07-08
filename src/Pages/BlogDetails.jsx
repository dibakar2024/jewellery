import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "../js/blogPosts"; 

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((item) => item.id === Number(id)); // ✅ Ensure correct type

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="text-pink-500 hover:underline"
        >
          Go Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <div className="text-sm text-gray-500 mb-2">
        {post.date} | By {post.author}
      </div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 whitespace-pre-line">{post.content}</p>
    </div>
  );
};

export default BlogDetails;
