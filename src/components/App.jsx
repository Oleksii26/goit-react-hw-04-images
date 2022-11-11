import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "./Api/ArticlesApli.js";
import { LoadMore } from "./LoadMore/LoadMore";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { useState, useEffect } from "react";

export const App = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [totalHits, setTotalHits] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

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

  const handleLoadMore = () => {
    setPage(page + 1)
  }
  return (
    <>
      <Searchbar onSubmit={getData} />
      <ImageGallery images={images} />
      {!!totalHits &&
        (!isLoading ?
          (<LoadMore onLoadMore={handleLoadMore} />) :
          (<Loader />))}
    </>
  )
}



