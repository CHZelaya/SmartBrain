import React from 'react'
import { Nav, Button } from "./navigationStyling"

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <Nav>
                <Button onClick={() => onRouteChange("signOut")}>Sign out</Button>
            </Nav>
        )
    } else {
        return (

            <Nav>

                <Button onClick={() => onRouteChange("SignIn")}>Sign In</Button>
                <Button onClick={() => onRouteChange("Register")}>Register</Button>

            </Nav>
        );
    }
}

export default Navigation