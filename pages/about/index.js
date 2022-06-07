import Head from 'next/head'
import Timeline from '../../components/Timeline';
import Bio from '../../components/Bio';


export default function About() {
    
  return (
    <div>
    <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>
        <Bio
          
        />
      </div> */}
      <div>
        <h1>
          Before Code
        </h1>
      </div>
      <div className="timelineContainer">
        <Timeline 
          time = "2015-2016"
          content = "Volunteered in several different positions during the height of the refugee crisis, in Greece and Lebanon."
        />
         <Timeline 
          time = "2017"
          content = "Worked as supervisor for the local team, at a Norwegian green energy company, in Antananarivo, Madagascar."
        />
         <Timeline 
          time = "2018-2020"
          content = "Studied at Leiden University, receiving my bachelors degree in International Relations and Organisations."
        />
        </div>
        <div>
        <h1>
          After Code
        </h1>
      </div>
      <div className="timelineContainer">
        <Timeline 
          time = "2020"
          content = "Wrote my first lines of code in August. Instantly fell in love with programming. Spent most of my time developing my own skills, and building web sites and different tools, as I finished my bachelor's degree in International Relations."
        />
         <Timeline 
          time = "2021"
          content = "Still writing code every day and building out my portfolio. Been taking on several projects as a freelance developer. Focusing mainly on improving my skills in ReactJS, and different developer tools."
        />
         <Timeline 
          time = "2022"
          content = "Started working full time as a software developer for the Norwegian Red Cross. Contributing to develop an application focusing on early detection warning of disease outbreak."
        />
        </div>
    </div>
  )
}

