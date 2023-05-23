import React, { Fragment } from 'react';
import Layout from '../layout';
import BlogCard from "./Blogcard";

const Blog = () => {
    return (
       <Fragment>
        <Layout>
            <div className='blog-wrapper blog layout '>
            <div className="row">
          
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
               <BlogCard/>
              </div>
              <div className="col-6 mb-3">
              <BlogCard/>
              </div>
              <div className="col-6 mb-3">
              <BlogCard/>
              </div>
              <div className="col-6 mb-3">
              <BlogCard/>
              </div>
            </div>
          </div>
        </div>

            </div>
        </Layout>
       </Fragment>
    );
};

export default Blog;