import React from 'react'
import type { ReactNode } from 'react'
import Breadcrumb from './Breadcrumb'

type Props = {
  list?: string[]
  children: ReactNode
  section?: string
  description?: string
}

const Layout = ({
  section,
  description,
  list,
  children,
}: Props): JSX.Element => {
  return (
    <>
      {list && <Breadcrumb list={list} />}
      <div className="layout-content">
        <section>
          {section && <h2 className="title">{section}</h2>}
          {description && <p className="description">{description}</p>}
        </section>
        {children}
      </div>
    </>
  )
}

export default Layout
