// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import CircleMedium from 'mdi-material-ui/CircleMedium'
import UsbFlashDriveOutline from 'mdi-material-ui/UsbFlashDriveOutline'
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'
import RegisteredTrademark from 'mdi-material-ui/RegisteredTrademark'
import ClipboardListOutline from 'mdi-material-ui/ClipboardListOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ChartLine from 'mdi-material-ui/ChartLine'

// ** Type import
import { VerticalNavItemsType } from '../../../layouts/types'

const navigation: VerticalNavItemsType = [
  {
    title: 'Master',
    icon: HomeOutline,
    children: [
      {
        title: 'Group',
        icon: CircleMedium,
        path: '/master/group'
      },
      {
        title: 'Company',
        icon: CircleMedium,
        path: '/master/company'
      },
      {
        title: 'work',
        icon: CircleMedium,
        path: '/master/work'
      },
      {
        title: 'Phone Book',
        icon: CircleMedium,
        path: '/master/phonebook'
      },
    ]
  },
  {
    sectionTitle: 'Work'
  },
  {
    title: 'DSC',
    icon: UsbFlashDriveOutline,
    path: '/'
  },
  {
    title: 'Pending Work',
    icon: BriefcaseOutline,
    path: '/work/pending-work'
  },
  {
    title: 'Annual Filing',
    icon: ClipboardListOutline,
    path: '/work/annual-filing'
  },
  {
    title: 'Trademark',
    icon: RegisteredTrademark,
    path: '/work/trademark'
  },
  {
    sectionTitle: 'Report'
  },
  {
    title: 'Report',
    icon: ChartLine,
    children: [
      {
        title: 'Pending Work',
        icon: CircleMedium,
        path: '/report/pending-work'
      },
      {
        title: 'Annual Filing',
        icon: CircleMedium,
        path: '/report/annual-filing'
      }
    ]
  },
  {
    sectionTitle: 'User'
  },
  {
    title: 'User',
    icon: AccountOutline,
    children: [
      {
        title: 'Client',
        icon: CircleMedium,
        path: '/user/client'
      },
      {
        title: 'Employee',
        icon: CircleMedium,
        path: '/user/employee'
      }
    ]
  },
]

export default navigation
