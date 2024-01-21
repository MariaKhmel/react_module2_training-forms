import { Component } from "react";

export const Filter = ({ value, onChange }) => {
    return(
        <label>
            Filter by name
            <input type='text'
                value={value}
                onChange={onChange}
            />
        </label>
    )   
}
