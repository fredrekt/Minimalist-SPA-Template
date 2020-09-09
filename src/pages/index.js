import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from 'mdbreact';
import Layout from '../components/Layout';
import {
    Card,
    StyledBody,
    StyledAction
  } from "baseui/card";
import { Button } from "baseui/button";
import { StyledLink } from "baseui/link";

const HomePage = () => {
    return (
        <Layout>
            <MDBContainer fluid>
                <MDBRow className="">
                    <MDBCol className="align-self-center py-lg-0 py-md-0 py-3 text-center">
                        <div className="w-75 mx-auto">
                            <h1 className="h1-responsive">Hello World</h1>
                            <p className="lead">This is useful if you want the menu to remain open across re-mounts, for example during SPA route changes.</p>
                            <Button>Get Started</Button>
                        </div>
                    </MDBCol>
                    <MDBCol className="px-0 py-lg-0 py-3 py-md-0" md="6" lg="6">
                        <img src="https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="w-100"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="my-5 py-5">
                <MDBRow className="my-5 py-5 align-items-center">
                    <MDBCol>
                        <h1 className="display-2">What is a Single Page Application?</h1>
                    </MDBCol>
                    <MDBCol>
                        <p className="h3-responsive">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus, lectus at tempor suscipit, magna 
                        orci feugiat nulla, a accumsan magna nibh non erat. Donec molestie nunc id eros fermentum imperdiet. Mauris 
                        consequat arcu ac elit convallis dignissim. Aliquam non pulvinar elit. Praesent varius libero erat, a auctor 
                        orci.
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-5 py-5">
                    <MDBCol>
                        <MDBJumbotron className="text-center">
                            <div className="content w-75 mx-auto">
                                <h2 className="h1 display-3">Minimalist Design</h2>
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
                            </div>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
                <section id="showcase-section">
                    <MDBRow className="py-5 my-5">
                        <MDBCol md="6" lg="6">
                            <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="w-100" alt=""/>
                            <div className="content py-4">
                                <h3 className="h3-responsive">Dossiere</h3>
                                <p className="lead">It uses utility classes for typgraphy and spacing to space content out
                                    within the larger container.
                                    This is a simple hero unit, a simple Jumbotron-style component for calling extra attention 
                                    to featured content or information.
                                </p>
                                <StyledLink href="https://baseweb.design">
                                Link to Base Web
                                </StyledLink>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt=""/>
                        </MDBCol>
                    </MDBRow>
                </section>
                <section id="features-section">
                    <MDBRow className="justify-content-center my-5 pt-5">
                        <MDBCol lg="4" md="4">
                            <h2 className="h1 display-3">Features</h2>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="pb-5 mb-5">
                        <MDBCol className="py-3 py-lg-0 py-md-0" md="3" lg="3">
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
                        <MDBCol className="py-3 py-lg-0 py-md-0" md="3" lg="3">
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
                        <MDBCol className="py-3 py-lg-0 py-md-0" md="3" lg="3">
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
                        <MDBCol className="py-3 py-lg-0 py-md-0" md="3" lg="3">
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
                </section>
                <section id="sponsors-section">
                    <MDBRow className="justify-content-center sponsors-section py-5 my-5 align-items-center">
                        <MDBCol md="3" lg="3" size="6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5ewsDZoRCfpIjI-pcrIdup9xEupmlzPHaow&usqp=CAU" alt="" className="w-100 sponsor-img"/>
                        </MDBCol>
                        <MDBCol md="3" lg="3" size="6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGm6Pu_QaUM5hq1_jilpB78lwb4JyuVJdQ7Q&usqp=CAU" alt="" className="w-100 sponsor-img"/>
                        </MDBCol>
                        <MDBCol md="3" lg="3" size="6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW-YmuDTCIwEYqVsyPHwWAs39csTJCRaG9Fw&usqp=CAU" alt="" className="w-100 sponsor-img"/>
                        </MDBCol>
                        <MDBCol md="3" lg="3" size="6">
                            <img src="https://www.finsmes.com/wp-content/uploads/2020/04/vercel.png" alt="" className="w-100 sponsor-img"/>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        </Layout>
    )
}

export default HomePage
