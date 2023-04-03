import { createStyles } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "../component/Layouts/Layout";
import React from "react";


const CV: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      Download my resume : PDFLogo
      Contact-me : 07 82 96 24 30 or mario.larsen@ensea.fr
      <div className={classes.title}>MARIO LARSEN</div>
      <div className={classes.subTitle}>Young and talented French Engineer looking for an interesting job in the field of AI research, Web and Mobile development or Electronic design.</div> 
      <div className={classes.listTitle}>EXPERIENCES</div>
      <ul className={classes.list}>
        <li>2022–2023	GALADRIM   —   6 month contract           France, Paris
  
  Activity: Web-Devolper Full-Stack Web Mobile
  Result : 7 web and mobile application built and deployed</li>
        <li>2021		CEA-LIST / DIASI: AI Department in Laboratory   —   6 month internship             France, Saclay
  
  Objective : Unifying detection and re-identification in a single deep network architecture for multiple object tracking
  Result : Our new visual transformer algorithm simplifies current approaches while performing better than the baseline model.
  </li>
        <li>2020		University of Ljubljana   —   4 month internship             Slovenia, Ljubljana
  
  Objective : Virtual Try-On Networks independent study and implementation
  Result : Technical and popularized report around CP-VTON failure, quality, measurement, dataset, and update.</li>
        <li>2020		ENSEA Laboratories, Themis   —   7 month research project             France, Cergy
  
  Themis is a collaborative project theme proposed to a group of about a dozen ENSEA students from the 3 years of the engineering cycle. Objective : Design from A to Z an electronic musical instrument of synthesizer/drum-machine type. 
  Result : 3 PCB designs of the synthesizer main board realized and printed in autonomy.</li>
      </ul>


      <div className={classes.listTitle}>EDUCATION</div>
      <ul className={classes.list}>
        <li>2018 - 2022 	ENSEA, École Nationale Supérieur de l'Électronique 
  et de ses applications   —   3-year Master's program             France, Cergy
  
  Leading French graduate school in electrical engineering, computer science and communication network.
  More than 10 school professional projects were completed, such as Reinforcement Learning Solver or Relation Network Video Classifier.
  Result : Graduated in major signal and artificial intelligence;</li>
        <li>2016 - 2018 	CIV, Centre International de Valbonne   —   2-year             France, Valbonne
  
  Intensive courses to prepare nationwide competitive exams for the top French engineering schools (GEs)
  Result : Qualified for Centrale-Supélec, Mines-Télécom and Concours Communs Polytechniques schools. </li>
        <li>2013 - 2016 	Parc Impérial   —   High-School             France, Nice
  
  Baccalaureate specialized in sciences - equivalent A-levels in math with honors</li>
      </ul> 

      <div className={classes.listTitle}>IT SKILLS</div>
      <ul className={classes.list}>
        <li>Deep Learning</li>
        <li>Machine Learning</li>
        <li>Schematic, board, and chip design</li>
        <li>Image, audio, signal and video processing</li>
        <li>Telecommunication</li>   
        <li>Modeling languages</li>   
        <li>Optimization and noise reduction</li>   
        <li>Database related skills</li>   
        <li>Git handling</li>   
        <li>Web development</li>   
        <li>Mobile development</li>   
        <li>Agile Methods</li>   
        <li>Team Leader and project management</li>   
        <li>App Deployment</li>   
      </ul>

      <div className={classes.listTitle}>Programming languages</div>
      <ul className={classes.list}>
        <li>Python</li>
        <li>Matlab</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML</li>   
        <li>CSS</li>   
        <li>C</li>   
        <li>C#</li>   
        <li>VHDL</li>   
        <li>Mathematica</li>   
        <li>primary assembler</li>   
        <li>React</li>   
        <li>React Native</li>   
        <li>AWS console</li>   
        <li>TypeScript</li>   
        <li>SQL</li>   
        <li>Docker</li>   
        <li>prompt engineering</li> 
        <li>Excel</li>   
      </ul> 


      <div className={classes.listTitle}>FOREIGN LANGUAGES</div>
      <ul className={classes.list}>
        <li>French : 		★★★★★ native speaker    </li>
        <li>English : 	★★★★★ fluent speaker with TOEIC - jan. 2019    </li>
        <li>Spanish :	★★★☆☆ intermediate level</li>
      </ul>

      <div className={classes.listTitle}>PERSONAL INTERESTS</div>
      <ul className={classes.list}>
        <li>Following advanced courses from neurology, advanced math and philosophy to fundamental physic, poetry, and epistemology</li>
        <li>AI implementation</li>
        <li>Mobile game and web-app design and development</li>
        <li>Weekly PSL presentation and vulgarization</li>
        <li>Film directing, making and writing for school and personal interest</li>
        <li>School delegate and secretary</li>
        <li>Running</li>
        <li>Various association key members such as president, team manager, events organization and debate master 
  for student life, international film festival, gaming festival, public debate, international meeting and hackathon</li>
      </ul>
    </Layout>
  );
};

const useStyles = createStyles((theme) => ({
  title : {
    textAlign: "center",
    fontSize: "2em",
    fontWeight : "bold",
    marginTop: 10,
  },
  subTitle : {
    textAlign: "center",
    fontSize: "1em",
    fontStyle : "italic",
    marginTop: 10,
  },
  listTitle : {},
  list: {},
}));

export default CV;
