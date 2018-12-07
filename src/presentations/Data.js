import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Data extends Component{

    constructor(props){
        super(props);
        this.state ={
                id : props.data === undefined ? null : props.data.id,
                identifier : props.data === undefined ? '' : props.data.identifier,
                value : props.data === undefined ? '' : props.data.value,
                tag : props.data === undefined ? props.tags[0] : props.data.tag,
                submitText : props.data === undefined ? "Add" : "Update",
                tags : props.tags
            
        };
    }
    submit =(e, onSubmit) =>{
        e.preventDefault();
      onSubmit(this.state);
    }

    verfifyTags = () =>{
        if(this.state.tag === undefined){
            return <Redirect to='/tag'></Redirect>
        }
    }

    render(){
        const onSubmit = this.props.onSubmit;
        const onDelete = this.props.onDelete;
        

        return <div className='Data'>
        {this.verfifyTags()}
        <h5>Data</h5>
        <form className='form-control ' onSubmit={e => this.submit(e,onSubmit)}>
        <div className='form-group '>
            <input className='form-control' type="text" name="name" placeholder="Name" defaultValue={this.state.identifier} onChange={v => this.setState({'identifier':v.target.value})} />
            <br/>
            <input className='form-control'  type="text" name="value" placeholder="Value" defaultValue={this.state.value} onChange={v => this.setState({'value':v.target.value})}/>
            <br/>
            <select  className='form-control'  value={this.state.tag.id} onChange={v => this.setState({"tag": {id:v.currentTarget.value}})}>
                {
                    this.state.tags.map(tag => {
                        return <option key = {tag.id} value={tag.id}>{tag.identifier}</option>
                    })
                }
            </select>
           
            <input  className='form-control btn btn-primary'  type='submit' value= {this.state.submitText}/>

            </div>

        </form>
        {this.delete(onDelete)}
        </div>;
    }


    delete=(onDelete)=>{
        if(this.state.id !== null){
            return ( <button onClick={e => onDelete(this.state.id)}>Delete</button>
            );
        }
    }

}

export default Data;
