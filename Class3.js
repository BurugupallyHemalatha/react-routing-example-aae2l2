import React from 'react'
export default class Class3 extends React.Component{
  constructor(){
    super()
    this.state={
      value:0
    }
  }
  changeValue(){
  //   this.setState({
  //     value:this.state.value+1
  //   },()=> console.log("values",this.state.value)
  //   )
  //   console.log(this.state.value)
  // }
  this.setState(previouState =>({
  value:previouState.value+1
  })
  )
}
  changeValuee(){
    this.changeValue()
    this.changeValue()
    this.changeValue()
  }

  render(){
    return(
      <div>
        <h1>Value{this.state.value}</h1>
        <button onClick={()=>this.changeValuee()}>click me</button>
      </div>
    )
  }
}