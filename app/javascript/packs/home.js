
import React from 'react'
import ReactDOM from 'react-dom';
import Main from '../containers/home/main';
import Footer from '../containers/home/footer';
import Menu from '../containers/home/menu';
import SearchBar from '../containers/home/searchBar';


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

ReactDOM.render(

    <React.StrictMode>
        {/* <Provider store={store} */}
        <Footer />
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('footerContainer')
);

ReactDOM.render(

    <React.StrictMode>
        {/* <Provider store={store} */}
        <Menu />
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('menuContainer')
);

ReactDOM.render(

    <React.StrictMode>
        {/* <Provider store={store} */}
        <SearchBar/>
        {/* </Provider> */}
    </React.StrictMode>, document.getElementById('searchBarContainer')
);