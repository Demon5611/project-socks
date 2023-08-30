import React, { useState } from 'react';

export default function RegPage() {
  const [error, setError] = useState(null);
  const submithandler = async (e) => {
    e.preventDefault();

    const dataEntries = new FormData(e.target);
    const dataObj = Object.fromEntries(dataEntries);

    const response = await fetch('/api/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    });

    const data = await response.json();

    if (response.ok) {
      window.location = '/';
    } else {
      setError(data.message);
    }
  };
  return (
    <div className="regForm" style={{ marginLeft: '20%', margingight: '20%', margintop: '20%' }}>
      <h1>Регистрация</h1>
      <form onSubmit={submithandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" placeholder="ivanov@mail.com">
            Введите ваш email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" placeholder="Ivan">
            Введите свое имя
          </label>
          <input
            name="userName"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" placeholder="***">
            Придумайте пароль
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
        {error && <p>{error}</p> }
      </form>
    </div>
  );
}
