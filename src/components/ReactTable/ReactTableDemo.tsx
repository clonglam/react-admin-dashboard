import React from 'react'
import Layout from '../Layout'

const ReactTableDemo = (): JSX.Element => {
  return (
    <Layout
      list={['App', 'React Table']}
      section="React Table"
      description={`This Table is created by React Table v7`}
    >
      <div className="container ">
        <h1>React Table</h1>
      </div>
    </Layout>
  )
}

export default ReactTableDemo
