import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1
      className="heading"
      // contentEditable="true" spellCheck="false"
    >
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>

    <div className="gallery">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Golden_sebright_cockerel.jpg/1200px-Golden_sebright_cockerel.jpg"
        alt="hen feathering"
      />
      <img
        src="https://www.kalmbachfeeds.com/cdn/shop/articles/rooster_and_chicken.jpg?v=1720940730"
        alt="rooster and rooster_and_chicken"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Norwegian_hen.jpg/1200px-Norwegian_hen.jpg"
        alt="Norwegian hen"
      />
    </div>

    <div className="picsum-img">
      <img src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
