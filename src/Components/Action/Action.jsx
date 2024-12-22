import React from 'react'
import "./Action.css"
const Action = () => {
    const Data=[
      {
        imgsrc:
          "movies-images/action1.jpg",
        title: "X-FAST",
        desc: "9-08-2006",
        link:"https://youtu.be/eoOaKN4qCKw?si=bZuTkvRPuNu_vtwW",
      },
      {
        imgsrc:
          "movies-images/action2.jpg",
        title: "THE NORTHMAN",
        desc: "9-08-2006",
        link:"https://youtu.be/oMSdFM12hOw?si=wH_fVtASfSUEfRvm"
      },
      {
        imgsrc:
          "movies-images/action3.jpg",
        title: "Avengers",
        desc: "9-08-2006",
        link:"https://youtu.be/eOrNdBpGMv8?si=4QrDRFBalgaxsIgY",
      },
      {
        imgsrc:
          "movies-images/action4.jpg",
        title: "Everything Everywhere All At Once",
        desc: "9-08-2006",
        link:"https://youtu.be/wxN1T1uxQ2g?si=gYCTRkEZtZjgfZp3",
      },
      {
        imgsrc:
          "movies-images/action5.jpg",
        title: "Kate",
        desc: "9-08-2006",
        link:"https://youtu.be/MysGjRS9jFU?si=0xweMuQ-vebITdk-",
      },
      {
        imgsrc:
          "movies-images/action6.jpg",
        title: "mad max",
        desc: "9-08-2006",
        link:"https://youtu.be/hEJnMQG9ev8?si=vBDbOVin58qEGjAR",
      },
      {
        imgsrc:
          "movies-images/action7.jpg",
        title: "civil war",
        desc: "9-08-2006",
        link:"https://youtu.be/dKrVegVI0Us?si=Fnedn0L9GLLLV15v",
      },
      {
        imgsrc:
          "movies-images/action8.jpg",
        title: "extraction",
        desc: "9-08-2006",
        link:"",
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

export default Action
