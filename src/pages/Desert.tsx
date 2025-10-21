import { useEffect, useState } from "react";
import Header from "../layout/Header";

export default function Desert() {
  interface Post {
    id: number;
    title: string;
    image: string;
    description: string;
    price: string;
  }

  const posts: Post[] = [];
  const [cofe, setCofe] = useState(posts);

  useEffect(() => {
    fetch("https://34df94e0332d52dc.mokky.dev/desert")
      .then((res) => res.json())
      .then((data) => setCofe(data))
      .catch((err) => console.log(err, "Xato"));
  }, []);
  return (
    <section className="cofe">
      <Header />
      <div className="cantainer">
        <div className="cofe-wrap">
          <div className="cofe-title">
            <p>Dessert</p>
          </div>
          <div className="cofe-card">
            {cofe.length === 0 ? (
              <p>Hozircha hech narsa yoq</p>
            ) : (
              cofe.map((item) => (
                <div className="cofe-card-item" key={item.id}>
                  <div className="cofe-card-item-img">
                    <img src={item.image} alt="cofe-image" />
                    <button className="cofe-card-item-btn">+</button>
                  </div>
                  <div className="cofe-card-item-desc">
                    <div className="cofe-card-item-desc-title">{item.title}</div>
                    <div className="cofe-card-item-desc-price">${item.price}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}