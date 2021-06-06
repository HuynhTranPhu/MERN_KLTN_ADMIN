import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="">
        <div className="container">
          <div className="login-form" action="index.html">
            <div className="login-wrap">
              <p className="login-img">
                <i className="icon_lock_alt" />
              </p>
              <center>{this.props.notiLogin ? this.props.notiLogin: ''}</center>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-user " />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  autofocus
                  value={this.state.email}
                  onChange={(e) => this.setState({email: e.target.value})}
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="fas fa-key " />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.setState({password: e.target.value})}
                />
              </div>
              <div class="d-grid">
                  <button className="btn btn-primary rounded-pill "
                  onClick={() => this.props.loginSubmit(this.state.email, this.state.password)}>
                    Login
                  </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
