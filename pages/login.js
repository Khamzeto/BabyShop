import React, { useState } from 'react';
import Link from 'next/link';

const Register = () => {
  const [registration, setRegistration] = useState({
    email: '',
    password: '',
  });

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistration({ ...registration, [name]: value });
  };

  return (
    <section className="res_mr">
      <div className="c_contain">
        {' '}
        {/* контейнер */}
        <div className="ch_contain">
          {' '}
          {/* форма */}
          <p className="t_res ty">Войти</p>
          <br />
          <p className="t_res ytr">
            Привет, введите свои данные, чтобы зарегистрировать ваш аккаунт
          </p>
          <form action="">
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
            <div id="nji">
              <button id="res_btn" type="submit">
                Войти
              </button>
            </div>
            <p className="t_res">
              Нет аккаунта? <Link href="/register">Зарегистрироваться</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
