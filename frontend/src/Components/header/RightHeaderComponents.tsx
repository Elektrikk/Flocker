import React from "react"

export default function RightComponent(props: {spacing : string, name: string}){
    
    return(
        <a className={"text-right align-middle " + (props.spacing) + " pr-6 text-l hover:text-xl hover:text-accent fixed" } href="/">
  {props.name}
</a>
    )
}