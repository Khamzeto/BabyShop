import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Image src="/logo.png" alt="" width={125} height={125} />
        </div>
        <ol>
          <li>
            <Link href="/">
              <a>Главная</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>О нас</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Войти или Зарегистрироваться</a>
            </Link>
          </li>
          <li>
            <i className="fa fa-bell" />
          </li>
          <li className="cart">
            <Image src="/cart.png" alt="" width={28} height={28} />
          </li>
        </ol>
      </nav>
    </>
  );
};

export default nav;
