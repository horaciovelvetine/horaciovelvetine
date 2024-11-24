<h1 align=center>The Wikiverse an Overview</h1>
<ul align=center>
  <h2>
    <a href=https://github.com/horaciovelvetine/wikidata-universe-client>Frontend</a> |
    <a href=https://github.com/horaciovelvetine/wikidata-universe-api>Backend</a>
  </h2>
</ul>

<ul align=center>
<img src=../img/icons/java_logo.svg width=200>
    <img src=../img/icons/P5js_logo.svg width=200>
    <img src=../img/icons/spring_logo.svg width=200>
</ul>

<h2 align=center>Objective:</h2>
<h3 align=center>
  <li>Answer: 'What would Wikipedia look like in 3D space'? </li>
  <li>Document the prototyping processes in a detailed and helpful way</li>
  <li>Exploit every learning opportunity and centralize resources for solving the problems encountered</li>
  <li>Provide an alternative take on 'Search UI' and the way which topics are explored on Wikipedia</li>
  <li> (bonus goal) Get apple to send me one of those Vision Pro's so I can explore Wikipedia in 3D AND look cool</li>  
</h3>

## Summary 

The Wikiverse.net's 0.0.1 Alpha was prototyped over the course of an entire year. This involved a lot of work and research done not only to arrive at an initial working Web App, but also for a myriad of other solutions that didn't end up used/working for a variety of other reasons. This document will be an overview of the entire prototyping process with links to additional resources and write-ups with more depth on specific topics as they were explored and unpacked. My background is in music, so my approach is entirely naive beginning with just an ignorant question, and every attempt will be made to make this approachable and understandable for anyone. 

Question can be directed to: horaciovelvetine@gmail.com

*This repo links to Wikipedia because of the reliability of those links over time, they are good starting places to link to concepts for which you can easily do more learning. Additionally, inside the references directory are copies of resources are available for further reading which have been referenced over the course of this project.*

## Concept

If you have ever idly browsed Wikipedia or used the <a href=https://en.wikipedia.org/wiki/Special:Random/>random page link</a> you've probably spent some time exploring Wikipedia using it's hyperlinks. This seemingly infinite rabbit hole of connections between topics served as the starting point for an idea on how one could create a sort of '3D Shape' of Wikipedia. Counting the number of times two pages referenced each other and storing this as a number: 'weight', gives a quantitative way to determine a sort of ideal distance two pages should be from each other in space.

<img src=../img/wmeans_3_vertices_2d_with_strength_radius.png>

## Gotta Start Somewhere

<h3 align=center>The first step in problem solving is always to solve a simpler problem, it helps if they're related, but you do you. </h3>

The above image is from <a href=https://github.com/horaciovelvetine/finding-centroids>Finding Centroids</a>, which explores the idea of using <a href=https://mathworld.wolfram.com/WeightedMean.html> Weighted Means</a> to create something which (I very later learned) is referred to as a *'layout'*. <a href=https://github.com/horaciovelvetine/finding-centroids>Finding Centroids</a> is both the web-app for the visualization and a deep dive into the concepts behind using Weighted Means as a solution for building a layout. 

This visualization is built using <a href=https://p5js.org/>p5.js</a> and <a href=https://tailwindcss.com>tailwindcss</a> which led to some research about existing data visualization tools and the stumbling onto d3.js, <a href=https://en.wikipedia.org/wiki/Force-directed_graph_drawing>Force Drawn Graphs</a> and <a href=https://github.com/jrtom/jung>JUNG</a>. 
<div align=center>
  <img src=../img/d3_force_screencap.png>
</div>

<h3 align=center>You can read a ton more about this in <a href=assets/docs/the_wikiverse/Graphs_and_JUNG.md>Graphs and JUNG.md</a> which contains documentations, resrouces, and references for a the underlying processes used to create a layout for the Wikiverse.</h3>




