import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img height={40} width={40} src="/img/logo.png" />
          <div className="headerLeft__info">
            <h3 className='text-uppercase'>React Sneackers</h3>
            <p>Магазин топовых кроссовок</p>
          </div>
        </div>
        <div className="headerRight d-flex align-center">
          <div className="headerRight__price mr-30 align-center d-flex">
            <img className="mr-10" height={18} width={18} src="/img/cart.svg" />
            <span className="headerRight__price--value">1205 руб.</span>
          </div>
          <div className="headerRight__enter">
            <img height={18} width={18} src="/img/user.svg" />
          </div>
        </div>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className='d-flex'>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers1.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers2.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers3.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers4.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers5.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers6.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers7.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers8.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers9.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers10.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers11.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneackers/sneackers12.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
