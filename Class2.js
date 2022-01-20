// import React from 'react'
// class Class2 extends React.Component{
//this is nomal using props
//   render(){
//     return(
//       <div>
//         <bold>{this.props.name} {this.props.value}{this.props.i}</bold>
//       </div>
//     )
//   }
// }
// export default Class2

//this is the Destructoringmethod in class
import React from 'react'
class Class2 extends React.Component{

  render(){
    const {name,value,i}=this.props
    return(
      <div>
        <bold>{name} {value}{i}</bold>
      </div>
    )
  }
}
export default Class2


