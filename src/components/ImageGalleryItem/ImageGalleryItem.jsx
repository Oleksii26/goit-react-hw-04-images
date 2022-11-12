
export const ImageGalleryItem = ({ onClick, src, alt, largeImageURL }) => {

    return <>
        <li className='ImageGallery'>
            <img src={src}
                onClick={() => onClick(largeImageURL, alt)}
                alt={alt}
                className='ImageGalleryItem-image' />
        </li>
    </>
} 
