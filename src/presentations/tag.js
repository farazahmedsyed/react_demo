import React, {Component} from 'react';

class Tag extends Component{

    submit = (e,key, onSubmit) =>{
        e.preventDefault();
        let id = key;
        let name =  e.target.elements[0].value;
        let tag = {
            id : id,
            identifier : name
        }
        onSubmit(tag);
        
    }
    render(){
        const onSubmit = this.props.onSubmit;
        const onDelete = this.props.onDelete;
        let name = this.props.name;
        const key = this.props.id;
        let submitText = "Update";
        if(key == null){
            submitText = "Add";
            name = '';
        }
        return <div className='Tag'>
        <h5>Tag</h5>
        <form onSubmit={e=> this.submit(e,key,onSubmit)}>
            <input type="text" name="name" placeholder="Tag Name" defaultValue={name}/>
            <input type='submit' value = {submitText}/>
        </form>
        {this.delete(onDelete, key)}
        </div>;
    }

    delete=(onDelete,key)=>{
        if(key !==undefined && key !== null){
          //  return ( <button onClick={e => onDelete(key)}>Delete</button>);
        }
    }
}

export default Tag;
