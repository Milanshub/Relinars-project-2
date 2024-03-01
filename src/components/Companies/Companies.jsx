import { Container,Row, Col } from 'react-bootstrap';
import shamanLogo from '../../Assets/Images/shamanLogo.png';
import tenfaceLogo from '../../Assets/Images/tenfaceLogo.png';
import salatigaLogo from '../../Assets/Images/salatigaLogo.png';

const CompanyInfo = () => {
    const companies = 
    [
        {
            name: 'Shaman Coal',
            logo: shamanLogo,
            description: 'Best Selling & Award-Winning Charcoal.'
        },
        {
            name: 'PT. Tenface Energi Nusantara',
            logo: tenfaceLogo,
            description: "(Formerly known as  PT. Ekapusaka Mahardhika Charcoal Indonesia) Leading Charcoal Production  & Export.",
        },
        {
            name: 'CV. MAS',
            logo: salatigaLogo,
            description: "Salatiga Charcoal & BBQ Coal Production."
        }
    ]

    return(
        <Container className='component'>
            <div className='text-centre'>
                <h2>OUR COMPANIES AND INVESTMENTS.</h2>
            </div>
            <Row>
                {companies.map((company,index) => (
                    <Col key={index} md={4} className='text-center mb-4'>
                        <img src={company.logo} alt={company.name} fluid/>
                        <h3>{company.name}</h3>
                        <p>{company.description}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CompanyInfo; 