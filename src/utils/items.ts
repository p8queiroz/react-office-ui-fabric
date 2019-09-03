import {identity} from './index'

export const menuItems = [
  {
    key: 'newItem',
    name: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
    iconProps: {
      iconName: 'Add',
    },
    ariaLabel: 'New',
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          name: 'Email message',
          iconProps: {
            iconName: 'Mail'
          },
          onClick: () => console.log('Email Message')
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          iconProps: {
            iconName: 'Calendar'
          },
          onClick: () => console.log('Calendar')
        }
      ]
    }
  }
, {
  key: 'upload',
  name: 'Upload',
  iconProps: {
    iconName: 'Upload'
  },
  href: '#',
  onClick: () => console.log('Upload')
}, {
  key: 'share',
  name: 'Share',
  iconProps: {
    iconName: 'Share'
  },
  onClick: () => console.log('Share')
}, {
  key: 'download',
  name: 'Download',
  iconProps: {
    iconName: 'Download'
  },
  onClick: () => console.log('Download')
}]

export const farMenuItems = [
  {
    key: 'sort',
    name: 'Sort',
    ariaLabel: 'Sort',
    iconProps: {
      iconName: 'SortLines'
    },
    onClick: () => console.log('Sort')
  },
  {
    key: 'tile',
    name: 'Grid view',
    ariaLabel: 'Grid view',
    iconProps: {
      iconName: 'Tiles'
    },
    iconOnly: true,
    onClick: () => console.log('Tiles')
  },
  {
    key: 'info',
    name: 'Info',
    ariaLabel: 'Info',
    iconProps: {
      iconName: 'Info'
    },
    iconOnly: true,
    onClick: () => console.log('Info')
  }
]