import { Button, CardActions } from '@material-ui/core'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';


function PastButtons({ name }) {

    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitRating = () => {
        if (!rating.length) {
            toast.error("Please enter your rating");
            return;
        }

        if (rating > 0 && rating <= 5) {
            toast.info("Thanks for submitting your valuable feedback")
        }

        else {
            toast.error("Rating must be given out of 5")
            return;
        }

        setOpen(false)
        setRating("")
    }

    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                    Rate this Doctor
                </Button>
            </CardActions>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Give your Ratings</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To give your rating, just enter the rating you want to give to {name}. Rating must be out of 5.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Rating"
                        type="text"
                        fullWidth
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitRating} color="primary">
                        Rate
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PastButtons
