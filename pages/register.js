import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [registration, setRegistration] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newRecord = { ...registration, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);

    setRegistration({
      username: '',
      email: '',
      password: '',
      cpassword: '',
    });
  };

  return (
    <>
      <section className="res_mr">
        <div className="c_contain">
          {' '}
          {/* контейнер */}
          <div className="ch_contain">
            {' '}
            {/* форма */}
            <p className="t_res ty">Регистрация</p>
            <br />
            <p className="t_res ytr">
              Привет, введите свои данные, чтобы зарегистрировать ваш аккаунт
            </p>
            <form action="" onSubmit={handleSubmit}>
              <p>Имя *</p>
              <input
                className="input_res"
                name="username"
                onChange={handleInput}
                placeholder="например, Иван Иванов"
                value={registration.username}
              />
              <br />
              <p>Электронная почта *</p>
              <input
                className="input_res"
                name="email"
                onChange={handleInput}
                placeholder="например, abcde@xyz.com"
                value={registration.email}
                type="email"
              />
              <br />
              <p>Пароль *</p>
              <input
                className="input_res"
                name="password"
                onChange={handleInput}
                placeholder="Введите ваш пароль"
                value={registration.password}
                type="password"
              />
              <br />
              <p>Подтвердите пароль *</p>
              <input
                className="input_res"
                name="cpassword"
                onChange={handleInput}
                placeholder="Повторите ваш пароль"
                value={registration.cpassword}
                type="password"
              />
              <br />
              <div id="nji">
                <button id="res_btn" type="submit">
                  Зарегистрироваться
                </button>
              </div>
              <p className="t_res">
                Уже есть аккаунт? <Link href="/login">Войти</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
