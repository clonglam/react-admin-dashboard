import React from 'react'
import Routers from './routes'
import Sider from './components/Sider'
import { useAppSelector } from './app/hooks'
import { selectMenuState } from './features/state/stateSlice'
import NavMenu from './components/NavMenu'
// import SiderCustom from './components/SiderCustom'

// import { useWindowSize } from 'usehooks-ts'

// const { Header, Content, Footer } = Layout

const App: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false)
  // const { width, height } = useWindowSize()
  const isMenuOpen = useAppSelector(selectMenuState)
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken()

  return (
    <>
      <div className="layout">
        {/* Header */}
        <header className="header">
          <NavMenu user="test" />
        </header>

        {/* Sidebar */}
        <aside className={` ${isMenuOpen ? 'open' : ''}`}>
          <Sider open={isMenuOpen} />
        </aside>

        {/* Main content */}
        <main className="main">
          <Routers />
        </main>

        {/* Footer */}
        <footer className="footer">
          <div style={{ width: '100%' }}>
            Ant Design ©2023 Created by Ant UED
          </div>
        </footer>
      </div>
      <div className="layout-container">
        <NavMenu user="test" />
        {/* <SiderCustom /> */}
      </div>
    </>
  )
}

export default App
