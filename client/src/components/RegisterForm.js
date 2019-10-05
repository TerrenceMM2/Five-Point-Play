import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

// MaterialUI Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// React Components
import Alert from "../components/Alert";

// React APIs
import API from "../utils/API";

export default class RegisterForm extends Component {

    styles = {
        secButton: {
            marginTop: "1rem",
            marginRight: "1.7rem",
            float: "right"
        },
        defButton: {
            marginTop: "1rem",
            marginLeft: "1.7rem",
            float: "left"
        },
        register: {
            width: "80%"
        }
    }

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        alertShow: false,
        alertTitle: "",
        alertBody: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    handleSubmitForm = () => {
        let newSignup = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        API
            .signup(newSignup)
            .then(res => this.setState({redirect: true}))
            .catch(err => this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                alertTitle: err.response.data.msgTitle,
                alertBody: err.response.data.msgBody,
                alertShow: true}));
    };

    handleClose = () => {
        this.setState({alertShow: false})
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to='/login'/>;
        }

        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="first-name"
                        label="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        margin="normal"
                        style={this.styles.register}/>
                    <TextField
                        id="last-name"
                        label="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        margin="normal"
                        style={this.styles.register}/>
                    <TextField
                        id="email"
                        label="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        margin="normal"
                        style={this.styles.register}/>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        margin="normal"
                        style={this.styles.register}/>
                    <Button
                        onClick={this.handleSubmitForm}
                        color={"secondary"}
                        variant="contained"
                        style={this.styles.secButton}
                        >Register</Button>
                    <Button
                        component={Link}
                        to={"/login"}
                        color={"default"}
                        variant="contained"
                        style={this.styles.defButton}
                        >Cancel</Button>
                </form>
                <Alert
                    alertTitle={this.state.alertTitle}
                    handleClose={this.handleClose}
                    open={this.state.alertShow}
                    alertBody={this.state.alertBody}/>
            </div>
        )
    }
}
