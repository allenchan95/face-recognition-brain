import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange,onButtonClick}) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect face in your photo, git it a try.'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-3'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					<button 
						onClick={onButtonClick}	
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						>Detect
					</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;

