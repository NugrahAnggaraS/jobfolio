/** @format */

import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="brand-footer">
        <div className="brand">
          <div className="logo"></div>
          <h2>JobFolio</h2>
        </div>

        <p>
          Your career companion. Access the
          <br />
          latest job listings, create a standout
          <br />
          profile, and land your dream job.
        </p>
      </div>

      <div className="help-support">
        <h2>Help & Support</h2>
        <ul>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Support Center</a>
          </li>
          <li>
            <a href="">User Guides</a>
          </li>
        </ul>
      </div>

      <div className="employers">
        <h2>Employers</h2>
        <ul>
            <li><a href="">Products</a></li>
            <li><a href="">Post a Job</a></li>
            <li><a href="">Employer Login</a></li>
            <li><a href="">Pricing Plans</a></li>
            <li><a href="">Success Stories</a></li>
        </ul>
      </div>

      <div className="job-seekers">
        <h2>Job Seekers</h2>
        <ul>
            <li><a href="">Search Jobs</a></li>
            <li><a href="">Browse Jobs</a></li>
            <li><a href="">Salary Tools</a></li>
            <li><a href="">Career Advice</a></li>
            <li><a href="">Company Profile</a></li>
        </ul>
      </div>

      <div className="helpful-resources">
        <h2>Helpful Resources</h2>
        <ul>
            <li><a href="">Work with us</a></li>
            <li><a href="">Terms of Use</a></li>
            <li><a href="">Privacy Center</a></li>
            <li><a href="">Security Center</a></li>
            <li><a href="">Accessibility Center</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
