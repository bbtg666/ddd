import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import classnames from "classnames";
import axios from "axios";

import Tab2 from "./signup.js";
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.HandleEmailChange = this.HandleEmailChange.bind(this);
    this.HandlePasswordChange = this.HandlePasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      activeTab: "1",
      email: "",
      password: ""
    };
  }

  HandleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  HandlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }


  handleSubmit = async (e)=>{
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    const res = await axios.post("http://52.246.162.234:4000/user/signin", user,{
      headers: {
        "Content-Type": "application/json"
      }
    })
    sessionStorage.setItem('user', res.data.token);
    axios.defaults.headers.common["Authorization"] = res.data.token;
    this.props.history.push('/')
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Đăng nhập
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Đăng kí
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="m-3 col-8 col-sm-3 col-xl-2">
                  <Form className="" onSubmit={this.handleSubmit}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
                      <Label for="Email" className="mr-sm-2 ">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="abc@gmail.com"
                        onChange={this.HandleEmailChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-3">
                      <Label for="examplePassword" className="mr-sm-2">
                        Password
                      </Label>
                      <Input
                        type="password"
                        name="password"
                        onChange={this.HandlePasswordChange}
                        id="examplePassword"
                        placeholder="Nhật mật khẩu"
                        required
                      />
                    </FormGroup>
                    <Button
                      className="mt-3"
                      style={{ width: "120px" }}
                    >
                      Đăng nhập
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Tab2 />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
