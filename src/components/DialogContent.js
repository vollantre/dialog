import React, { useState } from 'react'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import sample from '../sample'

//Other components
const UnderLined = ({ children }) => <strong><u>{children}</u></strong>

const BlueText = ({ children }) => <span style={{ color: 'blue' }}>{children}</span>

const Tag = ({ children, color }) => (
    <Chip 
        label={children} 
        style={{
            backgroundColor: color, 
            color: 'white'
        }} 
    />
)

//DialogContent
const DialogContent = () => {
    const [mockObj] = useState(sample)

    const formatDate = format => moment(mockObj.utc_appt_datetime).format(format)

    return(
        <MuiDialogContent>
            <Typography 
                style={{ marginBottom: 0 }}
                variant="caption"
            >
                Submitted: {moment(mockObj.utc_appt_datetime).fromNow()}
            </Typography>
            <Typography variant="h5">
                <strong>Match up</strong> - sent from {mockObj.trainee_name}
            </Typography>
            <Typography style={{ marginTop: 10 }}>
                <UnderLined>Day:</UnderLined> {formatDate('dddd')}
                &nbsp;&nbsp;
                <UnderLined>Date:</UnderLined> {formatDate('MMMM D, YYYY')}
                <br />
                <UnderLined>Time:</UnderLined> {formatDate('LT')}
                &nbsp;&nbsp;
                <UnderLined>Place:</UnderLined> {mockObj.place}
                <br />
                <UnderLined>Name:</UnderLined> {mockObj.prospect_name}
                <br />
                <UnderLined>Client Phone:</UnderLined>&nbsp;
                <BlueText>{mockObj.prospect_phone}</BlueText>
                <br />
                <UnderLined>Trainee:</UnderLined>&nbsp;
                <BlueText>{mockObj.trainee_name}</BlueText>
                <br />
                <UnderLined>Trainee Contact:</UnderLined>&nbsp;
                <BlueText>{mockObj.trainee_phone}</BlueText>
                <br />
            </Typography>
            <Typography display="inline">
                <UnderLined>Appt.Type:</UnderLined>
            </Typography>
            <Tag color={mockObj.appt_tags.color}>{mockObj.appt_tags.tag}</Tag>
            <Typography>
                <UnderLined>Choose a Field Trainer:</UnderLined>
            </Typography>
            {mockObj.selected_trainers.map((trainer, i )=> (
                <div key={i}>
                    <Checkbox 
                        checked 
                        name={trainer.name}
                    />
                    <Typography display="inline">
                        <strong>{trainer.name}</strong>({trainer.code}) <em>{trainer.status}</em>
                    </Typography>
                </div>
            ))}
            <Button variant="contained" color="primary" disableElevation>
                Assign Trainers
            </Button>
            <Typography>
                <UnderLined>Notes:</UnderLined> {mockObj.notes}
            </Typography>
        </MuiDialogContent>
    )
}

export default withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(DialogContent)