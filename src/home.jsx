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
                .pauseFor(2000)
                .deleteAll(30)
                .typeString(`I'm a web developer`)
                .pauseFor(2000)
                .deleteChars(13)
                .typeString(`software engineer`)
                .pauseFor(2000)
                .deleteChars(17)
                .typeString(`programmer`)
                .pauseFor(2000)
                .deleteChars(10)
                .typeString(`problem solver`)
                .pauseFor(2000)
                .deleteChars(15)
                .typeString(`n <a href="https://www.16personalities.com/intj-personality" target="_blank" style="text-decoration: none">INTJ</a>`)
                .pauseFor(3000)
                .deleteChars(6)
                .typeString(`lways learning`)
                .pauseFor(2000)
                .deleteAll(30)
                .start()
            }
          }
          options={
            {
              loop: true,
              delay: 60,
              deleteSpeed: 30
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
              .typeString(`<i style="color: #66d9ef">let</i> daniel = <span style="color: #f92672">new</span> <span style="color: #a6e22e">Person</span>("Daniel Sungwon Lee", "Developer");`)
              .pauseFor(333)
              .typeString(`<br> <br>`)
              .typeString(`daniel <br>`)
              .pasteString(`<i>Person {fullName: <i style="color: #fd971f">"Daniel Sungwon Lee"</i>, role: <i style="color: #fd971f">"Developer"</i>}</i>`)
              .start()
            }
          }
          options={
            {
              delay: 60
            }
          }
          />
      </h1>
    </div>
  )
}
