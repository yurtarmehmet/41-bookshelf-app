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
        <Children routerProps={this.props.routerProps} componentProps={this.props.componentProps}/>
      </div>
    );
  }
}

export default MainLayout;
