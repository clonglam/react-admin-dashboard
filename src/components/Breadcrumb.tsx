import React from 'react'

type Props = {
  list: string[]
}
const Breadcrumb = ({ list }: Props): JSX.Element => {
  return (
    <div className="breadcrumb">
      {list.map((item, index) => (
        <>
          <span
            key={`breadcrumb ${index}`}
            className={
              list.length - 1 === index ? 'section current' : 'section'
            }
          >
            {item}
          </span>
          <span className="slash">{list.length - 1 === index ? '' : '/'}</span>
        </>
      ))}
    </div>
  )
}

export default Breadcrumb
