import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import oil from "../../Assets/Images/oil.jpg";
import grain from '../../Assets/Images/grain.jpg';
import driedFruits from '../../Assets/Images/driedFruits.jpg';
import container from '../../Assets/Images/containers.jpg'; 
import shaman from '../../Assets/Images/shaman.png'; 


const About = () => {
    const commodityArray = [grain, oil, driedFruits, container];

    const getCmdAltText = (image) => {
      switch (image) {
        case grain:
          return 'grain';
        case oil: 
          return 'vegetable oil';
        case driedFruits:
          return "Dried Fruits";
        case container:
          return 'containers';
        default:
          return 'unknown';  
      }
    }

    return (
        <>
        <Container>
          <Row>
               <Col>
                <div>
                  <h2>WHERE GLOBAL TRADE MEETS EXCELLENCE.</h2>
                </div>
                <p>Welcome to Relinars, your global trade partner for success! With a robust presence in Indonesia since 2012, 
                 we're more than just traders – we're your comprehensive business solution. Our track record of helping clients source goods and 
                launch brands worldwide makes us your trusted ally in international trade. Welcome to Relinars, 
                where global trade meets excellence!</p>
              </Col>
           </Row>
           <Row>
              <Col md={6}>
                <Carousel>
                  {commodityArray.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img 
                        className='we will see'
                        src={image}
                        alt={getCmdAltText(image)} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col md={6}>
                <div className='text-centre'>
                  <h2>COMMODITIES</h2>
                </div>
                <p>Discover a diverse range of commodities with Relinars! From BBQ coal to tea, coffee, sugar, coconuts, dried fruit, 
                and cooking oil. Plus, don't miss out on the exceptional hookah charcoal offered under the renowned Shaman brand.</p>

                <p>Our mission is all about building strong partnerships, fostering long-term connections that stand the test of time. 
                Join us in the exciting journey of connecting commodities, businesses, and best-selling brands!</p>
              </Col>
           </Row>
           <Row>
              <Col md={6}>
                <div className='text-centre'>
                  <h2>CHARCOAL & BBQ</h2>
                </div>
                <p>A crowning achievement in our journey is the remarkable success of the globally acclaimed Shaman® brand. 
                Shaman has achieved worldwide recognition, gracing the markets of over 35 countries through partnerships 
                with more than 300 diverse industry leaders.</p>

                <p>Exclusively crafted in the heart of Indonesia, Shaman's production is a testament to our commitment,
                 with over 100 tonnes of premium coconut-based charcoal meticulously crafted each month.</p>
              </Col>
              <Col>
                <Image src={shaman} alt='shaman charcoal box' fluid/>
              </Col>
           </Row>
      </Container>
      </>
    )
}

export default About;