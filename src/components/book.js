import React from 'react'


class Book extends React.Component {

	render () {
		const { title, author, cover, description } = this.props

		return (
			<div className="book">
				<img 
					// set a placeholder cover/image if none was provided in input[type="file"]
					src={cover ? URL.createObjectURL(cover) : 'img/cover.jpg'} 
					alt={
						// use the basename of the input file as alt text if a cover image 
						// was provided, otherwise, use the book title
						cover ? 
						cover.name.replace(/^.+\/|\.\w+$/gi, '') : 
						title + ' book cover'
					} 
				/>
				<div className="book-info">
					<h4 className="title">{title}</h4>
					<p className="author">{author}</p>
					<p className="description">{description}</p>
				</div>
			</div>
		)
	}
}


export default Book
