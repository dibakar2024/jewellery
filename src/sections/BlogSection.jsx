import React from "react";
import BlogCard from "../Components/BlogCard";
import blogPosts from "../js/blogPosts"; 

const BlogSection = () => {
  return (
    <section className="py-16 px-4 max-w-screen-2xl mx-auto">
      <div className="text-center mb-12">
        <h4 className="text-lg text-gray-500 uppercase tracking-wide">Our Blog</h4>
        <h2 className="text-5xl font-bold">From Our Journal</h2>
      </div>

      <div className="flex flex-wrap -mx-4">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
