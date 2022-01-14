import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Image from 'next/image';
import Link from 'next/link';

const SpacexPosts = ({launches}) => {
    return (
        <>
        {launches.map((launch) => (
            
            <MDBCard className='mb-3 mr-3' style={{ maxWidth: '22rem'}} key={launch.id}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <Image width={450} height={200} objectFit='cover' src={launch.links.flickr_images[0]} alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{launch.mission_name}</MDBCardTitle>
                <MDBCardText>
                {launch.details.slice(0,94)}...
                </MDBCardText>
                <Link href={`launches/${launch.id}`}><MDBBtn >Read more</MDBBtn></Link>
            </MDBCardBody>
            </MDBCard>
        ))}

        </>
    )
}
export default SpacexPosts

