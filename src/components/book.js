import React from 'react'


class Book extends React.Component {

	render () {
		const { title, author, cover, synopsis } = this.props

		return (
			<div className="book">
				<img 
					src={cover ? URL.createObjectURL(cover) : 'img/cover.jpg'} 
					alt={
						cover ? 
						cover.name.replace(/^.+\/|\.\w+$/gi, '') : 
						title + ' book cover'
					} 
				/>
				<div className="book-info">
					<h4 className="title">{title}</h4>
					<p className="author">{author}</p>
					<p className="synopsis">{synopsis}</p>
				</div>
			</div>
		)
	}
}


export default Book
