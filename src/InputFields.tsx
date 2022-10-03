import * as React from 'react';
import TextField from '@mui/material/TextField';

const InputFields = () => {
    return (
        <div>
            <TextField
                required
    id="outlined-required"
    label="Name"
    />
    <br/>

    <TextField
        id="outlined-required"
    label="Last name"
    />
    <TextField
        id="outlined-number"
    label="Phone Number"
    type="number"
    />
    <TextField
        id="outlined-required"
    label="Apartment"
    />
    <TextField
        id="outlined-required"
    label="Address"
    />
    <TextField
        id="outlined-required"
    label="Town"
    />
    <TextField
        id="outlined-required"
    label="State"
    />
    <TextField
        id="outlined-required"
    label="Zip code"
        />
        </div>

);
};

export default InputFields;
