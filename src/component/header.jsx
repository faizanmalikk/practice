import react from "react";
class Header extends react.Component{
    render(){
      return(
      <div>
          <h1> {this.props.name}</h1>
        <h1> {this.props.price} </h1>
      </div>
        
      )
    }
  }
  class Footer extends react.Component{
    render(){
      return(
      <div>
        <h2>hello</h2>
  
      </div>
      
      )
    }
  }
  export {
    Footer,
    Header
  };