import { useEffect, useState } from "react";

export default function Menu() {
  interface Post {
    id: number;
    title: string;
    image: string;
    description: string;
  }

  const [active, setActive] = useState<string>("cofe");
  const posts: Post[] = [];
  const [cofe, setCofe] = useState(posts);
  const [tea, setTea] = useState(posts);
  const [dessert, setDessert] = useState(posts);

  useEffect(() => {
    fetch("https://backendcofe-production.up.railway.app/api/products/coffee")
      .then((res) => res.json())
      .then((data) => setCofe(data))
      .catch((err) => console.log(err, "Xato"));
  }, []);

  useEffect(() => {
    fetch("https://backendcofe-production.up.railway.app/api/products/tea")
      .then((res) => res.json())
      .then((data) => setTea(data))
      .catch((err) => console.log(err, "Xato"));
  }, []);

  useEffect(() => {
    fetch("https://backendcofe-production.up.railway.app/api/products/dessert")
      .then((res) => res.json())
      .then((data) => setDessert(data))
      .catch((err) => console.log(err, "Xato"));
  }, []);

  return (
    <section className="menu">
      <div className="cantainer">
        <div className="menu-wrap">
          <p className="menu-title">Menu</p>
          <div className="menu-menu">
            <div
              className={`menu-menu-page ${active === "cofe" ? "active" : ""}`}
              onClick={() => setActive("cofe")}
            >
              <p className="menu-menu-title">Coffe</p>
            </div>
            <div
              className={`menu-menu-page ${active === "tea" ? "active" : ""}`}
              onClick={() => setActive("tea")}
            >
              <p className="menu-menu-title">Choy</p>
            </div>
            <div
              className={`menu-menu-page ${
                active === "desert" ? "active" : ""
              }`}
              onClick={() => setActive("desert")}
            >
              <p className="menu-menu-title">Shirinlik</p>
            </div>
          </div>
          <div className="menu-content">
            {active === "cofe" && (
              <div className="menu-cards cofe-content">
                {cofe.length === 0 ? (
                  <p>🕸️ Hozircha hech narsa yo‘q</p>
                ) : (
                  cofe.map((item) => (
                    <div className="menu-cards-item" key={item.id}>
                      <div className="menu-cards-item-img">
                        <img src={`https://backendcofe-production.up.railway.app${item.image}`} alt="cappunico" />
                      </div>
                      <div className="menu-cards-item-desc">
                        <p className="menu-cards-item-desc-title">
                          {item.title}
                        </p>
                        <p className="menu-cards-item-desc-sub">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {active === "tea" && (
              <div className="menu-cards cofe-content">
                {tea.length === 0 ? (
                  <p>🕸️ Hozircha hech narsa yo‘q</p>
                ) : (
                  tea.map((item) => (
                    <div className="menu-cards-item" key={item.id}>
                      <div className="menu-cards-item-img">
                        <img src={`https://backendcofe-production.up.railway.app${item.image}`} alt="cappunico" />
                      </div>
                      <div className="menu-cards-item-desc">
                        <p className="menu-cards-item-desc-title">
                          {item.title}
                        </p>
                        <p className="menu-cards-item-desc-sub">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {active === "desert" && (
              <div className="menu-cards cofe-content">
                {dessert.length === 0 ? (
                  <p>🕸️ Hozircha hech narsa yo‘q</p>
                ) : (
                  dessert.map((item) => (
                    <div className="menu-cards-item" key={item.id}>
                      <div className="menu-cards-item-img">
                        <img src={`https://backendcofe-production.up.railway.app${item.image}`} alt="cappunico" />
                      </div>
                      <div className="menu-cards-item-desc">
                        <p className="menu-cards-item-desc-title">
                          {item.title}
                        </p>
                        <p className="menu-cards-item-desc-sub">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
