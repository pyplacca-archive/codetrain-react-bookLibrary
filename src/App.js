import React from 'react';
import './App.css';
import Book from './components/book.js'
import AddModal from './components/modal.js'


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            modal : 'hide',
            books : []
        }

        this._title    = React.createRef()
        this._author   = React.createRef()
        this._synopsis = React.createRef()
        this._cover    = React.createRef()

        this.addBookToLibrary = this.addBookToLibrary.bind(this)
        this.openAddModal     = this.openAddModal.bind(this)
        this.closeAddModal     = this.closeAddModal.bind(this)
    }

    openAddModal() {
        // clear input values
        this._title.current.value    = ''
        this._author.current.value   = ''
        this._synopsis.current.value = ''
        this._cover.current.value    = ''
        this._synopsis.current.setAttribute('rows', '1')

        this.setState({modal: 'show'})
        this._title.current.focus()
    }

    addBookToLibrary(event) {
        event.preventDefault()
        this.closeAddModal()

        this.setState({
            books: [...this.state.books, {
                title    : this._title.current.value,
                author   : this._author.current.value || 'Unknown author',
                synopsis : this._synopsis.current.value || 'No description',
                cover    : this._cover.current.files[0],
            }],
        })
    }

    closeAddModal () {
        this.setState({modal: 'hide'})
    }

    render() {
        return (
            <div className={"Library modal-" + (
                this.state.modal === 'show' ? 'active' : 'inactive'
            )}>
                <AddModal 
                    cls={this.state.modal} 
                    submit={this.addBookToLibrary} 
                    cancel={this.closeAddModal} 
                    title_ref={this._title} 
                    author_ref={this._author}
                    synopsis_ref={this._synopsis}
                    cover_ref={this._cover}
                />
                <main className={this.state.books.length > 0 ? 'not-empty' : 'empty'}>
                    <nav>
                        <img src="./img/books.png" alt="books"/>
                        <h2>Book Library</h2>
                    </nav>
                    <div className="empty-state">
                        <img src="./img/library.png" alt="girl-sitting-on-bookpile-and-reading" />
                        <p>
                            Your library seems to be empty
                            <br/>
                            <small>Click on the button below to build your library</small>
                        </p>
                    </div>
                    {/* books container */}
                    <div className="books">
                        {
                            this.state.books.map(
                                (item, i) => <Book {...item} key={i} />
                            )
                        }
                    </div>

                    {/* Add button */}
                    <button 
                        className="add-btn" 
                        onClick={this.openAddModal}
                    >
                        Add a book
                    </button>
                </main>
            </div>
        );
    }
}


export default App;
