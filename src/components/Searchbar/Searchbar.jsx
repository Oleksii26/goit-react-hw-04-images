import { useState } from 'react'
import { ReactComponent as MyIcon } from '../img/search.svg'


export const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState('')

    const handleChange = e => {
        if (e.currentTarget.value.toLowerCase() !== query)
            setQuery(e.currentTarget.value.toLowerCase())
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (query.trim() === '') {
            alert('Enter the query')
            return
        }
        onSubmit(query)
    }

    return (<header className='Searchbar'>
        <form onSubmit={handleFormSubmit} className='SearchForm'>
            <button type="submit" className='SearchForm-button'>
                <span className="button-label"><MyIcon /></span>
            </button>
            <input
                className='SearchForm-input'
                type="text"
                autoComplete='off'
                value={query}
                autoFocus
                placeholder="Search images and photos"
                onChange={handleChange}
            />
        </form>
    </header>)

}





