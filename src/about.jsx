import React from 'react'
import Zoom from 'react-reveal/Zoom';

export default function About(props){
  return (
    <div className="container about" id="about">
      <Zoom>
        <div className="about-me">
          <div className="about-me-inner">
            <h1 className="text-center">
              About Me
            </h1>
            <h3 className="font-weight-bold mt-5">My story...</h3>
            <h4 className="text">
              <p>
              Life is full of surprises; no wonder it is like a box
              of chocolates. My path and destination to becoming
              a web developer was definitely an unexpected journey.
              </p>
              <p>
              After high school, I decided to enter a
              7-year pharmacy program to become a pharmacist.
              But after my bachelor's, I realized that pharmacy school was getting
              too expensive and I didn't have enough passion for it; yes, it only took me
              4 years to realize this. And so, I took a leap of faith and decided
              to follow my heart and that part of me that always wanted to be more
              creative. Plus, it also saved me from accumulating six figure student loans.
              </p>
              <p>
              Through LearningFuze's full immersion coding bootcamp, I started
              my path into the software industry where problem solving, creativity,
              innovation, development, improvement, and the desire to
              learn new things are some of the key attributes of
              becoming a great engineer. Since I love to figure things
              out and make/build things, making this change felt right.
              </p>
              <p>
              My tech stack consists of JavaScript, React, HTML, CSS,
              Node, etc. and I am open to any opportunities, eager to
              apply my skills and learn new things; to go from idea to software
              through code.
              </p>
            </h4>
            <h3 className="font-weight-bold mt-5">Some of my interests (other than coding)...</h3>
            <h4 className="text">
              <ul>
                <li>Nature, especially the mountains; it helps me take a nice break from the world</li>
                <li>Cooking from scratch; I enjoy going to the grocery store and bringing items together to put in my mouth</li>
                <li>Reading the Nutrition Facts label; the more you know, the less you feel like eating that processed "food" you're holding</li>
                <li>Working out; I made an app for it, check it out <a href="https://ppalll.herokuapp.com/" target="_blank" className="text-decoration-none">here!</a> (shameless plug)</li>
                <li>Investing; money is a tool, having it is one thing but knowing how to use it is another&mdash;I also like tendies</li>
                <li>Good, clean, minimalist/modern design; whether that be websites, apps, logos, icons, houses, credit cards, debit cards, etc. (I like collecting credit/debit cards)</li>
                <li>Minimalism; you really don't need that much in life</li>
                <li>Films/music; I enjoy and appreciate the fine arts</li>
                <li>Sports; specifically football (soccer) and football, and I follow <a href="https://www.google.com/search?q=FC%20Barcelona" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg" width="30"/></a></li>
                <li>Photography; it captures a small, tangible moment and memory in life</li>
                <li>Intellectual, inspirational, motivational, and thought provoking quotes; I also made an app that generates random quotes and other stuff, check it out <a href="https://daniel-sungwon-lee.github.io/ajax-project/" target="_blank" className="text-decoration-none">here!</a> (sorry I'll stop)</li>
                <li>Memes; I get them mainly from <a href="https://www.reddit.com/" target="_blank" className="fab fa-reddit text-decoration-none" style={{color: "#FF4301"}}></a></li>
                <li>Semicolons (if you haven't realized by now); I like them in English, not so much in JavaScript (as you can tell by looking at some of my <a href="https://github.com/daniel-sungwon-lee?tab=repositories" target="blank" className="text-decoration-none">code</a>)</li>
              </ul>
            </h4>
          </div>
        </div>
      </Zoom>
    </div>
  )
}
