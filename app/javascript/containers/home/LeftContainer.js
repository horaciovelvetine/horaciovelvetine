import React from 'react'
import AboutSidebar from './components/AboutSidebar'

class LeftContainer extends React.Component {
    state = {
        is: "so stated"
    }

    render(props){
      return (
        <div className="justify-center">
          < AboutSidebar about={props}/>
        </div>
        )
    }
} 

export default LeftContainer;