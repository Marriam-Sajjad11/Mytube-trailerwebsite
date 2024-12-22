import React from 'react'
import"./Hollywood.css"
const Hollywood = () => {
    const Data=[
        {
            imgsrc:
              "movies-images/english8.jpg",
            title: "inception",
            desc: "9-08-2006",
            link:"https://youtu.be/8hP9D6kZseM?si=RjnecWb742KjB_1h",
          },
          {
            imgsrc:
              "movies-images/english7.jpg",
            title: "upside down",
            desc: "9-08-2006",
            link:"https://youtu.be/3veONCcRWbw?si=HPX7w99fYIaQNO5I",
          },
          {
            imgsrc:
              "movies-images/english6.jpg",
            title: "Dead Poets society",
            desc: "9-08-2006",
            link:"https://youtu.be/aQwVQzs9pHk?si=THis-NHOtbfqfRs7",
          },
          {
            imgsrc:
              "movies-images/english5.jpg",
            title: "through my window",
            desc: "9-08-2006",
            link:"https://youtu.be/5LvVaQPNqHU?si=eHMCVWYDOM3uXxux",
          },
          {
            imgsrc:
              "movies-images/english4.jpg",
            title: "CLUELESS",
            desc: "9-08-2006",
            link:"https://youtu.be/9Um1SvJvDLY?si=9Lj5ecfql-leLYs7",
          },
          {
            imgsrc:
              "movies-images/english3.jpg",
            title: "MEAN GIRLS",
            desc: "9-08-2006",
            link:"https://youtu.be/EMzEmGfTuM4?si=9UOoM7K2eaMSLlxk",
          },
          {
            imgsrc:
              "movies-images/english2.jpg",
            title: "The Fault In Our Stars",
            desc: "9-08-2006",
            link:"https://youtu.be/9ItBvH5J6ss?si=1dw_OXEsVtZHoY_D",
          },
          {
            imgsrc:
              "movies-images/english1.jpg",
            title: "Rescued By Ruby",
            desc: "9-08-2006",
            link:"https://youtu.be/-Pwxr307O4w?si=Q5wnfweZ4vMMM1da",
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

export default Hollywood
