import React from 'react';
import TypeWriter from 'typewriter-effect';

export default function Home(props) {
  return (
    <div className="container home" id="">
      <h1 className="typewriter">
        <TypeWriter
          onInit={
            typewriter => {
              typewriter
                .typeString(`Hello, World <i class="fas fa-terminal"></i>`)
                .pauseFor(3000)
                .deleteAll()
                .typeString(`I'm Daniel`)
                .pauseFor(3000)
                .deleteChars(6)
                .typeString(`a web developer`)
                .pauseFor(3000)
                .deleteChars(13)
                .typeString(`software engineer`)
                .pauseFor(3000)
                .deleteChars(17)
                .typeString(`programmer`)
                .pauseFor(3000)
                .deleteChars(10)
                .typeString(`problem solver`)
                .pauseFor(3000)
                .deleteChars(14)
                .typeString(`thinker`)
                .pauseFor(3000)
                .deleteChars(8)
                .typeString(`n <a href="https://www.16personalities.com/intj-personality" target="_blank" style="text-decoration: none">INTJ</a>`)
                .pauseFor(5000)
                .deleteChars(6)
                .typeString(`lways learning`)
                .pauseFor(3000)
                .deleteAll()
                .start()
            }
          }
          options={
            {
              loop: true
            }
          }
        />
        <br/>
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
