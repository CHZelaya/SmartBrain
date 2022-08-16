import React from 'react'
import { RegisterContainer, Card } from "./RegisterStyling.js"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password

            })
        })
            .then(response => response.json())
            .then(user => {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
            )

    }

    render() {
        return (
            <RegisterContainer>
                <Card>
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" >Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange}

                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" >Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}

                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" >Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}

                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.onSubmitSignIn}
                                    className="pointer b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"
                                    value="Register"
                                />
                            </div>
                        </div>
                    </main>
                </Card>
            </RegisterContainer>
        );
    }
}

export default Register