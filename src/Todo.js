import React from 'react'
import { ListItem, ListItemAvatar, List, ListItemText, Button } from '@material-ui/core'
import db from './firebase'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

function todo(props) {
 return (
  <List>
        <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary=" 2020" />
      </ListItem>
        <DeleteForeverSharpIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete the task</DeleteForeverSharpIcon>
   
  </List>
 )
}

export default todo
