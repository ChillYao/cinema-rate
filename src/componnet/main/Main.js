/* eslint-disable multiline-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Main.scss';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import {
  loadMoreMovies,
  setResponsePageNumber
} from '../../redux/actions/movie';
import SearchResult from '../content/seach-result/SearchResult';

// import useLocation and replace match.url and match.path with location.pathname
const Main = (props) => {
  const {
    list,
    loadMoreMovies,
    page,
    totalPages,
    setResponsePageNumber,
    movieType,
    searchResult
  } = props;
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
  }, [currentPage, totalPages]);

  const fetchData = () => {
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      loadMoreMovies(movieType, pageNumber);
    }
  };

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } =
      bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      fetchData();
    }
  };

  return (
    <>
      <div className="main" ref={mainRef} onScroll={handleScroll}>
        {list ? (
          <>
            {searchResult && searchResult.length === 0 ? (
              <MainContent />
            ) : (
              <SearchResult />
            )}
          </>
        ) : (
          <Spinner />
        )}
        <div ref={bottomLineRef}></div>
      </div>
    </>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  movieType: PropTypes.string,
  searchResult: PropTypes.array
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages,
  movieType: state.movies.movieType,
  searchResult: state.movies.searchResult
});

export default connect(mapStateToProps, {
  loadMoreMovies,
  setResponsePageNumber
})(Main);
