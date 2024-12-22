import React from 'react'
import "./Horror.css"
const Horror = () => {
    const Data=[
        {
            imgsrc:
              "movies-images/horror8.webp",
            title: "THE conjuring",
            desc: "9-08-2006",
            link:"https://youtu.be/ejMMn0t58Lc?si=aRQmE28YQEZQuL0m",
          },
          {
            imgsrc:
              "movies-images/horror7.jpg",
            title: "The ritual",
            desc: "9-08-2006",
            link:"https://youtu.be/rsZkHrIFJxQ?si=55c6K1iLg6DKN5sp",
          },
          {
            imgsrc:
              "movies-images/horror6.jpg",
            title: "good bye",
            desc: "9-08-2006",
            link:"https://youtu.be/n5gICDMQOcA?si=mGwN4Om3qLp7cQvQ",
          },
          {
            imgsrc:
              "movies-images/horror5.jpg",
            title: "d@bbe The Possession",
            desc: "9-08-2006",
            link:"https://youtu.be/lwZpZFiMS-s?si=pf9q8RCHbWUwfoiT",
          },
          {
            imgsrc:
              "movies-images/horror4.jpg",
            title: "QoRin",
            desc: "9-08-2006",
            link:"https://youtu.be/DYbS1FXAxEs?si=gZ20F0mYuuwxCuO0",
          },
          {
            imgsrc:
              "movies-images/horror3.jpg",
            title: "VERONICA",
            desc: "9-08-2006",
            link:"https://youtu.be/4OfT3YoQM-4?si=UmxIpDpNKCBQU5_A",
          },
          {
            imgsrc:
              "movies-images/horror2.jpg",
            title: "INSIDIOUS THE RED DOOR",
            desc: "9-08-2006",
            link:"https://youtu.be/ZuQuOnYnr3Q?si=AqXsj-rnJ3jbCiRU",
          },
          {
            imgsrc:
              "movies-images/horror1.jpg",
            title: "THE NUN",
            desc: "9-08-2006",
            link:"https://youtu.be/QF-oyCwaArU?si=8SsoAVJ6ZwLak4uS",
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

export default Horror
