/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie'

class MoviesList extends PureComponent {

  state = {
    movies: [],
  }

  async componentDidMount(){
    try {
      //themoviedb.org...get your own 😉
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      const movies = await res.json();

      //I know this is a bit wordy, but now I can
      //just add movies to remove to this array
      const knownXRated = [
        "Emmanuelle, Queen of the Galaxy",
      ];

      const cleanMovies = movies.results.filter(movie => !knownXRated.includes(movie.title));

      this.setState({
        movies:cleanMovies,
      })
    } catch(e){
      console.log(e)
    }
  }

  render(){
    return(
        <MovieGrid>
            {this.state.movies.map(movie => <Movie desc={movie.overview} key={movie.id} movie={movie} />)}
        </MovieGrid>
    );
  };
}

export default MoviesList;

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;