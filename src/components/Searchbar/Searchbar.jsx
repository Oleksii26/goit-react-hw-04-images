import React from 'react'
import {ReactComponent as MyIcon} from '../img/search.svg'


export class Searchbar extends React.Component {
    state = {
        query: ''
    }
    handleChange = ({ target: { value: query } }) => {
        this.setState({ query })
    }
    handleSubmitForm = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
    }
    render() {
        const { query } = this.state
        return (<header className='Searchbar'>
            <form onSubmit={this.handleSubmitForm} className='SearchForm'>
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
                    onChange={this.handleChange}
                />
            </form>
        </header>)
    }
}





