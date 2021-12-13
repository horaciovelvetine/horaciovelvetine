//* Should be the main hub/landing page for all of the react related content on the home page single page application. Additional packs will be used to add additional homepages for future applications which require thier own controller etc

import React from 'react';
import ReactDOM from 'react-dom';
import HomePageApp from '../containers/home/HomePageApp'
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store} */}
            <HomePageApp />
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('root')
);