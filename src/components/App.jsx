import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "./Api/ArticlesApli.js";
import { LoadMore } from "./LoadMore/LoadMore";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { useState, useEffect } from "react";
import { Modal } from "./Modal/Modal";

export const App = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [totalHits, setTotalHits] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalTags, setModalTags] = useState('')

  const getData = query => {
    setQuery(query)
    setPage(1)
    setImages([])
  }

  useEffect(() => {
    const getImageData = async (query, page) => {
      setIsLoading(true)
      try {
        const result = await fetchImages(query, page)
        setImages(images => [...images, ...result.hits])
        setTotalHits(result.total)
      } catch (error) {
        alert('Something went wrong')
      }
      setIsLoading(false)
    }

    if (query !== '') {
      getImageData(query, page)
    }
  }, [query, page])

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const openModalImg = (url, alt) => {
    setModalImage(url)
    setModalTags(alt)
    toggleModal()
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }
  return (
    <>
      <Searchbar onSubmit={getData} />
      <ImageGallery images={images} openModalImg={openModalImg} />
      {!!totalHits && (!isLoading ? (<LoadMore onLoadMore={handleLoadMore} />) : (<Loader />))}
      {modalShow && (<Modal image={modalImage} tag={modalTags} onClose={toggleModal} />)}

    </>
  )
}


