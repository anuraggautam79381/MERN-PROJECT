// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>

<p className="mid">
  Welcome to Brijwasi Restaurant, where culinary excellence meets heartfelt hospitality. Nestled in the heart of [Vrindavan], our restaurant has been a beloved culinary destination since [2000]. With a rich heritage spanning decades, we take pride in offering a delectable journey through authentic Indian cuisine.
At Brijwasi, we believe in the art of flavors. Our dishes are crafted with the finest ingredients and traditional recipes passed down through generations. Whether you crave the aromatic spices of North India or the coastal delights of South India, our menu caters to every palate.

Beyond just food, we are committed to creating memorable dining experiences. Our warm and inviting ambiance, paired with attentive service, ensures that every visit is nothing short of exceptional. Whether you are celebrating a special occasion or simply enjoying a meal with loved ones, Brijwasi Restaurant promises an unforgettable gastronomic adventure.

Join us at Brijwasi Restaurant and embark on a culinary voyage that celebrates the essence of Indian cuisine.

</p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;