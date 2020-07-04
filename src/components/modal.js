import React from 'react'


class AddModal extends React.Component {

	resize ({target}) {
		const {length} = target.value
		const cols = target.getAttribute('cols')
		target.setAttribute(
			'rows', 
			+(length / cols).toString().split('.')[0] + 1
		)
	}

	render () {
		const { 
			cls, submit, cancel, title_ref, cover_ref, author_ref, synopsis_ref
		} = this.props

		return (
			<div className={"modal " + cls}>
				<form 
					onSubmit={submit}
				>
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
						rows="1" 
						cols="42" 
						placeholder="Description / synopsis"
						maxLength="250"
						onInput={this.resize}
						ref={synopsis_ref}
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
