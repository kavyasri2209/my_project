import React from "react";
import cat1 from "../Images/cat1.jpeg";
import cat2 from "../Images/cat2.jpg";
import cat3 from "../Images/cat3.jpg";
import cat4 from "../Images/cat4.jpg";
import cat5 from "../Images/cat5.jpg";
import cat6 from "../Images/cat6.jpg";
import cat7 from "../Images/cat7.jpg";
import cat8 from "../Images/cat8.jpg";
import cat9 from "../Images/cat9.jpg";
import cat10 from "../Images/cat10.jpg";

function Cards() {
  return (
    <div className="container my-4">
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 g-4">
        
        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat1} className="card-img-top" alt="cat1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat2} className="card-img-top" alt="cat2" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat3} className="card-img-top" alt="cat3" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat4} className="card-img-top" alt="cat4" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat5} className="card-img-top" alt="cat5" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat6} className="card-img-top" alt="cat6" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat7} className="card-img-top" alt="cat7" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat8} className="card-img-top" alt="cat8" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat9} className="card-img-top" alt="cat9" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img src={cat10} className="card-img-top" alt="cat10" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cards;
