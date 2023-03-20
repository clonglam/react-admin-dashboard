import { useAppDispatch } from '../app/hooks'
import { toggleSideMenu } from '../features/state/stateSlice'
import Icon from '../untils/Icon'
import React from 'react'

type Props = {
  user: string
}
const NavMenu = ({ user }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <div className="navbar">
      <div>
        <span className="branding-text">Logo</span>
        <span
          onClick={() => {
            dispatch(toggleSideMenu())
          }}
        >
          <Icon name="hamburger" />
        </span>
      </div>
      {/* <div>{user}</div> */}
    </div>
  )
}

export default NavMenu
