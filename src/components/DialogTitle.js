import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        color: theme.palette.grey[800]
    }
})

const DialogTitle = ({ children }) => (
    <MuiDialogTitle 
        disableTypography 
        id="form-dialog-title"
    >
        <Typography variant="h4">
            {children}
        </Typography>
    </MuiDialogTitle>
)

export default withStyles(styles)(DialogTitle)