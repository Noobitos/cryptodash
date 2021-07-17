import React from 'react';
import {AppContext} from '../Components/AppProvider';

export default function ({firstVisit}) {
    return (
      <AppContext.Consumer>
        {({firstVisit}) => 
        firstVisit ? <div>
          Welcome to Appazen, please select your favorite coins to begin. {' '}
        </div> : <div>Confirmed </div> }
      </AppContext.Consumer>
    );
  
  };