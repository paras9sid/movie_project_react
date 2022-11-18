import React from "react";
import { data } from '../data';

class Navbar extends React.Component {

    render (){ // render function will covert the return function into class component 
        return (
            <div className="nav">
              <div className="search-container">

                <input />
                <button id = "search-btn">Search</button>
              </div>
            </div>
          );
    }
 
}

export default Navbar;
