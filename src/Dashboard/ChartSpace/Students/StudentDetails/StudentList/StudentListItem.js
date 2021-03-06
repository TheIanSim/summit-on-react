import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class StudentListItem extends Component {

  render() {

    return (
      <ListItem onClick = {() => { this.props.studentClickHandler(this.props.id)}} button >

      	<Avatar src={this.props.picture}/>
      	<ListItemText primary = {this.props.name}/>
      </ListItem>
    );
  }
}

export default StudentListItem;
