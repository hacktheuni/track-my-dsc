// ** Types Import
import { Settings } from '../../../context/settingsContext'
import { NavLink, NavSectionTitle, VerticalNavItemsType } from '../../../layouts/types'

// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import Collapse from '@mui/material/Collapse'
import React from 'react'

interface Props {
  settings: Settings
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
  toggleNavVisibility: () => void
}


const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle
  return VerticalNavLink
}

const VerticalNavItems = (props: Props) => {
  const { verticalNavItems, groupActive, setGroupActive } = props

  // Only one dropdown open at a time
  const handleToggle = (title: string) => {
    if (groupActive.includes(title)) {
      setGroupActive([])
    } else {
      setGroupActive([title])
    }
  }

  const RenderMenuItems = verticalNavItems?.map((item: NavLink | NavSectionTitle, index: number) => {
    if ((item as NavSectionTitle).sectionTitle) {
      const sectionTitle = (item as NavSectionTitle).sectionTitle
      return (
        <React.Fragment key={`section-${sectionTitle}-${index}`}>
          <VerticalNavSectionTitle {...props} item={item as NavSectionTitle} />
        </React.Fragment>
      )
    }

    // Fix: children may not exist on all NavLink items, so use optional chaining
    const navItem = item as NavLink
    const children = (navItem as any).children as VerticalNavItemsType | undefined
    const hasChildren = Array.isArray(children) && children.length > 0
    const isOpen = groupActive.includes(navItem.title)

    return (
      <React.Fragment key={`nav-${navItem.title}-${index}`}>
        <VerticalNavLink
          {...props}
          item={navItem}
          hasChildren={hasChildren}
          isOpen={isOpen}
          onToggle={() => handleToggle(navItem.title)}
          toggleNavVisibility={props.toggleNavVisibility}
        />
        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <div>
              <VerticalNavItems
                {...props}
                verticalNavItems={children}
              />
            </div>
          </Collapse>
        )}
      </React.Fragment>
    )
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
