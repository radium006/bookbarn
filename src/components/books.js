import React, { Component } from 'react';
import BookService from './bookService.js'
import './books.css'

 const IMG_URL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'


export class BOOKS extends Component {

  render() {

    let booklist = BookService.getAllBooks()

    console.log(booklist)

    let books = booklist.map(function(book, index){
        return <div className="book-entry"><li> <lable>Title: {book.title} </lable>
                    <p>Author: {book.author}</p>
                    <img src= {`${IMG_URL}${book.imageLink}`} />
                    <p>Language: {book.language}<br/>
                    Country: {book.country}<br/>
                    Year: {book.year} <br/>
                    Pages: {book.pages}</p>
                    <a href={book.link}>Wikipedia Page</a>
                </li></div>
    })

    return (
      <div className ="book-list">
        <ul>{books}</ul>
      </div>
    )
  }

}


export default BOOKS
