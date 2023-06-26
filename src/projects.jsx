import React, { useState } from 'react';
import FlipCard from 'react-png-flipcard';
import Fade from 'react-reveal/Fade';

export default function Projects(props) {
  const [flip, setFlip] =useState(false)
  const [flip2, setFlip2] = useState(false)
  const [flip3, setFlip3] = useState(false)
  const [flip4, setFlip4] = useState(false)
  const [flip5, setFlip5] = useState(false)
  const [flip6, setFlip6] = useState(false)
  const [flip7, setFlip7] = useState(false)
  const [flip8, setFlip8] = useState(false)
  const [flip9, setFlip9] = useState(false)
  const [flip10, setFlip10] = useState(false)
  const [flip11, setFlip11] = useState(false)

  return (
    <div className="container projects" id="projects">
      <div>
        <h1 className="text-center">Projects</h1>
        <div className="cards-div d-flex flex-wrap justify-content-around align-items-center mt-5">
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip10(true)}>
                    <img src="icons-colored/fintrack.svg" className="card-img-top" alt="FinTrack logo" />
                    <div className="card-body">
                      <h4 className="card-title">FinTrack</h4>
                      <p className="card-text h5">The finance tracking app <span className='invisible'>budgeting? feature</span></p>
                      <div className="d-flex justify-content-between h5 mt-3 mb-0 link-logos">
                        <a href="https://fintrack-beta.vercel.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/fintrack" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://youtu.be/pIRV4APBsnI" className="text-decoration-none" style={{ color: "#FF0000" }} target="_blank"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip10(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div d-flex justify-content-center align-items-center"><img src="images/next.js.png" width="75" /></div>
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="images/mui-logo.png" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-node"></i></div>
                        <div className="logo-div"><img src="icons/postgresql.svg" width="49" /></div>
                        <div className="logo-div"><img src="icons/vercel-logo.svg" width="54" /></div>
                        <div className="logo-div"><img src="icons/railway.svg" width="54" /></div>
                        <div className="logo-div"><img src="icons/plaid.svg" width="75" /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip10}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip11(true)}>
                    <img src="images/goals.png" className="card-img-top" alt="Goals logo" />
                    <div className="card-body">
                      <h4 className="card-title">Goals</h4>
                      <p className="card-text h5">Helps track your goals and organize your plans</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://goalsss.netlify.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/goals" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip11(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div d-flex justify-content-center align-items-center"><img src="images/next.js.png" width="75" /></div>
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="images/mui-logo.png" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-node"></i></div>
                        <div className="logo-div"><img src="icons-colored/netlify-logo.svg" width="54" style={{ position: "relative", bottom: "8px" }} /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip11}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip6(true)}>
                    <img src="icons-colored/lightblb.svg" className="card-img-top" alt="LightBlb logo" />
                    <div className="card-body">
                      <h4 className="card-title">LightBlb</h4>
                      <p className="card-text h5">A web app where people can share startup ideas</p>
                      <div className="d-flex justify-content-between h5 mt-3 mb-0 link-logos">
                        <a href="https://lightblb.up.railway.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/LightBlb" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://youtu.be/Gv7qISqOR9Q" className="text-decoration-none" style={{ color: "#FF0000" }} target="_blank"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip6(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="icons/materialUI.svg" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-html5"></i></div>
                        <div className="logo-div"><i className="fab fa-node"></i></div>
                        <div className="logo-div"><img src="icons/express.svg" width="54" /></div>
                        <div className="logo-div"><img src="icons/postgresql.svg" width="49" /></div>
                        <div className="logo-div"><img src="icons/heroku.svg" width="54" /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip6}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip8(true)}>
                    <img src="icons-colored/daily.svg" className="card-img-top" alt="Daily logo" />
                    <div className="card-body">
                      <h4 className="card-title">Daily</h4>
                      <p className="card-text h5">The daily routine scheduling app</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://daily.up.railway.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/daily" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip8(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="icons/materialUI.svg" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-html5"></i></div>
                        <div className="logo-div"><i className="fab fa-node"></i></div>
                        <div className="logo-div"><img src="icons/express.svg" width="54" /></div>
                        <div className="logo-div"><img src="icons/postgresql.svg" width="49" /></div>
                        <div className="logo-div"><img src="icons/heroku.svg" width="54" /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip8}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip9(true)}>
                    <img src="icons-colored/choice.svg" className="card-img-top" alt="This or That logo" />
                    <div className="card-body">
                      <h4 className="card-title">This or That</h4>
                      <p className="card-text h5">Helps you choose and quickly make a decision</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://thisorthattt.netlify.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/thisorthat" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip9(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="icons/materialUI.svg" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-html5"></i></div>
                        <div className="logo-div"><img src="icons-colored/netlify-logo.svg" width="54" style={{position: "relative", bottom: "8px"}} /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip9}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip5(true)}>
                    <img src="images/w5h-square.png" className="card-img-top" alt="W5H logo" />
                    <div className="card-body">
                      <h4 className="card-title">W5H</h4>
                      <p className="card-text h5">A web app that helps keep track of job applications</p>
                      <div className="d-flex justify-content-between h5 mt-3 mb-0 link-logos">
                        <a href="https://w5h.up.railway.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/w5h" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://youtu.be/dqO3EpFPPvc" className="text-decoration-none" style={{ color: "#FF0000" }} target="_blank"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip5(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="icons/materialUI.svg" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-html5"></i></div>
                        <div className="logo-div"><i className="fab fa-node"></i></div>
                        <div className="logo-div"><img src="icons/express.svg" width="54" /></div>
                        <div className="logo-div"><img src="icons/postgresql.svg" width="49" /></div>
                        <div className="logo-div"><img src="icons/heroku.svg" width="54" /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip5}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front ={
                  <div className="card" onClick={()=>setFlip(true)}>
                    <img src="icons-colored/ppal.svg" className="card-img-top" alt="PPAL logo" />
                    <div className="card-body">
                      <h4 className="card-title">PPAL</h4>
                      <p className="card-text h5">A web app that helps plan workout routines</p>
                      <div className="d-flex justify-content-between h5 mt-3 mb-0 link-logos">
                        <a href="https://ppal.up.railway.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/PPAL" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.youtube.com/watch?v=nHrbjpGZWAQ&t=1s&ab_channel=Daniel" className="text-decoration-none" style={{ color: "#FF0000" }} target="_blank"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back ={
                  <div className="card" onClick={()=>setFlip(false)}>
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
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip7(true)}>
                    <img src="icons-colored/dopetox.svg" className="card-img-top" alt="Dopetox logo" />
                    <div className="card-body">
                      <h4 className="card-title">Dopetox</h4>
                      <p className="card-text h5">A dopamine detox web app</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://dopetox.up.railway.app/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/Dopetox" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip7(false)}>
                    <div className="card-body">
                      <h4 className="card-title text-center">Technologies Used:</h4>
                      <div className="h5 card-text d-flex justify-content-around flex-wrap">
                        <div className="logo-div"><i className="fab fa-react"></i></div>
                        <div className="logo-div"><img src="icons/redux.svg" width="54" className="redux-img" /></div>
                        <div className="logo-div"><img src="icons/materialUI.svg" width="54" /></div>
                        <div className="logo-div"><i className="fab fa-npm"></i></div>
                        <div className="logo-div"><i className="fab fa-js-square"></i></div>
                        <div className="logo-div"><i className="fab fa-bootstrap"></i></div>
                        <div className="logo-div"><i className="fab fa-css3-alt"></i></div>
                        <div className="logo-div"><i className="fab fa-html5"></i></div>
                        <div className="logo-div"><i className="fab fa-node"></i></div>
                        <div className="logo-div"><img src="icons/express.svg" width="54" /></div>
                        <div className="logo-div"><img src="icons/postgresql.svg" width="49" /></div>
                        <div className="logo-div"><img src="icons/heroku.svg" width="54" /></div>
                      </div>
                    </div>
                  </div>
                }
                height={507}
                manual
                flip={flip7}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip2(true)}>
                    <img src="images/rando.png" className="card-img-top" alt="RANDO logo" />
                    <div className="card-body">
                      <h4 className="card-title">RANDO</h4>
                      <p className="card-text h5">A web application that generates random data</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://daniel-sungwon-lee.github.io/ajax-project/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/ajax-project" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip2(false)}>
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
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip3(true)}>
                    <img src="icons-colored/swe.svg" className="card-img-top" alt="SWE logo" />
                    <div className="card-body">
                      <h4 className="card-title">SWE</h4>
                      <p className="card-text h5">A journal application for anything Star Wars</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://daniel-sungwon-lee.github.io/code-journal/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/code-journal" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip3(false)}>
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
                flip={flip3}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="card-div">
              <FlipCard
                front={
                  <div className="card" onClick={() => setFlip4(true)}>
                    <img src="icons-colored/f1.svg" className="card-img-top" alt="Drive logo" />
                    <div className="card-body">
                      <h4 className="card-title">Drive</h4>
                      <p className="card-text h5">A simple, fun, dynamic driving game</p>
                      <div className="d-flex justify-content-around h5 mt-3 mb-0 link-logos">
                        <a href="https://daniel-sungwon-lee.github.io/driving-game/" className="text-decoration-none" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/daniel-sungwon-lee/driving-game" className="text-decoration-none text-dark" target="_blank"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="card" onClick={() => setFlip4(false)}>
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
                flip={flip4}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
