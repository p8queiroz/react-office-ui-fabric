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
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          iconProps: {
            iconName: 'Calendar'
          }
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
  href: '#'
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

export const farMenuItems = [{
  key: 'sort',
  name: 'Sort',
  icon: 'SortLines',
  onClick: identity
}, {
  key: 'tile',
  name: 'Grid view',
  icon: 'Tiles',
  onClick: identity
}, {
  key: 'info',
  name: 'Info',
  icon: 'Info',
  onClick: identity
}]