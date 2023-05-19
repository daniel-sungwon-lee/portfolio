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
            <h3 className="font-weight-bold mt-5 mb-2">My story...</h3>
            <h4 className="text">
                <p>
                Life is full of surprises; no wonder it is like a box
                of chocolates. My path to where I am is definitely an
                unexpected journey.
                </p>
                <p>
                After deciding to enter a pharmacy program to become a pharmacist,
                I realized that pharmacy school was getting too expensive and I didn't have
                enough passion for it; yes, it only took me 4 years and a bachelor's to realize this.
                And so, I took a leap of faith and decided to switch things up a bit and try out
                software engineering, studying and learning how computers/software work instead of how
                humans work for a living. Plus, it also saved me from accumulating six figure student loans.
                </p>
                <p>
                After an arduous period of learning and applying, I started
                my path in software development in the advertising industry, working and helping out
                on the tech side of things since most ads and marketing nowadays are done digitally.
                It was a great period of applying my knowledge and learning new technologies, figuring things out,
                and developing/contributing to a myriad of fun projects from different clients; overall, it was a
                great period of real world experience.
                </p>
                <p>
                I am a fast learner, adaptable, analytical, detail oriented, reliable, and a natural
                problem solver. Most importantly, I can just sit down for a long period of time and
                get things done in a timely manner. I am open for growth and ready to try out other
                industries, learn new technologies, and be a part of any team to help make life more convenient
                through software.
                </p>
            </h4>
            <h3 className="font-weight-bold mt-5">Some of my interests (other than coding)...</h3>
            <h4 className="text">
              <ul>
                <li>Nature, especially the mountains; it helps me take a nice break from the world</li>
                <li>Cooking from scratch; I enjoy going to the grocery store and bringing items together to put in my mouth</li>
                <li>Reading the Nutrition Facts label; the more you know, the less you feel like eating that processed "food" you're holding</li>
                <li>Working out; I made an app for it, check it out <a href="https://ppal.up.railway.app/" target="_blank" className="text-decoration-none">here!</a> (shameless plug)</li>
                <li>Investing; money is a tool, having it is one thing but knowing how to use it is another</li>
                <li>Good, clean, minimalist/modern design; whether that be websites, apps, logos, icons, outfits, houses, credit cards, debit cards, etc.</li>
                <li>Minimalism; you really don't need that much in life</li>
                <li>Films/music; I enjoy and appreciate the fine arts</li>
                <li>Photography; it captures a small, tangible moment and memory in life</li>
                <li>Intellectual, inspirational, motivational, and thought provoking quotes; I also made an app that generates random quotes and other stuff, check it out <a href="https://daniel-sungwon-lee.github.io/ajax-project/" target="_blank" className="text-decoration-none">here!</a> (sorry I'll stop)</li>
                <li>Semicolons (if you haven't realized by now); I like them in English, not so much in JavaScript (as you can tell by looking at some of my <a href="https://github.com/daniel-sungwon-lee?tab=repositories" target="blank" className="text-decoration-none">code</a>)</li>
                <li>Thrifting; you never know what gems you might find at a fraction of the cost, since clothes can get pretty expensive.</li>
              </ul>
            </h4>
          </div>
        </div>
      </Zoom>
    </div>
  )
}
