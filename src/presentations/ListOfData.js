import React, {Component} from 'react';
import Data from './Data';
import Base from './Base';

class ListOfData extends Component{

    render(){
        const datas = this.props.data;
        const isDone = this.props.isDone;
        const onSubmit = this.props.onSubmit;
        const tags = this.props.tags;
        const onSearch = this.props.onSearch;
        const message = this.props.message;
        const onDelete = this.props.onDelete;
        if(isDone){
            return <div className>
           {this.generic(onSearch,onSubmit,tags)}
             <Data tags={tags} onSubmit={onSubmit} onDelete={onDelete}></Data>
            <h1>Data</h1>
            {
                datas.map(data => <Data onDelete={onDelete} tags={tags} onSubmit={onSubmit} key= {data.id} data={data} />)
            }
           
            </div>;
        }
        else{
            return (<div> {this.generic(onSearch,onSubmit, tags)}{ message}</div>)
        }
       
    }

    generic=(onSearch,onSubmit,tags)=>{
        return (<div className='ListOfData'>
         <Base/>
            <form onSubmit = {e => {e.preventDefault(); onSearch(e.target.elements[0].value)}}>
                <input type='search' placeholder='Search by Tag'/>
                <input type='submit' />
            </form>
            
        </div>);

    }
    componentDidMount(){
        this.props.fetchData();
    }
}

export default ListOfData;


