import React, { Component } from 'react'
import Card from './Card';
import CardContent from './CardContent'
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';

const ListItem = ({ title, notes, id, created_at }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle><Link to={`/tracks/${id}`}>{title}</Link> </CardTitle>
        <p>{new Date(created_at).toLocaleString()}</p>
      </CardContent>
    </Card>
  )
}

export default ListItem