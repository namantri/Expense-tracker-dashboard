import React, { useState } from "react";
import "./Home.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
// import Chatboto from "../Components/Chatboto";
const Home = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <div style={{ height: "100%" }}>
      {/* <Chatboto /> */}
      <span id="top"></span>
      <div className={isScrolled ? "home-nav" : "home-nav scrolled"} id="top">
        <img src={""} alt=" " className="app-logo" />
        <h2 className={isScrolled ? "app-name scrolled" : "app-name"}>
          MoneyLogic
        </h2>
        <div className="space"></div>
        <div className="home-options">
          <a
            href="#new"
            className={isScrolled ? "about-section scrolled" : "about-section"}
          >
            AboutUs
          </a>
          <Link to={"/login"}>
            <button className="bn3637 bn37">User</button>
          </Link>
          <Link to={"/adminlogin"}>
            <button className="bn3637 bn37">Admin</button>
          </Link>
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
          <AnimationOnScroll
            animateIn="animate__slideInLeft"
            animateOnce={true}
            duration={0.5}
          >
            <img
              src={"https://moneylover.me/img/details/Transaction@4x.png"}
              alt=" "
              className="adv-img"
              style={{ float: "left", marginRight: "80px" }}
            />
          </AnimationOnScroll>

          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInRight"
            animateOnce={true}
          >
            <div className="adv-text">
              <h2>Simple money tracker</h2>
              <p>
                It takes seconds to record daily transactions. Put them into
                clear and visualized categories such as Expense: Food, Shopping
                or Income: Salary, Gift.
              </p>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="adv">
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInRight"
            animateOnce={true}
          >
            <img
              src={"https://moneylover.me/img/details/Transaction@4x.png"}
              alt=" "
              className="adv-img"
              style={{ float: "right", marginLeft: "80px" }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <div className="adv-text">
              <h2>The whole picture in one place</h2>
              <p>
                One report to give a clear view on your spending patterns.
                Understand where your money comes and goes with easy-to-read
                graphs.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="adv">
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <img
              src={"https://moneylover.me/img/details/Transaction@4x.png"}
              alt=" "
              className="adv-img"
              style={{ float: "left", marginRight: "80px" }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            duration={0.7}
            animateOnce={true}
          >
            <div className="adv-text">
              <h2>Painless budgeting</h2>
              <p>
                It takes seconds to record daily transactions. Put them into
                clear and visualized categories such as Expense: Food, Shopping
                or Income: Salary, Gift.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="review-header">
          <h2 className="review-heading">See what others have to say</h2>
          <img
            src="https://moneylover.me/img/Stars.svg"
            alt=" "
            className="stars"
          />
        </div>
      </AnimationOnScroll>
      <div className="reviews">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          duration={0.7}
          animateOnce={true}
          className="review"
        >
          <div>
            <p>
              A simple, accessible app that allows you to budget across weeks,
              months and years. The neat financial calendar lets you set up
              alerts and keep tabs on all transactions. Plus, it works with all
              currencies.
            </p>
            <b>Sagar Singh</b>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          duration={0.7}
          animateOnce={true}
          className="review"
        >
          <div>
            <p>
              Perfect app. My husband and I use it to track all our expenses and
              income. We generate our household accounts and budget using this
              fab app. Furthermore, the developers are hands-on and extremely
              helpful. Do not look any further. Get this app now!.
            </p>
            <b>Sonia Sahu</b>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          duration={0.7}
          animateOnce={true}
          className="review"
        >
          <div>
            <p>
              This will keep you organized and in control, of money you do have
              and money you will have. This application is easy to use and will
              help you keep track of every dollar.
            </p>
            <b>Priyanshu Dabas</b>
          </div>
        </AnimationOnScroll>
      </div>

      <div className="about"></div>

      <footer>© 2022 Finsify Technology Co., Ltd. All rights reserved.</footer>
      <span className="material-symbols-rounded up">
        <a href="#top">arrow_upward</a>
      </span>
    </div>
  );
};

export default Home;
