import React from 'react'
export default class Statttt extends React.Component{
  constructor(){
    super()
    this.state={
      name:"mom i love you"
    }
  }
  changeName(){
    this.setState({
        name:"i love you dada"
      })
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.changeName()}>click me</button>
      </div>
    )
  }
}