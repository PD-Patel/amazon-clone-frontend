import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "./Home.css";

const images = [
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg",
];

const bestsell = [
  "https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/41Pf-FgUROL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/41cEMMExIoL._AC_SY200_.jpg",
  "https://m.media-amazon.com/i",
];

function Home() {
  return (
    <div className="Home">
      <div className="banner">
        <Carousel className="home-banner" indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="banner"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="banner"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG_2_en_US_1x._CB412146952_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/MI_Laptops/MI_Notebook_Fest_Dec_2020/S2/Bunks/D19540316_IN_PC_Mi_notebook_Fest_18-22nd_Dec_3000x12000.5x._CB412597724_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home-container">
        <div className="card">
          <h3>Gaming Accessories</h3>
          <Link to="gaming_accessories">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_1x._SY304_CB432517394_.jpgs"
              alt=""
              className="card-img"
            />
          </Link>
          <Link to="gaming_accessories">
            <p className="card-button">Shop our full selection</p>
          </Link>
        </div>

        <div className="card">
          <h3>AmazonBasics</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>

        <div className="card">
          <h3>Deals & Promotions</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>

        <div className="SignInCard">
          <h4>Sign in for the best experience</h4>
          <button>Sign in Securely</button>
        </div>

        <div className="trustCard">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
            alt=""
          />
        </div>

        <div className="card extra">
          <h3>Shop top categories</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>

        <div className="card">
          <h3>Find your ideal TV</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>

        <div className="card">
          <h3>Computers & Accessories</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>

        <div className="card extra">
          <h3>Electronics</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>

        <div className="card hide">
          <h3>Get fit at home</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpgg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>
      </div>

      <div className="home-swiper ">
        <Swiper
          className="swiper"
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="home-swiper top ">
        <Swiper
          className="swiper"
          spaceBetween={100}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
        >
          {bestsell.map((image) => (
            <SwiperSlide className="slide">
              <img className="bestImage" src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="forthRow">
        <div className="forthRow-element">
          <h3>Comfy styles for her</h3>
          <div className="comfy">
            <div className="comfyItem">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
                alt=""
              />
              <p>Sweatshirts</p>
            </div>
            <div className="comfyItem">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg"
                alt=""
              />
              <p>Joggers</p>
            </div>
            <div className="comfyItem">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
                alt=""
              />
              <p>Cardigans</p>
            </div>
            <div className="comfyItem">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg"
                alt=""
              />
              <p>Easy tees</p>
            </div>
          </div>

          <p className="comfyButton" id="comfyButton">
            See more
          </p>
        </div>

        <div className="card extra">
          <h3>Shop Laptops & Tablets</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>
        <div className="card extra">
          <h3>Explore home bedding</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>
        <div className="card extra hidden">
          <h3>Create with strip lights</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
            alt=""
            className="card-img"
          />
          <p className="card-button">See more</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
