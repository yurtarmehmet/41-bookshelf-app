import React from "react";
import {connect} from "react-redux";
import {Books} from "../../components";
import {getBooks} from "../../state/ducks/books/action";

class Homepage extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
      this.props.getBooks();
  }

  render(){
    if(this.props.loading){
      return <h1>BOOKS ARE LOADING...</h1>
    }
    return <div>
      <h3>Homepage</h3>
      <Books items={this.props.books}/>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading
  }
};

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
