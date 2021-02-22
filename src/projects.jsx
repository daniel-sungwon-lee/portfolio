import React, { useState } from 'react';
import FlipCard from 'react-png-flipcard';

export default function Projects(props) {
  const [flip, setFlip] =useState(false)
  const [flip2, setFlip2] = useState(false)

  return (
    <div className="container projects" id="projects">
      <div>
        <h1 className="text-center">Projects</h1>
        <div className="cards-div d-flex justify-content-around align-items-center mt-5">
          <FlipCard
            front ={
              <div className="card ppal-card" onClick={()=>setFlip(true)}>
                <img src="images/picon.png" className="card-img-top" alt="PPAL logo" />
                <div className="card-body">
                  <h4 className="card-title">PPAL</h4>
                  <p className="card-text h5">A web application that helps plan workout routines</p>
                  <div className="d-flex justify-content-between h5 mt-3 mb-0 link-logos">
                    <a href="https://ppalll.herokuapp.com/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                    <a href="https://github.com/daniel-sungwon-lee/PPAL" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.youtube.com/watch?v=nHrbjpGZWAQ&t=1s&ab_channel=Daniel" className="text-decoration-none" style={{ color: "#FF0000" }} target="_blank"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            }
            back ={
              <div className="card ppal-card" onClick={()=>setFlip(false)}>
                <div className="card-body">
                  <h4 className="card-title text-center">Technologies Used:</h4>
                  <div className="h5 card-text d-flex justify-content-around flex-wrap">
                    <div className="logo-div"><i className="fab fa-react"></i></div>
                    <div className="logo-div"><i className="fab fa-js-square"></i></div>
                    <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                    <div className="logo-div"><i className="fab fa-npm"></i></div>
                    <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                    <div className="logo-div"><i className="fab fa-html5"></i></div>
                    <div className="logo-div"><i className="fab fa-node"></i></div>
                    <div className="logo-div"><img src="icons/express.svg" width="54"/></div>
                    <div className="logo-div"><img src="icons/postgresql.svg" width="49" /></div>
                    <div className="logo-div"><img src="icons/webpack.svg" width="49" /></div>
                    <div className="logo-div"><img src="icons/babel.svg" width="54" /></div>
                    <div className="logo-div"><img src="icons/heroku.svg" width="54" /></div>
                  </div>
                </div>
              </div>
            }
            height={507}
            manual
            flip={flip}
          />
          <FlipCard
            front={
              <div className="card rando-card" onClick={() => setFlip2(true)}>
                <img src="images/rando.png" className="card-img-top rando" alt="RANDO logo" />
                <div className="card-body">
                  <h4 className="card-title">RANDO</h4>
                  <p className="card-text h5">A web application that generates random advices, quotes, jokes, activities, and recipes</p>
                  <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                    <a href="https://daniel-sungwon-lee.github.io/ajax-project/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                    <a href="https://github.com/daniel-sungwon-lee/ajax-project" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            }
            back={
              <div className="card rando-card" onClick={() => setFlip2(false)}>
                <div className="card-body">
                  <h4 className="card-title text-center">Technologies Used:</h4>
                  <div className="h5 card-text d-flex justify-content-around flex-wrap">
                    <div className="logo-div"><i className="fab fa-js-square"></i></div>
                    <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                    <div className="logo-div"><i className="fab fa-html5"></i></div>
                  </div>
                </div>
              </div>
            }
            height={507}
            manual
            flip={flip2}
          />
        </div>
      </div>
    </div>
  )
}
