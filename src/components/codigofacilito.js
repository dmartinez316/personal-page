import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Cursos from './cursos'

export default () => {
  const data = useStaticQuery(graphql`{
    codigofacilitoJson {
      data {
        courses {
          title
        }
        certificates {
          title
        }
      }
    }   
  }`)
  return (
    <React.Fragment>
      <section className="bg-blue-800">
        <div className="mx-auto max-w-4xl p-12 ">
          <h2 className="text-3xl font-bold text-center text-orange-400">Algunos de mis logros en Códigofacilito</h2>
          <div className="flex my-6 w-10/12 mx-auto">
            <div className="w-1/2">
              <Cursos data={data.codigofacilitoJson.data.certificates} title="Certificados" />
            </div>
            <div className="w-1/2 ">
              <Cursos data={data.codigofacilitoJson.data.courses} title="Cursos" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}