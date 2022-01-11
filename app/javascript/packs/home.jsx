import React from 'react'
import ReactDOM from 'react-dom';
import Search from '../containers/home/search';


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
        <div className="mt-4 flex flex-row w-screen">
            <Search />
        </div>
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('searchBarContainer')
);
// ReactDOM.render(

//     <React.StrictMode>
//         {/* <Provider store={store} */}
//         <Menu />
//         {/* </Provider> */}
//     </React.StrictMode>, document.getElementById('menuContainer')
// );
// ReactDOM.render(

//     <React.StrictMode>
//         {/* <Provider store={store} */}
//         <Main />
//         {/* </Provider> */}
//     </React.StrictMode>, document.getElementById('mainContainer')
// );
// ReactDOM.render(

//     <React.StrictMode>
//         {/* <Provider store={store} */}
//         <Footer />
//         {/* </Provider> */}
//     </React.StrictMode>, document.getElementById('footerContainer')
// );