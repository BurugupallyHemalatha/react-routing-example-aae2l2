import React from 'react'
export default class Counter extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
      }
  }
  changeCount(){
    this.setState({
      count: this.state.count+1
    },
    ()=>{
      console.log("callback",this.state.count)
    })
    console.log(this.state.count)
  }
  changeHema(){
  this.changeCount()
  this.changeCount()
  this.changeCount()
  }
  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.changeHema()}>increment</button>       
      </div>
    )
  }
}