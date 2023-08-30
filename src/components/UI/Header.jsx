import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">SOCKS SHOP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/basket">Корзина</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/favorite">Избранное</a>
            </li>
            {/* {!user ? ( */}
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/reg">Registration</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth">Auth</a>
                </li>
            {/* ) : ( */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
              </li>
            {/* )} */}
          </ul>
          {/* {user && <p>{user.name}</p>} */}  
        </div>
      </div>
    </nav>
  );
}

export default Header;
