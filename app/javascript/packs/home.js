//* Should be the main hub/landing page for all of the react related content on the home page single page application. Additional packs will be used to add additional homepages for future applications which require thier own controller etc

import React from 'react'
import ReactDOM from 'react-dom';
import Main from '../containers/home/Main';

// import thunk from 'redux-thunk';

// document.addEventListener('DOMContentLoaded', () => {
// const node = document.getElementById('json')
// const payload = JSON.parse(document.getElementById.getAttribute('payload'))
// })

// const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(

    <React.StrictMode>
        {/* <Provider store={store} */}
        <Main />
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('mainContainer')
);