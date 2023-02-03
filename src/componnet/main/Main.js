import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import { loadMoreMovies } from '../../redux/actions/movie';

const Main = (props) => {
  const { loadMoreMovies } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <div className="main">{loading ? <Spinner /> : <MainContent />}</div>;
};

const mapStateToProps = (state) => ({ list: state.movies.list });

export default connect(mapStateToProps, { loadMoreMovies })(Main);
