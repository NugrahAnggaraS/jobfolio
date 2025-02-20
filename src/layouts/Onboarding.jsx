/** @format */

import Header from "../components/Header";
import Rating from "../components/Rating";
import "../styles/onboarding.css";
import Categories from "../components/Category";
import Footer from "./Footer";
import Profile from "./Profile";
import Company from "./Company";
import Contries from "./Contries";

function Onboarding() {
  const feedbacks = [
    { rate: 5, feed: "“Superb job matching service”" },
    { rate: 5, feed: "“Found my perfect role fast”" },
    { rate: 5, feed: "“Helped me find work quickly”" },
  ];

  return (
    <div>
      <Header />
      <main>
        <article className="home">
          <div className="content">
            <div className="ratings">
              {feedbacks.map((feedback) => {
                return <Rating rate={feedback.rate} feed={feedback.feed} />;
              })}
            </div>

            <h1>
              <mark>Explore new</mark> job vacancies <br />
              all over the world
            </h1>
            <p>
              Our platform features more than 1.2 million job vacancies
              worldwide, connecting <br />you with employers who value your skills and
              experience.
            </p>
          </div>

          <div className="search">
            <div className="search-bar">
              <input type="text" name="search" placeholder="Search" />
              <select name="type-company" id="type-company">
                <option value={"Bumn"}>BUMN</option>
                <option value={"Bumn"}>PT</option>
                <option value={"Bumn"}>Koperasi</option>
                <option value={"Bumn"}>CV</option>
              </select>
            </div>
            <button>Search</button>
          </div>
          <Categories/>
        </article>

        <Contries/>
        <Profile/>
        <Company/>
        <Footer/>
      </main>
    </div>
  );
}

export default Onboarding;
