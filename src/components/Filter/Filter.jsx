import React from 'react'
import css from './Filter.module.css'

const Filter = () => {
    return (
        <label>
            Filter
            <select className={css.select} >
                    <option>A to Z</option>
                    <option>Z to A</option>
                    <option>Less than 10$</option>
                    <option>Greater than 10$</option>
                    <option>Popular</option>
                    <option>Not popular</option>
                    <option>Show all</option>
            </select>
        </label>
    )
}

export default Filter