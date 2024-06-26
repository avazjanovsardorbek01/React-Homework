import john from "./assets/man.png";
import table from "./assets/dashboard.png";
import days from "./assets/days.png";
import girl from "./assets/girl.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="./pages/work.html">Works</a>
            </li>

            <li>
              <a href="./pages/blog.html">Blog</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="wrapper">
          <div class="head-content">
            <div class="head-left">
              <h1>Hi, I am John, Creative Technologist</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button>Download Resume</button>
            </div>
            <div class="head-right">
              <img src={john} alt="john photo" />
            </div>
          </div>
        </div>
      </header>
      <section class="post">
        <div class="wrapper">
          <div class="tittle">
            <span>Recent posts</span>
            <a href="#">view all</a>
          </div>
          <div class="content">
            <div class="item">
              <h3>Making a design system from scratch</h3>
              <div class="date">
                <div>12 Feb 2020</div>
                <div></div>
                <div>Desigin Pattern</div>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div class="item">
              <h3>Creating pixel perfect icons in Figma</h3>
              <div class="date">
                <div>12 Feb 2020</div>
                <div></div>
                <div>Figma,icon design</div>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="features">
        <div class="wrapper">
          <p class="title">Feactured works</p>
          <div class="main">
            <img src={table} alt="photo" />
            <div class="content">
              <h2>Designing Dashboards</h2>
              <div class="content-date">
                <span>2020</span>
                <span>Dashboard</span>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <p class="title">Feactured works</p>
          <div class="main">
            <img src={girl} alt="photo" />
            <div class="content">
              <h2>Vibrant Portraits of 2020</h2>
              <div class="content-date">
                <span>2018</span>
                <span>Illustration</span>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <p class="title">Feactured works</p>
          <div class="main">
            <img src={days} alt="photo" />
            <div class="content">
              <h2>36 Days of Malayalam type</h2>
              <div class="content-date">
                <span>2018</span>
                <span>Typography</span>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="socials">
          <ul>
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <small>Copyright ©2020 All rights reserved </small>
        </div>
      </footer>
    </>
  );
}
export default App;
