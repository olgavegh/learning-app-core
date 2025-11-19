import React, { useState, useCallback, useEffect } from 'react'

export default function SearchInput() {

    // const [searchTerm, setSearchTerm] = useState('')
    // const [searchResults, setSearchResults] = useState([])

    // const handleSearch = useCallback(
    //     debounce((term) => {
    //         if (term.trim() === '') {
    //             setSearchResults([])
    //         } else {
    //             const results = sampleData.filter((item) =>
    //                 item.title.toLowerCase().includes(term.toLowerCase()),
    //             )
    //             setSearchResults(results)
    //         }
    //     }, 300),
    //     [],
    // )

    // useEffect(() => {
    //     handleSearch(searchTerm)
    // }, [searchTerm, handleSearch])

    // const handleInputChange = (e) => {
    //     setSearchTerm(e.target.value)
    // }

    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}