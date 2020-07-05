import React from 'react'


class AddModal extends React.Component {

	// adds a new row if description text exceeds cols limit (42 chars)
	resize ({target}) {
		const {length} = target.value
		// get textarea (description) cols limit...
		const cols = target.getAttribute('cols')
		// then add new row if current col is maxed out
		target.setAttribute(
			'rows', 
			+(length / cols).toString().split('.')[0] + 1
		)
	}

	render () {
		const { 
			cls, submit, cancel, title_ref, cover_ref, author_ref, description_ref
		} = this.props

		return (
			<div className={"modal " + cls}>
				<form onSubmit={submit}>
					<input 
						type="text" 
						name="title" 
						placeholder="Title"
						ref={title_ref}
					/>
					<input 
						type="text" 
						name="author" 
						placeholder="Author"
						ref={author_ref}
					/>
					<textarea 
						name="description"
						rows="1" 
						cols="42" 
						placeholder="Description"
						maxLength="250"
						onInput={this.resize}
						ref={description_ref}
					/>
					<input 
						type="file" 
						accept="image/*"
						name="author" 
						placeholder="Author" 
						ref={cover_ref}
					/>
					
					<div className='btns'>
						<input type="button" value="Cancel" onClick={cancel} />
						<input type="submit" value="Add to library" />
					</div>
				</form>
			</div>
		)
	}
}

export default AddModal
