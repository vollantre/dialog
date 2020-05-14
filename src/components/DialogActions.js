import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/Button'
import ReplayIcon from '@material-ui/icons/Replay'

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    },
    replayButton: {
        color: theme.palette.grey[50],
        backgroundColor: orange[500],
        '&:hover': {
          backgroundColor: orange[700],
        },
    }
})

const DialogActions = ({ classes, onClose }) => (
    <MuiDialogActions>
        <Button 
            variant="contained" 
            color="secondary"
            disableElevation
            onClick={onClose}
        >
            Close
        </Button>
        <Button 
            variant="contained" 
            color="primary"
            disableElevation
        >
            Save
        </Button>
        <Button
            variant="contained"
            className={classes.replayButton}
            disableElevation
        >
            Follow Up
        </Button>
        <IconButton 
            aria-label="reload"
            variant="contained"
            className={classes.replayButton}
        >
            <ReplayIcon />
        </IconButton>
    </MuiDialogActions>
)

export default withStyles(styles)(DialogActions)