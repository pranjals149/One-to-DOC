import { Button, CardActions } from '@material-ui/core'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from "react-datepicker";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { toast } from 'react-toastify';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import "react-datepicker/dist/react-datepicker.css";


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    time: {
        marginTop: "20px"
    },
    fullName: {
        marginBottom: "20px"
    }
}));

function AppointmentButtons({ name }) {

    const classes = useStyles();

    const [time, setTime] = useState('');
    const [openTime, setOpenTime] = useState(false);
    const [fullName, setFullName] = useState("")
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [openPay, setOpenPay] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpenPay = () => {
        setOpenPay(true);
    };

    const handleClosePay = () => {
        setOpenPay(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const booked = () => {
        toast.info("You have booked your appointment. Please pay the fees for successfully booking the appointment")
        setOpen(false)
    }

    const paid = () => {
        toast.info(`You have successfully booked the appointment with ${name}`)
        setOpenPay(false)
    }

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    const handleCloseTime = () => {
        setOpenTime(false);
    };

    const handleOpenTime = () => {
        setOpenTime(true);
    };

    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                    Book Now
                </Button>
                <Button size="small" color="primary" onClick={handleClickOpenPay}>
                    Pay Now
                </Button>
            </CardActions>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Book an appointment with {name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To book an appointment with this doctor, please enter your information here. Appointment will be successfully completed after the payment has been done.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Full Name"
                        type="text"
                        fullWidth
                        className={classes.fullName}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <strong>Select Date</strong> {" "}
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />


                    <div className={classes.time}>
                        <strong>Select your Time</strong>
                    </div>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Time</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openTime}
                            onClose={handleCloseTime}
                            onOpen={handleOpenTime}
                            value={time}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value={10}>11:00 AM</MenuItem>
                            <MenuItem value={10}>11:30 AM</MenuItem>
                            <MenuItem value={10}>12:00 AM</MenuItem>
                            <MenuItem value={20}>12:30 PM</MenuItem>
                            <MenuItem value={30}>01:00 PM</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={booked} color="primary">
                        Book an Appointment
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openPay}
                onClose={handleClosePay}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{`Pay Rs. 300 to ${name}`}</DialogTitle>
                <DialogContent>
                    <div className="appointmentButtons__pay">
                        <p>Google Pay</p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClosePay} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={paid} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AppointmentButtons
