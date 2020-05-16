import React from "react";
import {connect} from "react-redux";
import {Books, FilterSortBar} from "../../components";
import {getBooks} from "../../state/ducks/books/action";
import {Container,  Pagination, PaginationItem, PaginationLink, Button, ButtonGroup} from "reactstrap";
import {itemsPerPage} from "../../constants";

class Homepage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      activePage: 1,
      view: "cards"
    }
  }

  componentDidMount() {
      this.props.getBooks();
  }

  render(){
    if(this.props.loading){
      return <h1>BOOKS ARE LOADING...</h1>
    }
    const allBooks = this.props.books;
    let filteredBooks = [];
    /// Categorye gore filter
    if(this.props.filter){
      filteredBooks = allBooks.filter((book) => {
        return book.category === this.props.filter
      })
    }else{
      filteredBooks = allBooks;
    }

    /// Searchteme gore filter
    if(this.props.searchTerm){
      filteredBooks = filteredBooks.filter((book) => {
        return book.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1 || book.author.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1
      })
    }

    // Sorting
    let sortedBooks = [];
    if(this.props.sortTerm){
      sortedBooks = [...filteredBooks].sort((book1, book2) => {
         console.log(book1, book2, this.props.sortTerm);
          return parseInt(book2[this.props.sortTerm]) - parseInt(book1[this.props.sortTerm])
      });
    }else{
      sortedBooks = filteredBooks;
    }


    let books = "";
    if(sortedBooks.length < 1){
      books = <h2>NO BOOKS HERE</h2>
    }else{
      // 1 - 0,4
      // 2 - 4,8
      // 3 - 8,12
      books = <Books view={this.state.view} items={sortedBooks.slice(itemsPerPage * (this.state.activePage - 1),itemsPerPage * this.state.activePage)}/>;
    }
    const PaginationArray = new Array(Math.ceil(sortedBooks.length/ itemsPerPage));
    PaginationArray.fill(null);
    return <div>
      <FilterSortBar />
      <Container>
        <div>
          <h5>Views</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.setState({view: "cards"})}>Cards View</Button>
            <Button color="primary" onClick={() => this.setState({view: "list"})}>List View</Button>
          </ButtonGroup>
        </div>
        <div className="books-holder">
          {books}
        </div>

        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={this.state.activePage === 1}>
            <PaginationLink previous href="#" onClick={(e) => {
              e.preventDefault();
              this.setState({
                activePage: this.state.activePage -1
              })
            }}/>
          </PaginationItem>
          {
            PaginationArray.map((page, index) => {
                const pageNum = index + 1;
                return <PaginationItem active={pageNum === this.state.activePage}>
                  <PaginationLink href="#" onClick={(e) => {
                    e.preventDefault();
                    this.setState({activePage: pageNum});
                  }}>
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
            })
          }
          <PaginationItem disabled={this.state.activePage === PaginationArray.length}>
            <PaginationLink next href="#" onClick={(e) => {
              e.preventDefault();
              this.setState({
                activePage: this.state.activePage + 1
              })
            }}/>
          </PaginationItem>
        </Pagination>
      </Container>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading,
    filter: state.books.filter,
    searchTerm: state.books.searchTerm,
    sortTerm: state.books.sortTerm
  }
};

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
