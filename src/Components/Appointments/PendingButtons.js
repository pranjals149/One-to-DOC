import { Button, CardActions } from '@material-ui/core'
import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function PendingButtons({ name }) {

    const [openPay, setOpenPay] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpenPay = () => {
        setOpenPay(true);
    };

    const handleClosePay = () => {
        setOpenPay(false);
    };

    const paid = () => {
        toast.info(`You have successfully booked the appointment with ${name}`)
        setOpenPay(false)
    }

    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpenPay}>
                    Pay Now
                </Button>
            </CardActions>

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

export default PendingButtons
