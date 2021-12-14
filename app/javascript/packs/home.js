//* Should be the main hub/landing page for all of the react related content on the home page single page application. Additional packs will be used to add additional homepages for future applications which require thier own controller etc


import ReactDOM from 'react-dom';
import MainContainer from '../containers/home/MainContainer'
import LeftContainer from '../containers/home/LeftContainer'
// import thunk from 'redux-thunk';

//* would allow data to be setup on domcontent load
// document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('json')
  const data = JSON.parse(node.getAttribute('data'))

  debugger
  
// })

// const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    
    <React.StrictMode>
        {/* <Provider store={store} */}
            <LeftContainer />
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