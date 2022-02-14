import { Input } from '@material-ui/core';
import react from 'react';
import './App.css';



class Abc extends react.Component{
  constructor(){
    super()
    this.state = {
    name:  [{title : "maliksab",type:false},{title : 'ok hai',type:false}],
    value : ""
    }
  }
  edit = (i)=>{
    this.state.name[i].type = true
    this.setState({
      name : this.state.name
    })
  }

  chinging = (e)=>{
    this.setState({
      value : e.target.value
    })
 
   
  }
  btn = ()=>{
    let abc = {title : this.state.value}
    this.setState(
 {
  
   name: [...this.state.name,abc],
   value: ""
 }
    )
  }


  del = (i)=>{
    this.state.name.splice(i,1)
    this.setState({
      name : this.state.name
    })
  }
  handlechange = (e,i)=>{
    this.state.name[i].title = e.target.value
    this.setState({
      name : this.state.name
    })
  }
  update = (i)=>{
    this.state.name[i].type = false
    this.setState({
      name : this.state.name
    })
  }

render(){
  return(
    <div>
      <input value={this.state.value} type="text" onChange={(e) => this.chinging(e)} placeholder='Enter the value' />
      <button onClick={this.btn}>Add text</button>
      
  {this.state.name.map((v,i)=>{
    return <li key={i}> {v.type ? <input type="text" value={v.title} onChange={(e)=>this.handlechange(e,i)}/> : v.title} 
       <button onClick={(i)=>this.del(i)}>del</button>
    {v.type ?   <button onClick={()=>this.update(i)}>update</button> :
      <button onClick={()=>this.edit(i)}> edit</button>
    }
    </li>
  })}
    </div>
  )
}
}

export default Abc;
