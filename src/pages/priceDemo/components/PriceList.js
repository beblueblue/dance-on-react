import React from "react"
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import PaymentIcon from '@material-ui/icons/Payment'

const useStyles = makeStyles(theme => ({
  priceItem: {
    flex: '0 1 11.111%',
  },
  dateItem: {
    flex: '0 1 22.222%',
  },
  smallImg: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  }
}))

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  const iconsMap = {
    0: <FlightTakeoffIcon />,
    1: <PhoneIphoneIcon />,
    2: <PaymentIcon />
  }

  const classes = useStyles()

  return (
    <List dense={true}>
      {items.map(
        (item) => 
          <ListItem key={item.id} divider={true} dense={true}>
            <ListItemAvatar>
              <Avatar className={classes.smallImg}>
                {iconsMap[item.category.id]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.title || null}
            />
            <ListItemText
              className={classes.priceItem}
              primary={(item.category.type === 'outcome' ? '-' : '') + item.price + '元'}
            />
            <ListItemText
              className={classes.dateItem}
              primary={item.date || null}
            />
            <ListItemSecondaryAction>
              <IconButton color="primary" aria-label="edit" onClick={() => {onModifyItem(item)}}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="delete"  onClick={() => {onDeleteItem(item)}} >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>,
      )}
    </List>
  )
}



export default PriceList