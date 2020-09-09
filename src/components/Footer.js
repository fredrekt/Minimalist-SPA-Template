import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-5 mt-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Subscribe Newsletter</h5>
            <p className="w-responsive">Secondary buttons should be used in combination with a primary button as a way to create action hierarchy.</p>
            <MDBRow>
              <MDBCol className="" md="8" lg="8">
                <Input placeholder="Your Email"/>
              </MDBCol>
              <MDBCol className="px-0 py-3 py-lg-0 py-md-0">
                <Button kind={KIND.secondary}>Submit</Button>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="6">
            <MDBRow>
              <MDBCol md="3" lg="3">
                <h5 className="title">Links</h5>
                <ul className="list-unstyled">
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3" lg="3">
                <h5 className="title">Links</h5>
                <ul className="list-unstyled">
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3" lg="3">
                <h5 className="title">Links</h5>
                <ul className="list-unstyled">
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3" lg="3">
                <h5 className="title">Follow</h5>
                <ul className="d-flex list-unstyled justify-content-between">
                  <li className="list-unstyled">
                    <a href="#!"><MDBIcon fab icon="facebook-f" className="white-text"/></a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!"><MDBIcon fab icon="instagram" className="white-text" /></a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!"><MDBIcon fab icon="github" className="white-text" /></a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!"><MDBIcon fab icon="twitter" className="white-text" /></a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;