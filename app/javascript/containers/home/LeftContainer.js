import React from 'react'
import AboutSidebar from './components/AboutSidebar'

class LeftContainer extends React.Component {

    render(){
      return (
        <div className="justify-center">
          < AboutSidebar aboutInfo={this.props.aboutInfo}/>
        </div>
        )
    }
} 

export default LeftContainer;