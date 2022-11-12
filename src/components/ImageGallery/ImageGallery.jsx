import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images, openModalImg }) => {
    return <ul className='ImageGallery'>
        {images.map(image => <ImageGalleryItem
            key={image.id}
            alt={image.tags}
            src={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClick={openModalImg}
           />)
        }
    </ul>
}


