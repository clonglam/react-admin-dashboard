import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import Icon from '@ant-design/icons'
import type { MenuProps } from 'antd'

import type { IFMenu } from '../routes/config'

const renderMenuItem = (item: IFMenu): JSX.Element => (
  <Menu.Item key={item.key}>
    <Link to={(item.route ?? item.key) + (item.query ?? '')}>
      <span>
        <Icon type={item.icon} />
      </span>

      <span className="nav-text">{item.title} </span>
    </Link>
  </Menu.Item>
)

// const renderSubMenu = (item: IFMenu) => {
//   return (
//     <Menu.SubMenu
//       key={item.key}
//       title={
//         <span>
//           {/* {item.icon && <Icon type={item.icon} />} */}
//           <span className="nav-text">{item.title}</span>
//         </span>
//       }
//     >
//       {item.subs!.map((sub) =>
//         sub.subs ? renderSubMenu(sub) : renderMenuItem(sub)
//       )}
//     </Menu.SubMenu>
//   )
// }

type SiderMenuProps = MenuProps & {
  menus: any
  //   onClick: (e: any) => void
  //   selectedKeys: string[]
  //   openKeys?: string[]
  //   onOpenChange: (v: string[]) => void
}

const SiderMenu = ({ menus }: SiderMenuProps): JSX.Element => {
  return (
    <div>
      {menus.map((item: IFMenu, index: number) => (
        <div key={item.key}>
          {/* <Menu>{item.subs! ? renderSubMenu(item) : renderMenuItem(item)}</Menu> */}
          <Menu>{renderMenuItem(item)}</Menu>
        </div>
      ))}
    </div>
  )
}

export default React.memo(SiderMenu)
