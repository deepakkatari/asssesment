import React from 'react'
import { connect } from "react-redux";
import './login.css'
import Swal from 'sweetalert2'
import logo from './Images/information-security.jpg'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handlesubmit = () => {
        const { credentials } = this.props;
        const { userName, password } = this.state;
        if (userName === credentials.userName && password === credentials.password) {
            this.props.history.push('/employeeListPage')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'User not found!',
                timer: 3000
            })
        }
    }
    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handlesubmit();
        }
    }
    render() {
        return (
            <div className="admin-login">
                <div className="content">
                    <div className="container">
                        <div className="details">
                            <div className="left">
                                <img src={logo} />
                            </div>
                            <div className="right">
                                <h1>Login</h1>
                                <div className="form-field">
                                    <label>Email</label>
                                    <input
                                        style={{ width: '92%' }}
                                        type="text"
                                        id='userName'
                                        onChange={this.handleChange}
                                        onKeyDown={this.onKeyDown}
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Password</label>
                                    <input
                                        style={{ width: '92%' }}
                                        type="password"
                                        id='password'
                                        onChange={this.handleChange}
                                        onKeyDown={this.onKeyDown}
                                    />
                                </div>
                                <div className="form-field">
                                    <button type="submit" onClick={this.handlesubmit}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => ({
    credentials: state.Loginreducer.login
});
export default connect(mapStateToProps)(Login);

