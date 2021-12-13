//* Should be the main hub/landing page for all of the react related content on the home page single page application. Additional packs will be used to add additional homepages for future applications which require thier own controller etc

import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from '../containers/home/MainContainer'
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store} */}
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('rootLeftContainer')
);

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store} */}
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('rootRightContainer')
);


ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store} */}
            <MainContainer />
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('rootMainContainer')
);