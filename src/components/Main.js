import promotion from "../Assets/promotion.jpg";
import menu from "../Assets/menu.jpg";
import bookTable from "../Assets/bookTable.jpg";
import openingHours from "../Assets/openingHours.jpg";

const Main = ()=>{
    return (
        <main>
        <section>
            <article>
                <div id="imageContainer">
                    <img src={promotion} alt="Promotion"/>
                    <div class="overlay"></div>
                    <h1>30% Off This Weekend</h1>
                    <p>
                          Lorem ipsum dolor sit amet Consectetur adipiscing elit
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
            </article>
        </section>
        <section class="sections">
          <article class="article1">
              <h2>Our new menu</h2>
                  <img src={menu} alt="New menu"/>
                  <p>
                      Lorem ipsum dolor sit amet Consectetur adipiscing elit
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <a href="newMenu.html">See Our New Menu</a>
          </article>
          <article class="article2">
              <h2>Book a table</h2>
                  <img src={bookTable} alt="Book a table"/>
                  <p>
                      Lorem ipsum dolor sit amet Consectetur adipiscing elit
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <a href="bookTable.html">Book your table now</a>
          </article>
          <article>
              <h2>Opening Hours</h2>
                  <img src={openingHours} alt="Opening hours"/>
                  <div>
                      Lorem ipsum dolor sit amet Consectetur adipiscing elit
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div class="times">
                      <div>
                    Mon - Fri: 2pm - 10pm
                  </div>
                  <div>
                      Sat: 2pm - 11pm
                  </div>
                  <div>
                      Sun: 2pm - 9pm
                  </div>
              </div>
          </article>
          </section>
    </main>);
}

export default Main;