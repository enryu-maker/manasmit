import React from "react";
import Caro from "../components/Caro";
import Card1 from "../components/Card1";
import Services from "../components/Services";
import bg from "../Images/bg.png";
import Count from "../components/Count";
import Feedback from "../components/Feedback";
import map from "../Images/map.jpg";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manasmit Facial: The Finest Facial Workplace</title>
        <meta
          name="description"
          content="Manasmit Facial offers a serene and welcoming environment, ensuring every client feels relaxed and cared for. Our state-of-the-art facility is equipped with the latest technology to provide top-tier skincare services."
        />
      </Helmet>
      <div id="home" className="w-full h-full z-0">
        <Caro />
      </div>
      <div className="h-[20vh] md:mt-1 mt-40 w-full z-10">
        <Card1 />
      </div>
      <div
        id="services"
        className="w-full md:h-screen h-[120vh] pt-20 mt-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Services />
      </div>
      <div className="w-full h-fit flex justify-center -mt-32">
        <Count />
      </div>
      <div id="feedback" className="w-full h-fit ">
        <Feedback />
      </div>
      <div id="contact" className="w-full h-screen">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
