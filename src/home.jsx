import React from 'react';
import TypeWriter from 'typewriter-effect';

export default function Home(props) {
  return (
    <div className="container" id="home">
      <h1 className="typewriter">
        <TypeWriter
          options={
            {
              strings:[
                `<i style="color: #66d9ef">function</i> <span style="color: #a6e22e">Person</span>(<i style="color: #fd971f">fullName</i>, <i style="color: #fd971f">role</i>) { <br>
                    this.fullName = fullName; <br>
                    this.role = role; <br>
                }; <br>
                <br>
                <i style="color: #66d9ef">const</i> daniel = <span style="color: #f92672">new</span> <span style="color: #a6e22e">Person</span>("Daniel Sungwon Lee", "Developer");`,
              ],
              autoStart:true,
              pauseFor: 3000,
              deleteSpeed: 33,
              loop: true
            }
          }
        />
      </h1>
    </div>
  )
}
function Person (name, role) {
  this.name = name;
  this.role
}
new Person("Daniel",)
