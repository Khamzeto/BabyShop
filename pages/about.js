import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import About from './componet/about_u';

const about = () => {
  return (
    <>
      <section className="res_mr">
        {/* ----------------------------- */}
        <div className="fixtop_ab">
          <h1 id="fd_ab_b">Наша Цель</h1>
        </div>

        <About></About>
        <div className="fixtop_ab">
          <h2 id="fd_ab_b">Контакты</h2>
        </div>
        <div className="info_ab">
          <div className="con_ab_info">
            <div className="iab">
              <Image
                src="/muslim.jpg"
                layout="fill"
                className="card-img-top"
                alt="Profile pic"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Азимов Муслим</h5>
              <p className="card-text">Студент 1 курса, ЧГУ</p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <footer>
          <div className="fixtop_ab">
            <h2 id="fd_ab_b">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
          </div>
          <div className="container">
            <iframe src="https://embed.lottiefiles.com/animation/53830"></iframe>
            <form>
              <div className="fdd">
                <div className="fd_ab">
                  <div className="row">
                    <div>
                      <label>Имя</label>
                    </div>
                    <div className="abtext">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Ваше имя.."
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Фамилия</label>
                    </div>
                    <div className="abtext">
                      <input
                        type="text"
                        id="fname"
                        name="lastname"
                        placeholder="Ваша фамилия.."
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Электронная почта</label>
                    </div>
                    <div className="abtext">
                      <input
                        id="fname"
                        type="email"
                        name="mailid"
                        placeholder="Ваш email.."
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Страна</label>
                    </div>
                    <div>
                      <select id="fname" name="country" required>
                        <option value="none">Выберите страну</option>
                        <option value="australia">Австралия</option>
                        <option value="canada">Канада</option>
                        <option value="usa">США</option>
                        <option value="russia">Россия</option>
                        <option value="japan">Япония</option>
                        <option value="india">Индия</option>
                        <option value="china">Китай</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Обратная связь</label>
                    </div>
                    <div>
                      <textarea
                        id="tfname"
                        name="subject"
                        placeholder="Напишите что-нибудь.."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <a href="">
                      <input type="button" id="btn_ab" value="Отправить" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </footer>
      </section>
    </>
  );
};

export default about;
