// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
// import { Theme } from '@mui/material/styles'
// import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import VerticalLayout from './VerticalLayout'

// ** Navigation Imports
import VerticalNavItems from '../components/vertical/navigation/navigaionItems'

// ** Component Import
import VerticalAppBarContent from '../components/vertical/appBar/AppBarContent'

// ** Hook Import
import { useSettings } from '../hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  // const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const hidden = true

  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems} // Navigation Items - now a constant array
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  )
}

export default UserLayout
