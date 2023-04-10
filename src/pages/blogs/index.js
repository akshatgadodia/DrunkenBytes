import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import BlogsPage from '@/app/components/templates/blogsPage/BlogsPage';

const Blogs = props => {
  return (
    <DefaultLayout>
      <BlogsPage/>
    </DefaultLayout>
  );
};

export default Blogs;