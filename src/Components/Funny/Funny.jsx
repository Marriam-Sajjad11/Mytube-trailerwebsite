import React from 'react'
import "./Funny.css"
const Funny = () => {
  const Data=[
  {
    imgsrc:"movies-images/funny1.jpg",
    title: "FREE GUY",
    desc: "9-08-2006",
    link:"https://youtu.be/X2m-08cOAbc?si=-PnS7HIoDjhvX_8J",
  },
  {
    imgsrc:
      "movies-images/funny2.jpg",
    title: "NAAKA BANDI",
    desc: "9-08-2006",
    link:"https://youtu.be/br507VQW8Eg?si=EDiNTOjREh-iqt2G",
  },
  {
    imgsrc:
      "movies-images/funny5.jpg",
    title: "DUMB and Dumber",
    desc: "9-08-2006",
    link:"https://youtu.be/dmNddThxi4c?si=RCh1EpEtZLPpcPdv",
  },
  {
    imgsrc:
      "movies-images/funny4.jpg",
    title: "ice cube chris tucker FRIDAY",
    desc: "9-08-2006",
    link:"https://youtu.be/umvFBoLOOgo?si=iLiO2E-9v8WkFAQ_",
  },
  {
    imgsrc:
      "movies-images/funny3.jpg",
    title: "BAREILLY KI BARFI",
    desc: "9-08-2006",
    link:"https://youtu.be/2_UZ_vCTOg0?si=aOv7GgpShHgvs5JX",
  },
  {
    imgsrc:
      "movies-images/funny8.jpg",
    title: "we,re the millers",
    desc: "9-08-2006",
    link:"https://youtu.be/0Vsy5KzsieQ?si=Afu1ba5tdYCtVhOf",
  },
  {
    imgsrc:
      "movies-images/funny7.jpg",
    title: "21 jump street",
    desc: "9-08-2006",
    link:"https://youtu.be/RLoKtb4c4W0?si=ewTNc4LVY1lvfN8B",
  },
  {
    imgsrc:
      "movies-images/funny6.jpg",
    title: "welcome",
    desc: "9-08-2006",
    link:"https://youtu.be/AKiynoClCaA?si=C2Z1W7xDN0OCoAP0",
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

export default Funny
