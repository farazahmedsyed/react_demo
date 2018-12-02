import React, { Component} from 'react';
import Base from './Base';

class Home extends Component{


    render(){
        const user = this.props.user;
        const isDone = this.props.isDone;
        let progress=<div className='Home'>Loading...></div>;
        if(isDone  === true){
            progress = <div className='Home'>Hello {user.username}</div>;
        }
        return (
            <div>

            <Base/>
              {progress}
          
        </div>
        
        )
        
    }

    componentDidMount(){
        const fetch = this.props.fetch;
        fetch();
        
    }
    
}

export default Home;