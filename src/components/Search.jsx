import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { Geo_Api, GeoApi } from './Api'
import '../Css/Search.css'

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(`${Geo_Api}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoApi)
            .then((response) => response.json())
            .then((res) => {
                return {
                    options: res.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch((err) => console.log(err))
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (
        <div className="search-bar">
            <div className="search-container" style={{ color: "black" }} >
                <AsyncPaginate
                    placeholder="Search for city..."
                    debounceTimeout={600}
                    value={search}
                    onChange={handleOnChange}
                    loadOptions={loadOptions}
                />
            </div>
        </div>
    )
}

export default Search