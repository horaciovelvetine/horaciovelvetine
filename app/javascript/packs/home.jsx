import React from 'react'
import ReactDOM from 'react-dom';
import Layout from './../containers/home/Layout'

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
        <div>
            <Layout />
        </div>
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('homeContainer')
);
