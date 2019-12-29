/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from './actions';

class MoviesList extends PureComponent {

  componentDidMount(){
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || ((new Date()) - moviesLoadedAt) > oneHour){
      getMovies();
    };
  }

  render(){
    const { movies, isLoaded } = this.props;

    if (!isLoaded){return <h1>Loading</h1>}

    return(
        <MovieGrid>
            {movies.map(movie => <Movie desc={movie.overview} key={movie.id} movie={movie} />)}
        </MovieGrid>
    );
  };
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;