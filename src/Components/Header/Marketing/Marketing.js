import React from "react";
import Slider from "infinite-react-carousel";
import "./Marketing.css";

const Marketing = () => {
  return (
    <>
      <h1>Здесь может быть ваша реклама*</h1>
      <Slider autoplay={true} arrows={false} dots>
        <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1650886803_1-vsegda-pomnim-com-p-gori-po-gorizontali-foto-1.jpg" />
        <img src="https://sun9-58.userapi.com/c637725/v637725167/1a4f0/Jz74FyiGDNE.jpg" />
        <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1648945146_61-vsegda-pomnim-com-p-les-gorizontalno-foto-70.jpg" />
        <img src="https://sun9-77.userapi.com/c857528/v857528833/b9be0/8MiLazcKJ4U.jpg" />
        <img src="https://sun9-67.userapi.com/c844721/v844721600/12813f/IOTsEqFrmZY.jpg" />
      </Slider>
      <p>*а пока наслаждайтесь красивыми пейзажами</p>
    </>
  );
};

export default Marketing;
