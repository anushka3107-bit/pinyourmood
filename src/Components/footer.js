import React from "react";
import "./footer.css";
// import fb from 'react-icons/faFacebookF'

const footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employers</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individuals">
              <p>Individuals</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Resoureces</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Team Members</h4>
            <a href="/employer">
              <p>Anushka Bhardwaj</p>
            </a>
            <a href="/employer">
              <p>Nishant Chauhan</p>
            </a>
            <a href="/employer">
              <p>Himanshu Bhatt</p>
            </a>
            <a href="/employer">
              <p>Unnati Bhole</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
        </div>

        <hr />

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@Copyright {new Date().getFullYear()} . All rights reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p> Terms & Conditions </p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p> Privacy </p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p> Security </p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p> Cookie Declaration </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
