import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from './components/Dialog'

const App = () => {
    const [open, setOpen] = useState(false)
    
    return(
        <div>
            <Typography 
                variant="h6" 
                color="primary" 
            >
                Hello World!
            </Typography>
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => setOpen(true)}
            >
                show dialog
            </Button>
            <Dialog open={open} handleClose={() => setOpen(false)} />
        </div>
    )
}

export default App
