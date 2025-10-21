import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="cantainer">
        <div className="banner-wrap">
            <p className="banner-title">Coffe shopga hush <br /> kelibsiz</p>
            <Link to="/cofe">
              <button className="banner-menu-btn">Menu</button>
            </Link>
        </div>
      </div>
    </section>
  );
}
