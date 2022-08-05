import React, { useState } from 'react';
import './navbar.scss';
import { ImSearch } from 'react-icons/im';
import { BsGlobe2 } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <section className="navbar__wrapper">
      {/* logo */}
      <div className="logo">
        <h2>Logo</h2>
      </div>
      {/* middle search */}
      <div className="search__wrapper">
        <div className="search__btn">
          <button>Anywhere</button>
          <button>Any week</button>
          <button>Search Doctor</button>
          <span className="search__icon">
            <ImSearch size={10} color={`#fff`} />
          </span>
        </div>
      </div>
      {/* right side */}
      <div className="right__wrapper">
        <Link to="/home">Book an Appointment</Link>
        <BsGlobe2 style={{ cursor: 'pointer' }} />
        <button className="right__btn">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              fill: 'none',
              height: ' 16px',
              width: '16px',
              stroke: 'currentcolor',
              strokeWidth: 3,
              overflow: 'visible',
              paddingLeft: '5px',
              cursor: 'pointer',
            }}
          >
            <g fill="none" fill-rule="nonzero">
              <path d="m2 16h28"></path>
              <path d="m2 24h28"></path>
              <path d="m2 8h28"></path>
            </g>
          </svg>
          <img
            className="navbar__img"
            src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
            alt=""
          />
          <span className="notify">
            <span>1</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
