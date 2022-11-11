import { Modal } from 'components/Modal/Modal'
import { useState } from 'react'

export const ImageGalleryItem = ({webformatURL, largeImageURL, alt}) => {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(prev => !prev.showModal)
    }
    return <li className='ImageGallery'>
        <img src={webformatURL}
            onClick={toggleModal}
            alt='ctttt'
            className='ImageGalleryItem-image' />
        {showModal && <Modal
            alt={alt}
            modalImg={largeImageURL}
            closeModal={toggleModal} />}
    </li>
} 
