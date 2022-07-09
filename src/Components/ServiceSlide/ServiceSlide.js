import React from "react";
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper";
// swiper
import SectionTitle from "../SectionTitle/SectionTitle";
import { UseServices } from "../../hooks";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import "./ServiceSlide.css";
import { OverlayBg3, OverlayBg7, OverlayBg8 } from "../OverlayBg/OverlayBg";

const ServiceSlide = () => {
  const [services] = UseServices();
  const navigate = useNavigate();
  return (
    <div className="service-slide position-relative">
      <div className="container service-slide-inner">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>Services</h6>
          <h2>We Cover A Big Variety Of Medical Services</h2>
          <p className="text-center">
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <div className="text-end">
            {" "}
            <MyButtonLg
              action={() => navigate("service")}
              className={"view-all-btn"}
              style={{
                width: "150px",
                padding: "5px 0",
                background: "#f17732",
                color: "#fff",
              }}
            >
              view all
            </MyButtonLg>
          </div>
        </SectionTitle>

        <div className="service-slide-wrapper">
          <Swiper
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {services.map((service) => {
              const {
                name,
                description,
                thumb,
                bookingFee,
                consultingFee,
                _id,
              } = service;
              return (
                <SwiperSlide key={_id}>
                  <div className="service-item ">
                    <figure>
                      <img
                        src={thumb}
                        alt="service-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div>
                      <h5>{name}</h5>
                      <div className="d-flex s-fees justify-content-between">
                        <p>Consulting Fee: ${consultingFee}</p>
                        <p>Booking Fee: ${bookingFee}</p>
                      </div>
                      <p>{description}</p>
                    </div>
                    <MyButtonLg
                      className={"book-now-btn"}
                      action={() => navigate(`service/${_id}`)}
                      style={{
                        width: "150px",
                        padding: "10px 0",
                        background: "#e1e2f6",
                        color: "#565acf",
                      }}
                    >
                      book now
                    </MyButtonLg>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <OverlayBg3 style={{ top: "0%", right: "0%" }} />
      <OverlayBg7 style={{ top: "0%", left: "0%" }} />
      <OverlayBg8 style={{ bottom: "-10%", left: "50%" }} />
    </div>
  );
};

export default ServiceSlide;
