import React from 'react'
import { FaAddressBook, FaCalendar, FaEnvelope } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiReactquery, SiReacttable } from 'react-icons/si'

const Icons = {
  'fa-address-book': FaAddressBook,
  'fa-calendar': FaCalendar,
  'fa-envelope': FaEnvelope,
  hamburger: GiHamburgerMenu,
  reactQueryIcon: SiReactquery,
  reactTableIcon: SiReacttable,
  // add more icons here
}

interface Props {
  name: string
}

const Icon = ({ name }: Props): JSX.Element => {
  if (Object.keys(Icons).includes(name)) {
    const SelectedIcon = Icons[name as keyof typeof Icons]
    return <SelectedIcon size={20} />
  }
  return <div>name</div>
}

export default Icon
