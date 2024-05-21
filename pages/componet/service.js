import React from 'react';
import Image from 'next/image';

const service = () => {
  return (
    <>
      <div className="flex_ser_con">
        <div className="service_con">
          <div className="simg_container">
            <Image className="simg1" src="/prevention1.jpg" layout="fill" alt=""></Image>
          </div>
          <p>Меры безопасности на каждом шагу</p>
        </div>
        <div className="service_con">
          <div className="simg_container">
            <Image
              className="simg1"
              src="/Customer Service.png"
              layout="fill"
              alt=""
            ></Image>
          </div>
          <p>Дружественная служба поддержки 24/7</p>
        </div>
        <div className="service_con">
          <div className="simg_container">
            <Image className="simg1" src="/care.jpg" layout="fill" alt=""></Image>
          </div>
          <p>Мы заботимся о наших клиентах и продавцах</p>
        </div>
      </div>
    </>
  );
};

export default service;
