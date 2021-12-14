//* Should be the main hub/landing page for all of the react related content on the home page single page application. Additional packs will be used to add additional homepages for future applications which require thier own controller etc

import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from '../containers/home/MainContainer'
import LeftContainer from '../containers/home/LeftContainer'
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk))

const about = {
    firstname: "James", 
    lastname: "Tillman", 
    username: "@horaciovelvetine", 
    email: "horaciovelvetine@gmail.com", 
    location: "Denver, CO, USA", 
    bio: "Enterprising full stack engineer, with technical experience using Ruby, JavaScript, Sinatra, Rails, React, Redux, Bootstrap, SQLite, and PostgreSql. A proven problem solver, self-starter, and detail-oriented pragmatist. Looking for opportunities which will both be challenging and enable me to learn and grow as a developer."
}

// document.addEventListener('DOMContentLoaded', () => {
//   const node = document.getElementById('testingId1')
//   const data = JSON.parse(node.getAttribute('data'))

//   debugger
  
// })

ReactDOM.render(
    
    <React.StrictMode>
        {/* <Provider store={store} */}
            <LeftContainer aboutInfo={about}/>
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('rootLeftContainer')
);

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store} */}
            <MainContainer />
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('rootMainContainer')
);