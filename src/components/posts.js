import React from 'react'

export default (props) => {
  console.log(props.data)
  return (
    <React.Fragment>
      {props.titleToggle ? (<h2 className={props.title.style}>{props.title.title}</h2>) : ''}
      <div className="flex mt-8">
        {
          props.data && props.data.map((el, key) => {
            return <props.card element={el} key={key} />
          })
        }
      </div>
    </React.Fragment>
  )
}