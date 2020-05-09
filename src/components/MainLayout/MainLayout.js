import React, { Component } from "react";
import { Container } from "reactstrap";

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const title = this.props.title;
    document.title = title;
  }

  render() {
    console.log(this.props);
    const Children = this.props.children;
    return (
      <div>
        <Container><Children routerProps={this.props.routerProps}/></Container>
      </div>
    );
  }
}

export default MainLayout;
