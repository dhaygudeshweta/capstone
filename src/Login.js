import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { withRouter } from "react-router-dom";
import api from "./axios";

class Login extends Component {
  //  history = useHistory();
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  redirect = () => {
    const { history } = this.props;
    console.log(this);
    if (history) history.push("/info");
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    alert("login sucessfully");
    this.setState({
      email: "",
      password: "",
    });
    this.loginInfo();

    event.preventDefault();
  };

  loginInfo = async () => {
    // console.log(this.state);
    // alert("login sucessfully");
    // this.setState({
    //   email: "",
    //   password: "",
    // });

    
    var data = await api
      .post("/user/login", this.state)
      .then((res) => {
        console.log(res.data);
        this.redirect();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0i8ilFf2usonsLDFkbFQqXTuYq--BVkdn1Q&usqp=CAU"
            alt="logo"
          />
        </Link>
        <form onSubmit={this.handleSubmit}>
          <h1>SignUp Page</h1>
          <label>Email :</label>{" "}
          <input
            className="login1"
            type="text"
            value={this.state.email}
            onChange={this.emailhandler}
            placeholder="email..."
          />
          <br />
          <label>Password :</label>{" "}
          <input
            className="login2"
            type="password"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Password..."
          />
          <br />
          {/* <Link to="/info"> */}
            <input
              className="login3"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          {/* </Link> */}
        </form>
        <div className="login_btn">
          <Link to="/SignUp">
            <button className="btn">Create an account</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;