import './About.css'

import AboutImg from '../../image/top.jpg';
const About = () => {
  return (
    <section id='about'>

        <div className="container about">
        <h2 data-aos="fade">About Us</h2>
        
        <p className="u-text-small" data-aos="fade-down">
        We are dedicated to providing a wide variety of childcare services to parents and their children, while also increasing the skills and basic knowledge of your children.
        </p>

        <div className="abouts">

        <div className="about-left" data-aos="fade-right">
            <img src={AboutImg} alt="" />
        </div>


        <div className="about-right" data-aos="fade-left">
        <p className="u-text-small">
        At Kinderex, our mission is to provide excellence in preschool, kindergarten, before and after school programs and summer camp for families living in the greater local area. Here you’ll find exceptional teachers, curriculum and learning environments that encourage children to learn, play, and explore in a safe, healthy, and nurturing environment promoting creative thinking.
        </p>


        <div className="progress">
            <div className="technique">
                <h4>Preschool Education</h4>
                <div>
                    <span style={{width:"90%"}}>90% &nbsp;</span>
                </div>

                <h4>Summer Programs</h4>
                <div>
                    <span style={{width:"70%"}}>70% &nbsp;</span>
                </div>

               


            </div>
        </div>
        </div>
        
        </div>
        
        
        </div>

    </section>
  )
}

export default About