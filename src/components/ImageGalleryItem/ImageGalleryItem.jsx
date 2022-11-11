import { Modal } from 'components/Modal/Modal'
import React from 'react'

export class ImageGalleryItem extends React.Component {
    state = {
        showModal: false,
    }
    toggleModal = () => {
        this.setState(prev => ({ showModal: !prev.showModal }))
    }
    render() {

        return <li className='ImageGallery'>
            <img src={this.props.webformatURL}
                onClick={this.toggleModal}
                alt='ctttt'
                className='ImageGalleryItem-image' />
            {this.state.showModal && <Modal 
            alt={this.props.alt}
            modalImg={this.props.largeImageURL}
             closeModal={this.toggleModal} />}
        </li>

    }

} 
