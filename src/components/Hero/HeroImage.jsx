import {  Container, Carousel } from 'react-bootstrap';
import CoffeeImage from "../../Assets/Images/coffee.jpg"; 
import TeaImage from '../../Assets/Images/tea.jpg';
import CharcoalImage from '../../Assets/Images/charcoal.jpg'; 

const HeroImage = ({Title, subTitle}) => {
    //creates an array of images 
    const imagesArray =[CharcoalImage, CoffeeImage, TeaImage]; 

    // give alt text to every image 
    const getAltText = (image) => {
        switch (image) {
          case CoffeeImage:
            return 'Coffee';
          case TeaImage:
            return 'Tea';
          case CharcoalImage:
            return 'Charcoal';
          default:
            return 'Unknown';
        }
      };

    return(
        <>
         <div className="hero-container">
            <Container fluid className="p-0">
                <Carousel>
                    {imagesArray.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img 
                                className="d-block w-100" 
                                src={image} 
                                alt={getAltText(image)} />
                            <div className="carousel-caption">
                                <h1>{Title}</h1>
                                <p className='carousel-subtitle'>{subTitle}</p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
        </>
    )
}

export default HeroImage; 