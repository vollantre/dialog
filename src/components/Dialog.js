import React from 'react'
import MuiDialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import DialogActions from './DialogActions'
import DialogTitle from './DialogTitle'
import DialogContent from './DialogContent'

const Dialog = ({ open, handleClose}) => (
    <MuiDialog 
            open={open} 
    onClose={handleClose}
        aria-labelledby="customized-dialog-title"
    >   
        <DialogTitle>
            Choose a Field Trainer
        </DialogTitle>
        <Divider variant="middle" />
        <DialogContent />
        <Divider />
        <DialogActions onClose={handleClose} />
    </MuiDialog>
)

export default Dialog