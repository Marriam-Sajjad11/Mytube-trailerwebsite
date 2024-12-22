import React from 'react'
import "./Lollywood.css"
const Lollywood = () => {
    const Data=[
        {
            imgsrc:
              "movies-images/paki1.jpg",
            title: "Punjab Nahi Jaungi",
            desc: "9-08-2006",
            link:"https://youtu.be/z1AaNERuYHs?si=5mADM6njPJTHis6K",
          },
          {
            imgsrc:
              "movies-images/paki2.jpg",
            title: "Chupan Chupai",
            desc: "9-08-2006",
            link:"https://youtu.be/bLNJdceGgQ4?si=59fYeyOjgqVg_GPe",
          },
          {
            imgsrc:
              "movies-images/paki3.jpg",
            title: "MAULA JATT",
            desc: "9-08-2006",
            link:"https://youtu.be/pEWqOAcYgpQ?si=m3nyDJZOXcpUiAiK",
          },
          {
            imgsrc:
              "movies-images/paki4.jpg",
            title: "Jawani Phi Nahi Ani 2",
            desc: "9-08-2006",
            link:"https://youtu.be/TUM6liPArUE?si=IBIeTne3QAXUJtQ6",
          },
          {
            imgsrc:
              "movies-images/paki5.jpg",
            title: "Teefa In Trouble",
            desc: "9-08-2006",
            link:"https://youtu.be/jw5dTVTX9zo?si=OG_tvt5GlOLws9vN",
          },
          {
            imgsrc:
              "movies-images/paki6.jpg",
            title: "superstar",
            desc: "9-08-2006",
            link:"",
          },
          {
            imgsrc:
              "movies-images/paki7.jpg",
            title: "manto",
            desc: "9-08-2006",
            link:"https://youtu.be/QFbUei2DDhc?si=G0fpzMpfBVCPlCFJ",
          },
          {
            imgsrc:
              "movies-images/paki8.jpg",
            title: "cake",
            desc: "9-08-2006",
            link:"https://youtu.be/cr96skoXSuM?si=dmoFZu4uEB1IE5o8",
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

export default Lollywood
