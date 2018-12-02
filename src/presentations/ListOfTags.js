import React, {Component} from 'react';
import Tag from './tag';
import Base from './Base';

class ListOfTags extends Component{

    render(){
        const tags = this.props.tags;
        const onSubmit = this.props.onSubmit;
        const isDone = this.props.isDone;
        const message = this.props.message;
        const onDelete = this.props.onDelete;
        let h = <h1>Tags</h1>;
        if(isDone === true){
        
        return <div className='ListOfTags'>
         <Base/>
         {h}
       <Tag onSubmit = {onSubmit} onDelete={onDelete}></Tag>
       {
           
           tags.map(tag => <Tag onDelete={onDelete} key = {tag.id} id={tag.id} name = {tag.identifier} onSubmit = {onSubmit}></Tag>)
       }
      
        </div>;
        }
        else{
            return( <div> <Base/>{h}{message}</div>)
        }
    }

    componentDidMount(){
        this.props.fetchTags();
    }
}

export default ListOfTags;
