import React , { Component }from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class Booklist extends Component {

   renderList () {
      return this.props.books.map((book) => {
         return (
            <li key={ book.title }
               onClick={() => this.props.selectBook(book)}
               className="list-group-item">
               { book.title }
            </li>
         )
      })
   }

   render() {
      return (
         <ul className="list-group col-sm-4">
            { this.renderList() }
         </ul>
      )
   }
}

//anything returnd from this function will end up as props to Booklist container
function mapStateToProps (state) {
   //whatever is returned will show up as props inside BOOKLIST
   return {
      books: state.books
   }
}

function mapDispatchToProps (dispatch) {
   //whenever seleectBook is called, result is passsed to reducers
   return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promote Booklist from component to containe -- iot needs to know about this new dispatch method. selecrtBook. makes it availabe as a prop

export default connect(mapStateToProps, mapDispatchToProps)(Booklist)
