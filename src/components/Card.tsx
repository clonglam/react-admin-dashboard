import React from 'react'
import type { ReactNode } from 'react'

type Props = {
  section: string
  sx?: string
  children: ReactNode
}

const Card = ({ section, children, sx }: Props): JSX.Element => {
  return (
    <div className={sx ? `${sx} dashboard-card` : 'dashboard-card'}>
      <div className="dashboard-card-title">{section}</div>
      <div className="divider" />
      <div className="dashboard-card-content">{children}</div>
    </div>
  )
}

export default Card
