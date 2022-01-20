import React,{Component} from 'react'
export default class Class extends Component{
  constructor(){
    super()
    this.state={
      name:"hema"
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        </div>
    )
  }
}
export default Class;