import React from 'react'
import "./Bollywood"
const Bollywood = () => {
    const Data=[
        {
            imgsrc:
              "movies-images/india8.jpg",
            title: "gangubai",
            desc: "9-08-2006",
            link:"https://youtu.be/N1ZwRv3vJJY?si=YSHEuB2dDyN-vTfg",
          },
          {
            imgsrc:
              "movies-images/india7.jpg",
            title: "ittefaq",
            desc: "9-08-2006",
            link:"https://youtu.be/mvfvoCdPrII?si=2_4m7OoqrmhZ36BS",
          },
          {
            imgsrc:
              "movies-images/india6.jpg",
            title: "Badla",
            desc: "9-08-2006",
            link:"https://youtu.be/xHWQiok-ei0?si=GFwY6lun7OSSF9jt",
          },
          {
            imgsrc:
              "movies-images/india5.jpg",
            title: "Haseena Dilruba",
            desc: "9-08-2006",
            link:"https://youtu.be/lt_bDfnXKGM?si=W-Xt7uslIZYIRq2u",
          },
          {
            imgsrc:
              "movies-images/india4.jpg",
            title: "NAAM SHABANA",
            desc: "9-08-2006",
            link:"https://youtu.be/upyeAQv4pUs?si=HPngrffo-lodO9zq",
          },
          {
            imgsrc:
              "movies-images/india3.jpg",
            title: "ae dil hai Mushkil",
            desc: "9-08-2006",
            link:"https://youtu.be/Z_PODraXg4E?si=qMMtLQ6VJMJii3cZ",
          },
          {
            imgsrc:
              "movies-images/india2.jpg",
            title: "MOM",
            desc: "9-08-2006",
            link:"https://youtu.be/hctApy_i-qg?si=SNyk99NWWoC3V1Iy",
          },
          {
            imgsrc:
              "movies-images/india1.jpg",
            title: "Mili",
            desc: "9-08-2006",
            link:"https://youtu.be/RX9sn_BRxZs?si=EXCPGjntwEsuhvfy",
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

export default Bollywood
