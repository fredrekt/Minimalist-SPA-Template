import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '../components/Layout'

const AboutPage = () => {
    return (
        <Layout>
            <MDBContainer className="py-5 my-5">
                <MDBRow>
                    <MDBCol>
                        <h1 className="display-3">About Brand</h1>
                        <p className="h3-responsive">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus, lectus at tempor suscipit, magna 
                        orci feugiat nulla, a accumsan magna nibh non erat. Donec molestie nunc id eros fermentum imperdiet. Mauris 
                        consequat arcu ac elit convallis dignissim. Aliquam non pulvinar elit. Praesent varius libero erat, a auctor 
                        orci.
                        </p>
                        <p className="h3-responsive">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus, lectus at tempor suscipit, magna 
                        orci feugiat nulla, a accumsan magna nibh non erat. Donec molestie nunc id eros fermentum imperdiet. Mauris 
                        consequat arcu ac elit convallis dignissim. Aliquam non pulvinar elit. Praesent varius libero erat, a auctor 
                        orci.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default AboutPage
