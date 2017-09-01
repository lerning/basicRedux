import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
   render() {
      if (!this.props.book) {
         return <div>Please CLick on book to Get Started </div>
      }

      return (
         <div>
            <h3>Details for: </h3>
            <p> Title: { this.props.book.title } </p>
            <p> Page Count: { this.props.book.pages } </p>            
         </div>
      )
   }
}

   function mapStateToProps(state){
      return {
         book:state.activeBook
      }
   }

export default connect(mapStateToProps)(BookDetail)
