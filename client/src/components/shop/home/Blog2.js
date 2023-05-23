import React from 'react';
import Blogcard from '../dashboardUser/Blogcard';

const Blog2 = () => {
    return (
        <div className="py-5 ">
        <div className="row blog2">
          <div className="row-12 ">
            <h3 className="">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row blog2">
          <div className="col-3">
           <Blogcard/>
          </div>
          <div className="col-3">
          <Blogcard/>
          </div>
          <div className="col-3">
          <Blogcard/>
          </div>
          <div className="col-3">
          <Blogcard/>
          </div>
          
        </div>
      </div>
    );
};

export default Blog2;