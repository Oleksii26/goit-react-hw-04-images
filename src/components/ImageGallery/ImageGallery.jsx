import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images }) => {
    return <ul className='ImageGallery'>
        {images.map(image => <ImageGalleryItem
            key={image.id}
            alt={image.tags}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL} />)
        }
    </ul>
}


