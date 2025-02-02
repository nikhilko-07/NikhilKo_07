import React from 'react'
import Style from './ProjectPage.module.css';
import img from './Aboutimg.webp'
const ProjectsPage1 = () => {
  return (
    <div className={`${Style.container} container`}>
      <h1 style={{textAlign:"center"}}>My Recent Works</h1>
      <div className={`${Style.list}`}>
        <li style={{ backgroundColor:"#140C1C",height:"40vh",width:"25vw",borderRadius:"1rem"}}><img style={{width:"50%"}} src={img}/><h1 className={`${Style.dev}`}>hello</h1></li>
        <li style={{ backgroundColor:"#140C1C",height:"40vh",width:"25vw",borderRadius:"1rem"}}><img style={{width:"50%"}} src={img}/><h1 className={`${Style.dev}`}>hello</h1></li>
        <li style={{ backgroundColor:"#140C1C",height:"40vh",width:"25vw",borderRadius:"1rem"}}><img style={{width:"50%"}} src={img}/><h1 className={`${Style.dev}`}>hello</h1></li>
        <li style={{ backgroundColor:"#140C1C",height:"40vh",width:"25vw",borderRadius:"1rem"}}><img style={{width:"50%"}} src={img}/><h1 className={`${Style.dev}`}>hello</h1></li>
      </div>
    </div>
  )
}

export default ProjectsPage1;