import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '../components/Layout'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { Textarea } from "baseui/textarea";
import ArrowRight from 'baseui/icon/arrow-right';
import { Accordion, Panel } from "baseui/accordion";

const ContactPage = () => {
    return (
        <Layout>
            <MDBContainer>
                <h1 className="display-3">Get in Touch</h1>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <form action="">
                        <div className="py-3">
                            <Input placeholder="Your Name"/>
                        </div>
                        <div className="py-3">
                            <Input placeholder="Your Email"/>
                        </div>
                        <div className="py-3">
                            <Input placeholder="Your Subject"/>
                        </div>
                        <div className="py-3">
                            <Textarea
                            placeholder="Your Message"
                            clearOnEscape
                            />
                        </div>
                        <div className="py-3">
                            <Button endEnhancer={() => <ArrowRight size={24}/>}>Send Message</Button>
                        </div>
                        </form>
                    </MDBCol>
                    <MDBCol>
                        <div className="w-75 ml-auto">
                            <h3 className="h3-responsive">FAQs</h3>
                            <Accordion
                            onChange={({ expanded }) => console.log(expanded)}
                            >
                            <Panel title="Question 1">Content 1</Panel>
                            <Panel title="Question 2">Content 2</Panel>
                            <Panel title="Question 3">Content 3</Panel>
                            </Accordion>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default ContactPage
