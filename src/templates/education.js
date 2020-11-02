import React from 'react'
import { graphql, Link } from 'gatsby'
import Nav from '../components/nav'

export default (props) => {
  const pageData = props.data.educationJson
  console.log(props.data)
  return (
    <div>
      <header className="py-12 border-blue-800 border-solid border-t-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="uppercase underline text-orange-700">Regresar al inicio</Link>
          <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
          <p className="text-xl" >{pageData.description} </p>
        </div>
      </header>
      <ul className="max-w-4xl mx-auto pb-8">
        {
          pageData.items.map((item, index) => (
            <li className="bg-white shadow mt-4 flex" key={index} >
              <p className="vertical-text">{pageData.slug}</p>
              <div className="flex items-center flex-1 p-8" >
                <div className="flex-1">
                  <h3>{item.name}</h3>
                  {
                    item.degree && <span className="inline-block p-2 bg-orange-300 text-orange-700" >{item.degree}</span>
                  }
                  {
                    item.date && <span className="inline-block p-2 bg-orange-300 text-orange-700" >{item.date}</span>
                  }
                  {

                    item.details && (
                      <div>
                        {item.details.score && <span className="inline-block p-2 bg-orange-300 text-orange-700" >Score: {item.details.score}</span>}
                        {item.details.CEFR && <span className="inline-block p-2 bg-orange-300 text-orange-700" >{item.details.CEFR}</span>}
                        {item.details.year && <span className="inline-block p-2 bg-orange-300 text-orange-700" >{item.details.year}</span>}
                      </div>
                    )
                  }
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      <Nav />
    </div>
  )
}


export const query = graphql`
  query($slug: String){
    educationJson(slug: {eq: $slug}) {
      title
      slug
      description
      items {
        date
        degree
        name
        details {
          CEFR
          score
          year
        }
      }
    }
  }
`;
