import React from "react"


export default function Todo(props){
  const { title, desciption, imgUrl, _id } = props
  return(
    <div>
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <img src={imgUrl} alt="todo image" width={300}/>
    </div>
  )
}