import React from 'react'
import "./All.css"
const All = () => {
    const Data = [
      // section 1
        {
          imgsrc:
            "movies-images/english1.jpg",
          title: "Rescued By Ruby",
          desc: "9-08-2006",
          link:"https://youtu.be/-Pwxr307O4w?si=Q5wnfweZ4vMMM1da",
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
            "movies-images/paki1.jpg",
          title: "Punjab Nahi Jaungi",
          desc: "9-08-2006",
          link:"https://youtu.be/z1AaNERuYHs?si=5mADM6njPJTHis6K",
        },
        {
          imgsrc:
            "movies-images/action1.jpg",
          title: "X-FAST",
          desc: "9-08-2006",
          link:"https://youtu.be/eoOaKN4qCKw?si=bZuTkvRPuNu_vtwW",
        },
        {
          imgsrc:
            "movies-images/horror1.jpg",
          title: "THE NUN",
          desc: "9-08-2006",
          link:"https://youtu.be/QF-oyCwaArU?si=8SsoAVJ6ZwLak4uS",
        },
        {
          imgsrc:
            "movies-images/funny1.jpg",
          title: "FREE GUY",
          desc: "9-08-2006",
          link:"https://youtu.be/X2m-08cOAbc?si=-PnS7HIoDjhvX_8J",
        },
        {
          imgsrc:
            "movies-images/india1.jpg",
          title: "Mili",
          desc: "9-08-2006",
          link:"https://youtu.be/RX9sn_BRxZs?si=EXCPGjntwEsuhvfy",
        },
        // section 2
        {
          imgsrc:
            "movies-images/india2.jpg",
          title: "MOM",
          desc: "9-08-2006",
          link:"https://youtu.be/hctApy_i-qg?si=SNyk99NWWoC3V1Iy",
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
            "movies-images/horror2.jpg",
          title: "INSIDIOUS THE RED DOOR",
          desc: "9-08-2006",
          link:"https://youtu.be/ZuQuOnYnr3Q?si=AqXsj-rnJ3jbCiRU",
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
            "movies-images/action2.jpg",
          title: "THE NORTHMAN",
          desc: "9-08-2006",
          link:"https://youtu.be/oMSdFM12hOw?si=wH_fVtASfSUEfRvm"
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
            "movies-images/punjabi2.jpg",
          title: "Angrej",
          desc: "9-08-2006",
          link:"https://youtu.be/2jcbSzoPNVA?si=XQmwdOO7caMgJFjJ",
        },
        // section 3
        {
          imgsrc:
            "movies-images/india3.jpg",
          title: "ae dil hai Mushkil",
          desc: "9-08-2006",
          link:"https://youtu.be/Z_PODraXg4E?si=qMMtLQ6VJMJii3cZ",
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
            "movies-images/horror3.jpg",
          title: "VERONICA",
          desc: "9-08-2006",
          link:"https://youtu.be/4OfT3YoQM-4?si=UmxIpDpNKCBQU5_A",
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
            "movies-images/action3.jpg",
          title: "Avengers",
          desc: "9-08-2006",
          link:"https://youtu.be/eOrNdBpGMv8?si=4QrDRFBalgaxsIgY",
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
            "movies-images/punjabi3.jpg",
          title: "Honeymoon",
          desc: "9-08-2006",
          link:"https://youtu.be/Z0uAhXV9Wpc?si=tsZ3-szaFp9amSfd",
        },
        // section 4
        {
          imgsrc:
            "movies-images/india4.jpg",
          title: "NAAM SHABANA",
          desc: "9-08-2006",
          link:"https://youtu.be/upyeAQv4pUs?si=HPngrffo-lodO9zq",
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
            "movies-images/horror4.jpg",
          title: "QoRin",
          desc: "9-08-2006",
          link:"https://youtu.be/DYbS1FXAxEs?si=gZ20F0mYuuwxCuO0",
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
            "movies-images/action4.jpg",
          title: "Everything Everywhere All At Once",
          desc: "9-08-2006",
          link:"https://youtu.be/wxN1T1uxQ2g?si=gYCTRkEZtZjgfZp3",
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
            "movies-images/punjabi4.jpg",
          title: "Lahoriye",
          desc: "9-08-2006",
          link:"https://youtu.be/0owS3euUNtk?si=Qyk2WJBDLv_y-A5g",
        },
        // section 5
        {
          imgsrc:
            "movies-images/india5.jpg",
          title: "Haseena Dilruba",
          desc: "9-08-2006",
          link:"https://youtu.be/lt_bDfnXKGM?si=W-Xt7uslIZYIRq2u",
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
            "movies-images/horror5.jpg",
          title: "d@bbe The Possession",
          desc: "9-08-2006",
          link:"https://youtu.be/lwZpZFiMS-s?si=pf9q8RCHbWUwfoiT",
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
            "movies-images/action5.jpg",
          title: "Kate",
          desc: "9-08-2006",
          link:"https://youtu.be/MysGjRS9jFU?si=0xweMuQ-vebITdk-",
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
            "movies-images/punjabi5.jpg",
          title: "LOVE Punjab",
          desc: "9-08-2006",
          link:"https://youtu.be/1lTWvdYxUMk?si=5_ovN891LMLkiJ0l",
        },
        // section 6
        {
          imgsrc:
            "movies-images/english6.jpg",
          title: "Dead Poets society",
          desc: "9-08-2006",
          link:"https://youtu.be/aQwVQzs9pHk?si=THis-NHOtbfqfRs7",
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
            "movies-images/paki6.jpg",
          title: "superstar",
          desc: "9-08-2006",
          link:"",
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
            "movies-images/horror6.jpg",
          title: "good bye",
          desc: "9-08-2006",
          link:"https://youtu.be/n5gICDMQOcA?si=mGwN4Om3qLp7cQvQ",
        },
        {
          imgsrc:
            "movies-images/funny6.jpg",
          title: "welcome",
          desc: "9-08-2006",
          link:"https://youtu.be/AKiynoClCaA?si=C2Z1W7xDN0OCoAP0",
        },
        {
          imgsrc:
            "movies-images/india6.jpg",
          title: "Badla",
          desc: "9-08-2006",
          link:"https://youtu.be/xHWQiok-ei0?si=GFwY6lun7OSSF9jt",
        },
        // section 7
        {
          imgsrc:
            "movies-images/english7.jpg",
          title: "upside down",
          desc: "9-08-2006",
          link:"https://youtu.be/3veONCcRWbw?si=HPX7w99fYIaQNO5I",
        },
        {
          imgsrc:
            "movies-images/punjabi7.jpg",
          title: "Lekh",
          desc: "9-08-2006",
          link:"https://youtu.be/4q8w7706paY?si=45V6z3l6Dceaj9Yx",
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
            "movies-images/action7.jpg",
          title: "civil war",
          desc: "9-08-2006",
          link:"https://youtu.be/dKrVegVI0Us?si=Fnedn0L9GLLLV15v",
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
            "movies-images/funny7.jpg",
          title: "21 jump street",
          desc: "9-08-2006",
          link:"https://youtu.be/RLoKtb4c4W0?si=ewTNc4LVY1lvfN8B",
        },
        {
          imgsrc:
            "movies-images/india7.jpg",
          title: "ittefaq",
          desc: "9-08-2006",
          link:"https://youtu.be/mvfvoCdPrII?si=2_4m7OoqrmhZ36BS",
        },
        // section 8
        {
          imgsrc:
            "movies-images/english8.jpg",
          title: "inception",
          desc: "9-08-2006",
          link:"https://youtu.be/8hP9D6kZseM?si=RjnecWb742KjB_1h",
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
            "movies-images/paki8.jpg",
          title: "cake",
          desc: "9-08-2006",
          link:"https://youtu.be/cr96skoXSuM?si=dmoFZu4uEB1IE5o8",
        },
        {
          imgsrc:
            "movies-images/action8.jpg",
          title: "extraction",
          desc: "9-08-2006",
          link:"",
        },
        {
          imgsrc:
            "movies-images/horror8.webp",
          title: "THE conjuring",
          desc: "9-08-2006",
          link:"https://youtu.be/ejMMn0t58Lc?si=aRQmE28YQEZQuL0m",
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
            "movies-images/india8.jpg",
          title: "gangubai",
          desc: "9-08-2006",
          link:"https://youtu.be/N1ZwRv3vJJY?si=YSHEuB2dDyN-vTfg",
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

export default All
