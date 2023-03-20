import React from 'react'
import Card from '../Card'
import Layout from '../Layout'

const Dashboard: React.FC = (props) => {
  return (
    <Layout list={['App', 'Dashboard']}>
      <div className="container ">
        <Card section={'Title'} sx="col-12-lg">
          <div className="">Dashboard</div>
        </Card>
      </div>
    </Layout>
  )
}

export default Dashboard
