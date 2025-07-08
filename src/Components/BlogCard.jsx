import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col w-full md:w-1/3 p-4">
      <div className="rounded overflow-hidden shadow">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t" />
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-2">
            {post.date} | By {post.author}
          </div>
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-base text-gray-600 mb-4">{post.excerpt}</p>
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center text-base font-semibold text-black hover:text-orange-400"
          >
            Read More <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
