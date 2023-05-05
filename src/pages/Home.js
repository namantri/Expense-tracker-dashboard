import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <span id="top"></span>
      <div className="home-nav" id="top">
        <img
          src={""}
          alt=" "
          className="app-logo"
        />
        <h2 className="app-name">MoneyLogic</h2>
        <div className="space"></div>
        <div className="home-options">
          <a href="#new">AboutUs</a>
          <button className="btn btn-outline-primary">User</button>
          <button className="btn btn-outline-success">Admin</button>
        </div>
      </div>
      <div className="home-heading">
        Simple way <br /> <span> to track </span> personal expenses
      </div>
      <div className="features">
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/1.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature"> 100% Secured data</p>
        </div>
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/2.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature"> 1 Million+ users</p>
        </div>
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/3.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature"> 100K+ 5-star Reviews</p>
        </div>
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/4.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature">App of the day</p>
        </div>
      </div>
      <div className="advantages">
        <div className="adv">
          <img
            src={"https://moneylover.me/img/details/Transaction@4x.png"}
            alt=" "
            className="adv-img"
            style={{ float: "left", marginRight: "80px" }}
          />
          <div className="adv-text">
            <h2>Simple money tracker</h2>
            <p>
              It takes seconds to record daily transactions. Put them into clear
              and visualized categories such as Expense: Food, Shopping or
              Income: Salary, Gift.
            </p>
          </div>
        </div>
        <div className="adv">
          <img
            src={"https://moneylover.me/img/details/Transaction@4x.png"}
            alt=" "
            className="adv-img"
            style={{ float: "right", marginLeft: "80px" }}
          />
          <div className="adv-text">
            <h2>The whole picture in one place</h2>
            <p>
              One report to give a clear view on your spending patterns.
              Understand where your money comes and goes with easy-to-read
              graphs.
            </p>
          </div>
        </div>
        <div className="adv">
          <img
            src={"https://moneylover.me/img/details/Transaction@4x.png"}
            alt=" "
            className="adv-img"
            style={{ float: "left", marginRight: "80px" }}
          />
          <div className="adv-text">
            <h2>Painless budgeting</h2>
            <p>
              It takes seconds to record daily transactions. Put them into clear
              and visualized categories such as Expense: Food, Shopping or
              Income: Salary, Gift.
            </p>
          </div>
        </div>
      </div>
      <div className="review-header">
        <h2 className="review-heading">See what others have to say</h2>
        <img
          src="https://moneylover.me/img/Stars.svg"
          alt=" "
          className="stars"
        />
      </div>
      <div className="reviews">
        <div className="review">
          <p>
            A simple, accessible app that allows you to budget across weeks,
            months and years. The neat financial calendar lets you set up alerts
            and keep tabs on all transactions. Plus, it works with all
            currencies.
          </p>
          <b>Sagar Singh</b>
        </div>
        <div className="review">
          <p>
            Perfect app. My husband and I use it to track all our expenses and
            income. We generate our household accounts and budget using this fab
            app. Furthermore, the developers are hands-on and extremely helpful.
            Do not look any further. Get this app now!.
          </p>
          <b>Sonia Sahu</b>
        </div>
        <div className="review">
          <p>
            This will keep you organized and in control, of money you do have
            and money you will have. This application is easy to use and will
            help you keep track of every dollar.
          </p>
          <b>Priyanshu Dabas</b>
        </div>
      </div>
      <div className="about">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4750.301428179363!2d77.43499042226452!3d28.49752625252876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683280277248!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0", width: "100vw" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer>© 2022 Finsify Technology Co., Ltd. All rights reserved.</footer>
      <span className="material-symbols-rounded up">
        <a href="#top">arrow_upward</a>
      </span>
    </div>
  );
};

export default Home;
