/** @format */

import "../styles/company.css";

function Company() {
  return (
    <div className="company">
      <div className="img-company">
        <p>TOP COMPANIES</p>
        <div className="img"></div>
      </div>

      <div className="content">
        <div>
          <p>Companies</p>
          <p>trusted by top companies</p>
        </div>
        <h2>
          Get noticed by leading <br /> companies
        </h2>
        <p>
          We collaborate with top organizations to bring you<br />
          the best job opportunities, connecting you with leading<br />
          employers who value your skills and expertise.
        </p>

        <ol>
            <li>Over 150,000 new job postings added every month</li>
            <li>Access job listings from 1,200+ leading companies</li>
            <li>Receive personalized job alerts for 100+ job categories.</li>
        </ol>
      </div>
    </div>
  );
}

export default Company;
