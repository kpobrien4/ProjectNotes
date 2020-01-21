import React, { Component } from 'react'
import Card from './Card';
import CardContent from './CardContent'
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';
import Upvote from './Upvote'

const ListItem = ({ title, notes, id, created_at }) => {

  return (
    <Link to={`/tracks/${id}`}>
    <Card>
      <CardContent>
        <CardTitle><Link to={`/tracks/${id}`}>{title}</Link> </CardTitle>
        <p>{new Date(created_at).toLocaleString()}</p>
        {/* <Upvote /> */}
      </CardContent>
    </Card>
    </Link>
  )
}

export default ListItem