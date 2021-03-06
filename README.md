<h1>Responsive File System Dashboard </h1>

<h3>PURPOSE</h3>
The purpose of this project is to create an interactive, responsive interface by which a server's file system can be accessed over a network.
An additional purpose of this project is to contribute to the field of UX in the realm of web design. Current applications of this include web apps like Google Drive, One Drive, etc.

<h3>MOTIVATION</h3>
<p>
The motivation for this project is an educational one. It is used to increase the author's experience in the following concepts/technologies
<ul>
<li>Modern Web Design</li>
<li>App Architecture</li>
<li>Automated Deployment</li>
</ul>
</p>

<h3>DESIGN</h3>
<p>
At a high level, this project will read from a file system and interactively displays it as a web application.

A responsive design is used, here is how the layout changes with size:

<ul>
  <li>
  Width less that 600px
  <br />
  <img src="./images/readme/small.png" width="50%"/>
  </li>
  <li>
  Width between 600px and 1024px
  <br />
  <img src="./images/readme/medium.png" width="50%"/>
  </li>
  <li>
  Width greater than 1024px
  <br />
  <img src="./images/readme/big.png" width="50%"/>
  </li>
</ul>
</p>

<h3>GETTING STARTED</h3>

<h3>TODO</h3>
<p>
<ul>
  <li>
  DEVELOP
  <ul>
  <li>Populate UI dynamically by reading file system</li>
  <li>Enhance UI to dynamically create 'n' live tiles (using horizontal scroll)</li>
  </ul>
  </li>
  
  <li>
  ARCHITECT
  <ul>
  <li>Host in Docker container on linux server</li>
  <li>Use Nginx Docker image to handle load balancing</li>
  </ul>
  </li>
  
  <li>
  DEPLOY
  <ul>
  <li>Use Kubernetes to manage health of containers</li>
  <li>Continuous deployment</li>
  </ul>
  </li>
</ul>
</p>

<h3>CONTRIBUTIONS</h3>
<p>
Contributions are welcome! Authors will be mentioned in the following section.
</p>

<h3>AUTHORS</h3>
<p>
    <ul>
      <li>Frank B Greco Jr</li>
    </ul>
</p>
