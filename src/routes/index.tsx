import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import DocumentTitle from 'react-document-title'
import AllComponents from '../components'
import routesConfig from './config'
import type { IFMenu, IFMenuBase } from './config'
import ErorrPage from '../components/ErorrPage'

const Routers: React.FC = () => {
  const createMenu = (meunList: IFMenu): JSX.Element => {
    const route = (r: IFMenuBase): JSX.Element => {
      const Component = r.component != null && AllComponents[r.component]
      return (
        <Route
          key={r.route ?? r.key}
          path={r.route ?? r.key}
          element={
            // <DocumentTitle title={r.title}>
            <Component />
            // </DocumentTitle>
          }
          // render={(props: any) => {
          //   // 重新包装组件
          //   const wrapper = (
          //     <RouteWrapper {...{ ...props, Comp: Component, route: r }} />
          //   )
          //   return r.login ? wrapper : requireLogin(wrapper, r.requireAuth)
          // }}
        />
      )
    }
    return meunList.component != null ? route(meunList) : route(meunList)
  }

  const createRoute = (key: string): React.FC[] =>
    routesConfig[key].map(createMenu)

  return (
    <Routes>
      {Object.keys(routesConfig).map((key) => createRoute(key))}
      <Route path="*" element={<ErorrPage />} />
    </Routes>
  )
}

export default Routers
