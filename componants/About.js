import React from 'react' ;
import Image from 'next/image';
import omkarpic from './bg.jpg'
const About = () => {

    const Skill = (props) => {
        return (
            <div>
                <div className="skill">
                    <p className="skill-name">{props.name}</p>
                    <div className="progress">
                        <div id={props.id} className="progress-bar progress-bar-striped  progress-bar-animated" >{props.percent}</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <h1 id="about" className="text-center p-4 pb-0"> About Us </h1>
 
            <div className="container" >
                <div className="row">
                    <div  className="about-text text-center col-xl-6 col-sm-12 p-5 ">
                        <Image style={{borderRadius:"50%"}} src={omkarpic} width="300px" height="300px" alt="picture of omkar"/>
                        <h1> Who's this guy?</h1> 
                        <p> I'm a Full Stack Web Developer ,
                        I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                    </div>

                    <div  className="text-center d-flex flex-column justify-content-center  col-xl-6 col-sm-12 ">

                        <div className="skills-box">
                            <Skill id="html" name="HTML" />
                            <Skill id="css" name="CSS & Sass" />
                            <Skill id="javascript" name="Javascript" />
                            <Skill id="bootstrap" name="Bootstrap" />
                            <Skill id="jq" name="jQuery" />
                            <Skill id="react" name="React js" />
                            <Skill id="node" name="Node Js" />
                            <Skill id="mongo" name="MongoDB" />
                        </div> 
                    </div> 
                </div>
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12  ">
                        <div className="boxshadow">
                            <i className="fa fa-rocket"></i>
                            <h2>Fast</h2>
                            <p>Fast load times and lag free interaction, my highest priority.</p>
                        </div>
                    </div>
                    <div  className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
                        <div className="boxshadow">
                            <i className="fa fa-mobile-phone"></i>
                            <h2>Responsive</h2>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                    <div  className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12   ">
                        <div className="boxshadow">
                            <i className="fa fa-lightbulb-o"></i>
                            <h2>Intuitive</h2>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                    </div>
                    <div className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div  className="boxshadow">
                            <i className="fa fa-rocket"></i>
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                </div>
                <div  id="projects"></div>
            </div>

        </div>
    )
}

export default About;