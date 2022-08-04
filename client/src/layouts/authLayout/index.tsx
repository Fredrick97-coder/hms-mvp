import React from 'react';
import { Outlet } from 'react-router-dom';
import './auth-styles.scss';

function AuthLayout() {
  return (
    <div className="auth__wrapper">
      {/* left side component */}
      <div className="left__side">
        <div className="overlay" />
        <div className="content">
          <div className="logo">LOGO</div>
          <div className="info__wrapper">
            <div className="info">
              <h3>We Care About Your Family</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                beatae obcaecati, quod quis totam fuga corrupti dolore,
                repudiandae ut dolores quasi natus corporis hic voluptatibus
                laborum neque iure! Excepturi aliquid fuga nemo reiciendis porro
                eos inventore illo voluptatibus rem enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right side component */}
      <div className="right__side">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
