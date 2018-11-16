import React from 'react';

const DATA = [
  {
    id: 'sports',
    title: 'Sports and Activities'
  },
  {
    id: 'wellness',
    title: 'Wellness and Health'
  },
  {
    id: 'extreme',
    title: 'Extreme Sports and Expeditions'
  },
  {
    id: 'games',
    title: 'Games'
  },
  {
    id: 'culture',
    title: 'Culture and Education'
  },
  {
    id: 'enjoyment',
    title: 'Enjoyment and Relaxation'
  },
  {
    id: 'travel',
    title: 'Travelling'
  }
]

const renderItem = (item) => {
    const { id, title } = item
    return (
      <div className={`tile ${id}`} key={id}>
        <div className="title-lg-white">{title}</div>
      </div>
    )
  }

const Discover = () => (
    <div className="discover">
    	<div className="inset">
      	<div className="title-lg">Disover holiday activity ideas</div>
      	<div className="tiles-wrapper">
          {
            DATA.map(i => (
              renderItem(i)
            ))
          }
        </div>
    	</div>
    </div>
  )

export default Discover;
