import React from 'react';
import person1 from '../assets/meet/person1.png';
import person2 from '../assets/meet/person2.png';
import person3 from '../assets/meet/person3.png';
import person4 from '../assets/meet/person4.png';
import music from '../assets/meet/music.png';
import camera from '../assets/meet/camera.png';
import brush from '../assets/meet/brush.png';
import plane from '../assets/meet/airplane.png';

const DATA = [
  {
    id: 'person1',
    avatar: person1,
    icon: music,
    iconColor: 'peach',
    name: 'Bradley Hunter',
    desc: 'Based in Chicago. I love playing tennis and loud music.'
  },
  {
    id: 'person2',
    avatar: person2,
    icon: camera,
    iconColor: 'yellow',
    name: 'Diana Wells',
    desc: 'Living in Athens, Greece. I love black and white classics, chillout music and green tea.'
  },
  {
    id: 'person3',
    avatar: person3,
    icon: brush,
    iconColor: 'teal',
    name: 'Marie Bennett',
    desc: 'Currently living in Colorado. Lover of art, languages and travelling.'
  },
  {
    id: 'person4',
    avatar: person4,
    icon: plane,
    iconColor: 'blue',
    name: 'Christopher Pierce',
    desc: 'Star Wars fanatic. I have a persistent enthusiasm to create new things.'
  }
]

// If needed in more than one file, this can be turned into a component
const renderItem = (item) => {
  const { id, avatar, icon, iconColor, name, desc } = item
  return (
    <div className="partner" key={id}>
      <div className="avatar-wrapper">
        <div className="avatar"><img src={avatar} alt={name} /></div>
        <div className={`avatar-detail ${iconColor}`}><img src={icon} alt="" /></div>
      </div>
      <div className="title">{name}</div>
      <div className="desc">{desc}</div>
    </div>
  )
}


const Meet = () => (
  <div className="meet">
    <div className="inset">
      <div className="title-lg">Meet a partner for your best holiday</div>
      <div className="partners-wrapper">
        {
          DATA.map(i => (
            renderItem(i)
          ))
        }
      </div>
      <a href="#" className="btn-invert">See other partners</a>
    </div>
  </div>
)

export default Meet;
