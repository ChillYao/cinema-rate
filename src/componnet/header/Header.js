/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../assets/cinema-logo.svg';
import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions/movie';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = (props) => {
  const { getMovies } = props;
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  useEffect(() => {
    getMovies('now_playing', 1);
  }, []);

  const toggleMenu = () => {
    setMenuClass(!menuClass);
    setNavClass(!navClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="" />
            Cinema App
          </div>
          <div
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map((data) => {
              return (
                <li key={data.id} className="header-nav-item">
                  <span className="header-list-name">
                    <i className={data.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{data.name}</span>
                </li>
              );
            })}
            <input className="search-input" type="text" placeholder="search for a movie" />
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, { getMovies })(Header);
