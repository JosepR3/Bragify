import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function EditUserForm() {
    return <div>
        <Typography variant="h4" color="#f5f5f7" gutterBottom>
            User Settings
        </Typography>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6} color="#f5f5f7">
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    sx={{ input: { color: 'white' } }}

                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    sx={{ input: { color: 'white' } }}
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                    required
                    id="userName"
                    name="userName"
                    label="Username"
                    fullWidth
                    autoComplete="userName"
                    variant="standard"
                    sx={{ input: { color: 'white' } }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="email"
                    name="email"
                    label="E-mail"
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                    sx={{ input: { color: 'white' } }}
                />
            </Grid>

            <Button variant="contained"
                // onClick={handleSubmit}
                sx={{ mt: 3, ml: 1 }}
            >
                Submit
            </Button>



        </Grid>
    </div>;
}


// firstName: "",
// lastName: "",
// username: "",
// email: "",
// password: "",
// confirmPassword: "",