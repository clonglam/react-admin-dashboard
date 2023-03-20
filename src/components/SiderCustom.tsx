import React, { useState } from 'react'
import { Layout } from 'antd'

// import { usePrevious } from 'ahooks'
import routes from '../routes/config'
import SiderMenu from './SiderMenu'

const { Sider } = Layout

// type SiderCustomProps = RouteComponentProps<any> & {
//   popoverHide?: () => void
//   collapsed?: boolean
//   smenus?: any
// }

interface IMenu {
  openKeys: string[]
  selectedKey: string
}

const SiderCustom: React.FC = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [collapsed, setCollapsed] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' })

  //   const [firstHide, tFirstHide] = useSwitch()
  //   const { location, collapsed: pCollapsed } = props
  //   const prePathname = usePrevious(props.location.pathname)

  //   useEffect(() => {
  //     const recombineOpenKeys = (openKeys: string[]) => {
  //       let i = 0
  //       let strPlus = ''
  //       let tempKeys: string[] = []
  //       // 多级菜单循环处理
  //       while (i < openKeys.length) {
  //         strPlus += openKeys[i]
  //         tempKeys.push(strPlus)
  //         i++
  //       }
  //       return tempKeys
  //     }
  //     const getOpenAndSelectKeys = () => {
  //       return {
  //         openKeys: recombineOpenKeys(
  //           location.pathname.match(/[/](\w+)/gi) || []
  //         ),
  //         selectedKey: location.pathname,
  //       }
  //     }

  //     if (pCollapsed !== collapsed) {
  //       setMenu(getOpenAndSelectKeys())
  //       tCollapsed.setSwitcher(!!pCollapsed)
  //       tFirstHide.setSwitcher(!!pCollapsed)
  //     }

  //     if (prePathname !== location.pathname) {
  //       setMenu(getOpenAndSelectKeys())
  //     }
  //   }, [
  //     prePathname,
  //     location.pathname,
  //     collapsed,
  //     tFirstHide,
  //     tCollapsed,
  //     pCollapsed,
  //   ])

  const menuClick = (event: React.MouseEvent<HTMLElement>): void => {
    console.log('event', event)
    // setMenu((state) => ({ ...state, selectedKey: event.key }))
  }

  //   const openMenu: any = (v: string[]) => {
  //     setMenu((state) => ({ ...state, openKeys: v }))
  //     tFirstHide.turnOff()
  //   }

  return (
    <Sider
      trigger={null}
      breakpoint="lg"
      collapsed={collapsed}
      style={{ overflowY: 'auto' }}
      className="sider-custom"
    >
      <div className="logo" />
      <SiderMenu
        menus={[...routes.menus]}
        onClick={() => menuClick}
        mode="inline"
        // selectedKeys={[menu.selectedKey]}
        // openKeys={firstHide ? [] : menu.openKeys}
        // onOpenChange={openMenu}
      />
      <style>
        {`
                    #nprogress .spinner{
                        left: ${collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
      </style>
    </Sider>
  )
}

export default SiderCustom
