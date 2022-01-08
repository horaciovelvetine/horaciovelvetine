
import React from 'react'
import ReactDOM from 'react-dom';
import Main from '../containers/home/main';


// Needed for grabbing info 
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