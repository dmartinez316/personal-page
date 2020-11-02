import React from 'react'

export default (props) => {
  function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  return (
    < React.Fragment >
      <h2 className="text-2xl font-mono text-center text-orange-400 mb-4">{props.title}</h2>
      <div className="flex flex-col items-center">
        {shuffle(props.data).slice(0, 3).map((item, key) => {
          return <ListItem title={item.title} key={key} />
        })
        }
      </div>
    </React.Fragment >
  )
}

const ListItem = (props) => (
  <React.Fragment>
    <div
      className="w-10/12 mb-1 p-2 text-center font-light text-orange-400"
    >
      {props.title}
    </div>
    <hr className="w-8/12" />
  </React.Fragment>
)