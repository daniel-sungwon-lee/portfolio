import React from 'react';
import Skeleton from '@mui/material/Skeleton'
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
              <Skeleton>
                <p>
                Life is full of surprises; no wonder it is like a box
                of chocolates. My path and destination to becoming
                a web developer was definitely an unexpected journey.
                </p>
              </Skeleton>
              <Skeleton>
                <p>
                After high school, I decided to enter a
                7-year pharmacy program to become a pharmacist.
                But after my bachelor's, I realized that pharmacy school was getting
                too expensive and I didn't have enough passion for it; yes, it only took me
                4 years to realize this. And so, I took a leap of faith and decided
                to follow my heart and that part of me that always wanted to be more
                creative. Plus, it also saved me from accumulating six figure student loans.
                </p>
              </Skeleton>
              <Skeleton>
                <p>
                Through a full immersion coding bootcamp, I started
                my path into the software industry where problem solving, creativity,
                innovation, development, improvement, and the desire to
                learn new things are some of the key attributes of
                becoming a great engineer. Since I love to figure things
                out and make/build things through logic, making this change felt right.
                Also, software is all around us and makes life much more convenient.
                </p>
              </Skeleton>
              <Skeleton>
                <p>
                My tech stack consists of JavaScript, React, HTML, CSS,
                Node, etc. and I am open to any opportunities, eager to
                apply my skills and learn new things; to go from idea to software
                through code.
                </p>
              </Skeleton>
            </h4>
            <h3 className="font-weight-bold mt-5">Some of my interests (other than coding)...</h3>
            <h4 className="text">
              <ul>
                <li>Nature, especially the mountains; it helps me take a nice break from the world</li>
                <li>Cooking from scratch; I enjoy going to the grocery store and bringing items together to put in my mouth</li>
                <li>Reading the Nutrition Facts label; the more you know, the less you feel like eating that processed "food" you're holding</li>
                <li>Working out; I made an app for it, check it out <a href="https://ppalll.herokuapp.com/" target="_blank" className="text-decoration-none">here!</a> (shameless plug)</li>
                <li>Investing; money is a tool, having it is one thing but knowing how to use it is another</li>
                <li>Good, clean, minimalist/modern design; whether that be websites, apps, logos, icons, outfits, houses, credit cards, debit cards, etc.</li>
                <li>Minimalism; you really don't need that much in life</li>
                <li>Films/music; I enjoy and appreciate the fine arts</li>
                <li>Photography; it captures a small, tangible moment and memory in life</li>
                <li>Intellectual, inspirational, motivational, and thought provoking quotes; I also made an app that generates random quotes and other stuff, check it out <a href="https://daniel-sungwon-lee.github.io/ajax-project/" target="_blank" className="text-decoration-none">here!</a> (sorry I'll stop)</li>
                <li>Semicolons (if you haven't realized by now); I like them in English, not so much in JavaScript (as you can tell by looking at some of my <a href="https://github.com/daniel-sungwon-lee?tab=repositories" target="blank" className="text-decoration-none">code</a>)</li>
              </ul>
            </h4>
          </div>
        </div>
      </Zoom>
    </div>
  )
}
