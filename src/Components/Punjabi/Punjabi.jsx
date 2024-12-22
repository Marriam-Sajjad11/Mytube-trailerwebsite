import React from 'react'
import "./Punjabi.css"
const Punjabi = () => {
  const Data=[
    {
      imgsrc:
        "movies-images/punjabi2.jpg",
      title: "Angrej",
      desc: "9-08-2006",
      link:"https://youtu.be/2jcbSzoPNVA?si=XQmwdOO7caMgJFjJ",
    },
    {
      imgsrc:
        "movies-images/punjabi3.jpg",
      title: "Honeymoon",
      desc: "9-08-2006",
      link:"https://youtu.be/Z0uAhXV9Wpc?si=tsZ3-szaFp9amSfd",
    },
    {
      imgsrc:
        "movies-images/punjabi4.jpg",
      title: "Lahoriye",
      desc: "9-08-2006",
      link:"https://youtu.be/0owS3euUNtk?si=Qyk2WJBDLv_y-A5g",
    },
    {
      imgsrc:
        "movies-images/punjabi5.jpg",
      title: "LOVE Punjab",
      desc: "9-08-2006",
      link:"https://youtu.be/1lTWvdYxUMk?si=5_ovN891LMLkiJ0l",
    },
    {
      imgsrc:
        "movies-images/punjabi6.jpg",
      title: "carry on jatta 3",
      desc: "9-08-2006",
      link:"https://youtu.be/A5ejkDCT1CA?si=Cdh36zkCAZv6dL32",
    },
    {
      imgsrc:
        "movies-images/punjabi1.jpg",
      title: "Guddiyan PATOLE",
      desc: "9-08-2006",
      link:"https://youtu.be/XFPo9Br-a_c?si=fL8JlUhGaZOvdJG4",
    },
    {
      imgsrc:
        "movies-images/punjabi8.jpg",
      title: "nadhoo khan",
      desc: "9-08-2006",
      link:"https://youtu.be/Vx8svo-577c?si=4x-GJ-Z0G5gX8Htm",
    },
    {
      imgsrc:
        "movies-images/punjabi7.jpg",
      title: "Lekh",
      desc: "9-08-2006",
      link:"https://youtu.be/4q8w7706paY?si=45V6z3l6Dceaj9Yx",
    },
  ]
  return (
    <div>
      <div className="gridheader">
        {Data.map((v,i)=>{
return(
    <>
       <div className="singlecard" key={i}>
   <div className="imgdiv">
     <img
       src={v.imgsrc}
       alt=""
     />
   </div>
   <div className="content">
   <h4><a href={v.link} target='_blank'>{v.title}</a></h4>
     <p>
      {v.desc}
     </p>
   </div>
 </div>
    
    </>
)
})}
     
      </div>
    </div>
  )
}

export default Punjabi
