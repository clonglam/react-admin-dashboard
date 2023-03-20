import React from 'react'
import routes from '../../routes/config'
import type { IFMenu } from '../../routes/config'
import { Link } from 'react-router-dom'
import Icon from '../../untils/Icon'

interface Props {
  open: boolean
}

const renderMenuItem = (item: IFMenu, isSidebarOpen: boolean): JSX.Element => (
  <Link
    to={(item.route ?? item.key) + (item.query ?? '')}
    key={item.key}
    className="container"
  >
    <span className="item-icon">
      {item.icon != null && <Icon name={item.icon} />}
    </span>
    {isSidebarOpen && <span className="item-text">{item.title} </span>}
  </Link>
)

const Sider = ({ open }: Props): JSX.Element => {
  // const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' })

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-content">
        {[...routes.menus].map((item: IFMenu, index: number) =>
          renderMenuItem(item, open)
        )}
        {/* <li className="sidebar-item">
          <i className="fa fa-home" />
        </li>
        <li className="sidebar-item">
          <i className="fa fa-user" />
        </li>
        <li className="sidebar-item">
          <i className="fa fa-envelope" />
        </li>
        <li className="sidebar-item">
          <i className="fa fa-cog" />
        </li> */}
      </div>
    </div>
  )
}

export default Sider
