import React from 'react'
import ReactDOM from 'react-dom';

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
        <div className="">
            <p>I made it home!</p>
        </div>
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('homeContainer')
);
