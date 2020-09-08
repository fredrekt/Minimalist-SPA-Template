import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from 'mdbreact';
import Layout from '../components/Layout';
import {
    Card,
    StyledBody,
    StyledAction
  } from "baseui/card";
import { Button } from "baseui/button";

const HomePage = () => {
    return (
        <Layout>
            <MDBContainer>
                <h1>Welcome to Homepage</h1>
            </MDBContainer>
            <MDBContainer className="my-5 py-5">
                <MDBRow>
                    <MDBCol md="4" lg="4">
                        <Card>
                            <StyledBody>
                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.
                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.
                            </StyledBody>
                            <StyledAction>
                                <Button
                                overrides={{
                                    BaseButton: { style: { width: "100%" } }
                                }}
                                >
                                Button Label
                                </Button>
                            </StyledAction>
                        </Card>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-5 py-5">
                    <MDBCol>
                        <MDBJumbotron>
                            <h2 className="h1 display-3">Hello, world!</h2>
                            <p className="lead">
                            This is a simple hero unit, a simple Jumbotron-style component for
                            calling extra attention to featured content or information.
                            </p>
                            <hr className="my-2" />
                            <p>
                            It uses utility classes for typgraphy and spacing to space content out
                            within the larger container.
                            </p>
                            <p className="lead">
                            <Button>Learn More</Button>
                            </p>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default HomePage
