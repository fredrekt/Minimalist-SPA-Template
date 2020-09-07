import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Button } from 'baseui/button';

const HomePage = () => {
    return (
        <div>
            <MDBContainer>
            {/* <MDBBtn color="dark">Hello</MDBBtn> */}
            <Button onClick={() => alert("click")}>Hello</Button>
            </MDBContainer>
        </div>
    )
}

export default HomePage
