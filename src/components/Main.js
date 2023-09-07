import promotion from "../Assets/promotion.jpg";
import menu from "../Assets/menu.jpg";
import bookTable from "../Assets/bookTable.jpg";
import openingHours from "../Assets/openingHours.jpg";
import { Link } from 'react-router-dom';
import React from 'react';


const Main = ()=>{
    return (
        <main>
        <section>
            <article>
                <div id="imageContainer">
                    <img src={promotion} alt="Promotion"/>
                    <div className="overlay"></div>
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
        <section className="sections">
          <article className="article1">
              <h2>Our new menu</h2>
                  <img src={menu} alt="New menu"/>
                  <p>
                      Lorem ipsum dolor sit amet Consectetur adipiscing elit
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <Link to="/menu">See Our New Menu</Link>
          </article>
          <article className="article2">
              <h2>Book a table</h2>
                  <img src={bookTable} alt="Book a table"/>
                  <p>
                      Lorem ipsum dolor sit amet Consectetur adipiscing elit
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <Link to="/book-table">Book your table now</Link>
          </article>
          <article>
              <h2>Opening Hours</h2>
                  <img src={openingHours} alt="Opening hours"/>
                  <React.Fragment>
                      Lorem ipsum dolor sit amet Consectetur adipiscing elit
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </React.Fragment>
                  <div className="times">
                      <React.Fragment>
                    Mon - Fri: 2pm - 10pm
                  </React.Fragment>
                  <React.Fragment>
                      Sat: 2pm - 11pm
                  </React.Fragment>
                  <React.Fragment>
                      Sun: 2pm - 9pm
                  </React.Fragment>
              </div>
          </article>
          </section>
    </main>);
}

export default Main;