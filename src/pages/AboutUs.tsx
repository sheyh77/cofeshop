import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function AboutUs() {
  return (
    <section className="about">
      <Header />
      <div className="cantainer">
        <div className="about-wrap">
          <div className="about-banner">
            <div className="about-banner-text">
              <h1 className="about-banner-title">Biz haqimizda</h1>
              <p className="about-banner-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sit ipsam quidem nemo, eligendi veritatis sunt,
                reiciendis optio.
              </p>
              <Link to="/cofe">
                <button className="about-banner-btn">Menu</button>
              </Link>
            </div>
            <div className="about-banner-black"></div>
          </div>
          <div className="about-mission">
            <p className="about-mission-title">Maqsadimiz</p>
            <p className="about-mission-sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              amet deleniti nobis impedit eos necessitatibus placeat consequatur
              fugiat libero unde, doloribus exercitationem pariatur ratione ad
              vero fugit voluptates dolore? Fuga quaerat porro sint ratione
              cumque quis totam nam accusamus aut.
            </p>
          </div>
          <div className="about-team">
            <p className="about-team-title">Bizning jamoa</p>
            <div className="about-team-user">
                <div className="about-team-user-item">
                    <div className="about-team-user-img"></div>
                    <p className="about-user-team-item-name">Name</p>
                    <p className="about-user-team-item-special">Borista</p>
                </div>
                <div className="about-team-user-item">
                    <div className="about-team-user-img"></div>
                    <p className="about-user-team-item-name">Name</p>
                    <p className="about-user-team-item-special">Cafe manager</p>
                </div>
                <div className="about-team-user-item">
                    <div className="about-team-user-img"></div>
                    <p className="about-user-team-item-name">Name</p>
                    <p className="about-user-team-item-special">Chef</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
