// ** React Imports
import { ElementType, ReactNode, useEffect, useState } from 'react'

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Configs Import
import themeConfig from '../../../configs/themeConfig'

// ** Types
import { NavLink } from '../../../layouts/types'
import { Settings } from '../../../context/settingsContext'

// ** Custom Components Imports
import UserIcon from '../../shared-components/UserIcon'

// ** Utils
import { handleURLQueries } from '../../../layouts/utils'


interface Props {
  item: NavLink
  settings: Settings
  navVisible?: boolean
  toggleNavVisibility: () => void
  hasChildren?: boolean
  isOpen?: boolean
  onToggle?: () => void
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`
  }
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility, hasChildren, isOpen, onToggle }: Props) => {
  const router = useRouter()
  const IconTag = item.icon
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isNavLinkActive = () => {
    // Add safety check for router initialization and client-side rendering
    if (!isClient || !router.isReady) return false
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  // If has children, render as button to toggle dropdown
  if (hasChildren) {
    return (
      <ListItem
        disablePadding
        className='nav-link'
        sx={{ mt: 1.5, px: '0 !important' }}
      >
        <MenuNavLink
          component={'button'}
          className={isNavLinkActive() ? 'active' : ''}
          onClick={onToggle}
          sx={{
            pl: 5.5,
            backgroundColor: isOpen ? 'action.selected' : 'transparent',
            textAlign: 'left',
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' })
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: 'text.primary',
              transition: 'margin .25s ease-in-out'
            }}
          >
            <UserIcon icon={IconTag} />
          </ListItemIcon>
          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.title}</Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                }}
              />
            ) : null}
            {isOpen ? <ChevronDown sx={{ ml: 2 }} /> : <ChevronRight sx={{ ml: 2 }} />}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </ListItem>
    )
  }

  // Regular nav link
  return (
    <ListItem
      disablePadding
      className='nav-link'
      sx={{ mt: 1.5, px: '0 !important' }}
    >
      <Link href={item.path === undefined ? '/' : `${item.path}`} passHref legacyBehavior> 
        <MenuNavLink
          component={'button'}
          className={isNavLinkActive() ? 'active' : ''}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            pl: 5.5,
            backgroundColor: isNavLinkActive() ? 'action.selected' : 'transparent',
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' })
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: 'text.primary',
              transition: 'margin .25s ease-in-out'
            }}
          >
            <UserIcon icon={IconTag} />
          </ListItemIcon>
          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.title}</Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink
