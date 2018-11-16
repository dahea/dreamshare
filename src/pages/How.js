import React from 'react';

const DATA = [
  {
    id: 'step1',
    label: 'Step 1',
    title: 'Sed leo enim, condimentum',
    description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
  },
  {
    id: 'step2',
    label: 'Step 2',
    title: 'Morbi velit risus',
    description: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.'
  },
  {
    id: 'step3',
    label: 'Step 3',
    title: 'Sed leo enim, condimentum',
    description: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'
  }
]

// If needed in more than one file, this can be turned into a component
const renderItem = (item) => {
  const { id, label, title, description } = item
  return (
    <div className={`step ${id}`} key={id}>
      <div className="btn-sm">{label}</div>
      <div className="title-lg-white">{title}</div>
      <div className="desc">{description}</div>
    </div>
  )
}

const How = () => (
  <div className="how">
    <div className="inset">
      <div className="title-lg">How to Dreamshare</div>
      <div className="steps-wrapper">
        {
          DATA.map(i => (
            renderItem(i)
          ))
        }
      </div>
    </div>
  </div>
)

export default How;
