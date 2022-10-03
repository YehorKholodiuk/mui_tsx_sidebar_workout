import {useForm} from "react-hook-form";
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./index.css";
import {clientValidationSchema} from "./validation";
import {yupResolver} from "@hookform/resolvers/yup";


interface IFormInputs {
    name: string;
    lastName: string;
    phone: string;
    apartment: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}


const ClientForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormInputs>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(clientValidationSchema)
    });

    const onSubmit = (data: IFormInputs) => {
        console.log("onSubmit");
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box
            component="form"
    //sx={{ width: 350 }}
    sx={{
        '& .MuiTextField-root': {m: 1, width: '350'},
    }}
    autoComplete="off"
        >
        <h2>Add new Client</h2>
    <TextField
    required
    id="outlined-required"
    label="Name"
    defaultValue=""
    {...register("name")}
    error={!!errors.name}
    helperText={errors.name?.message}
    />

    <TextField
    required
    id="outlined-required"
    label="Lastname"

    defaultValue=""
    {...register("lastName")}
    error={!!errors.lastName}
    helperText={errors.lastName?.message}
    />

    <TextField
    required
    id="outlined-required"
    label="Phone number"
    defaultValue=""
    {...register("phone")}
    error={!!errors.phone}
    helperText={errors.phone?.message}
    />

    <TextField
    id="outlined-required"
    label="Apartment"
    defaultValue=""
    {...register("apartment")}
    error={!!errors.apartment}
    helperText={errors.apartment?.message}
    />

    <TextField
    id="outlined-required"
    label="House and street"
    defaultValue=""
    {...register("address")}
    error={!!errors.address}
    helperText={errors.address?.message}
    />

    <TextField
    id="outlined-required"
    label="City"
    defaultValue=""
    {...register("city")}
    error={!!errors.city}
    helperText={errors.city?.message}
    />

    <TextField
    id="outlined-required"
    label="State"
    defaultValue=""
    {...register("state")}
    error={!!errors.state}
    helperText={errors.state?.message}
    />

    <TextField
    id="outlined-required"
    label="Zip code"
    defaultValue=""
    {...register("zip")}
    error={!!errors.zip}
    helperText={errors.zip?.message}
    />

    </Box>

    <Button type="submit" variant="outlined">Submit</Button>

        </form>
);
};

export default ClientForm;
