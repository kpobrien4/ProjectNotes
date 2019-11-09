import React, { Component } from 'react'
import Card from '../components/Card';
import CardContent from '../components/CardContent'
import CardTitle from '../components/CardTitle';
import { Link } from 'react-router-dom';

const ListItem = ({ title, notes, id }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle><Link to={`/tracks/${id}`}>{title}</Link></CardTitle>
        <p>{ notes }</p>
      </CardContent>
    </Card>
  )
}

export default ListItem