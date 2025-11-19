import React, { useState, useCallback, useEffect } from 'react'

export default function SearchInput({ searchTerm, setSearchTerm }) {

    const handleInputChange = (e) => setSearchTerm(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm("")
    };


    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Reset</button>
        </form>
    )
}