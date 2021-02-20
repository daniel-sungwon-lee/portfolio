import React from 'react';
import TypeWriter from 'typewriter-effect';

export default function Home(props) {
  return (
    <div className="container home" id="home">
      <h1 className="typewriter">
        <TypeWriter
          options={
            {
              strings:[
                `Hello there!`
              ],
              autoStart:true,
              pauseFor: 3000,
              deleteSpeed: 0,
              loop: true
            }
          }
        />
        <TypeWriter
          onInit={
            typewriter =>{
              typewriter.typeString(`<i style="color: #66d9ef">function</i> <span style="color: #a6e22e">Person</span>(<i style="color: #fd971f">fullName</i>, <i style="color: #fd971f">role</i>) { <br>`)
              .pauseFor(300)
              .typeString(`<span style="padding-left: 2rem">this.fullName = fullName;</span> <br>`)
              .pauseFor(300)
              .typeString(`<span style="padding-left: 2rem">this.role = role;</span> <br> };`)
              .pauseFor(333)
              .typeString(`<br> <br>`)
              .typeString(`<i style="color: #66d9ef">const</i> daniel = <span style="color: #f92672">new</span> <span style="color: #a6e22e">Person</span>("Daniel Sungwon Lee", "Developer");`)
              .pauseFor(5000)
              .deleteAll(3)
              .start()
            }
          }
          options={
            {
              loop:true
            }
          }
          />
      </h1>
    </div>
  )
}
