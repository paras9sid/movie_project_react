import React from "react";
import { data } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from '../actions';

//changinfg function into class componenet
class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    //make api call


    // dispatch action

    
    // store.dispath({
    //    type : 'ADD_MOVIES',
    //    movies : data
    // });

    //another way to dispatch
    store.dispath(addMovies(data));

    console.log('STATE',this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
  }
 render(){
    const { list } = this.props.store.getState(); //now reducer file {lsit:[] , favourites:[] }
    console.log('RENDER',this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
          {list.map((movie,index)=> (
              <MovieCard 
                movie={movie}
                key = {`movies-${index}`}
                dispatch = {this.props.store.dispatch}
                isFavourite = {this.isMovieFavourite(movie)}
          />  
            ))}
            

          </div>
        </div>

      </div>
    );
  }
}

export default App;
