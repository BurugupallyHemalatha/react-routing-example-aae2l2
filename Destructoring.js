import React from 'react'
const Destructoring =(props)=>{
  const {name,value}=props
  return(
    <div>
      
      <em>We are updateing props by destructuring {name}{value}</em>
      </div>
  )
}
export default Destructoring

//this is also one method of printing destructing values
// import React from 'react';
// const Destructoring=({name,value})=>{
//   return(
//     <h1>hh{name}{value}</h1>
//   )
// }
// export default Destructoring