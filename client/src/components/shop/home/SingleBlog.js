import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import blog from "../../../images/blog-1.jpg"
const SingleBlog = () => {
    return (
        <div class1="blog-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <AiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img src={blog} className="img-fluid w-100 blog-img my-4" alt="blog" />
              <p>
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about luxury –
                it’s not something people need, but it’s what they want. It
                really pulls at their heart. I have a fantastic relationship
                with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                vestibulum pretium commodo inceptos cum condimentum placerat
                diam venenatis blandit hac eget dis lacus a parturient a
                accumsan nisl ante vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBlog;