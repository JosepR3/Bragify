import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


import { textAlign } from '@mui/system';
export default function EditUserForm() {
    const [values, setValues] = React.useState({
        email: '',
        gender: '',
        birthdate: '',
        country: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
    };
    const handleChange = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const theme = createTheme({
        palette: "dark",
        textAlign: "center",
        Button: {
            textAlign: "center",
            marginTop: "1.5rem"
        }
    })
    return (
        <React.Fragment >
            <ThemeProvider theme={theme}>
                <Paper elevation={12} >
                    <Typography variant="h6" gutterBottom color="secondary">
                        User Settings
                    </Typography>
                    <form action="" onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth={true}>
                                    <InputLabel htmlFor="my-input" color='secondary'>Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" color='secondary' type='email' />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="gender-label" htmlFor='gender' color='secondary'>Gender</InputLabel>
                                    <Select
                                        labelId="gender-label"
                                        id="gender"
                                        color='secondary'
                                        label="Gender"
                                    >
                                        <MenuItem value={10}>Male</MenuItem>
                                        <MenuItem value={20}>Female</MenuItem>
                                        <MenuItem value={30}>Other</MenuItem>
                                    </Select>
                                    <br />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth={true}>
                                    <InputLabel color='secondary'>Birth Date</InputLabel>
                                    <br /><br />
                                    <Input id="birthdate" color='secondary' type='date' />
                                    <br />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="country" id="country-label" color='secondary'>Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="country"
                                        color='secondary'
                                        label="Country"
                                    >
                                        <MenuItem value={10}>Andorra</MenuItem>
                                        <MenuItem value={20}>Spain</MenuItem>
                                        <MenuItem value={30}>France</MenuItem>
                                        <MenuItem value={40}>Colombia</MenuItem>
                                        <MenuItem value={40}>Venezuela</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Share my data with Bragify. I understand that my data may be  " />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" color='secondary' variant='contained'>Save</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </ThemeProvider>
        </React.Fragment >
    );
}