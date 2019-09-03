import React  from 'react'
import {Nav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav'

interface ISidebarMenuProps {
  groups: INavLinkGroup[],
  expanded: string,
  collapsed: string,
}

const SidebarMenu = ({groups, expanded, collapsed} : ISidebarMenuProps) => (
  <div className='SidebarMenu'>
    <Nav groups={groups}
      expandedStateText={expanded}
      collapsedStateText={collapsed}
    />
  </div>
)

SidebarMenu.defaultProps = {
  groups: [{
    links: [{
      name: 'Home',
      url: '#',
      links: [{
        name: 'Activity',
        url: '#',
        onClick: () => { console.log('Activity...') }
      }, {
        name: 'News',
        url: '#',
        onClick: () => { console.log('News...') }
      }],
      isExpanded: true,
      icon: 'Add'
    }, 
    {
      name: 'Documents',
      url: '#',
      icon: 'Add',
      isExpanded: true,
      onClick: () => { console.log('Documents...') }
    }, 
    {
      name: 'Pages',
      url: '#',
      icon: 'Add',
      onClick: () => { console.log('pages...') }
    }, 
    {
      name: 'Long Name Test for elipsis. Longer than 12em!',
      url: '#',
      icon: 'Add',
      onClick: () => { console.log('long name...') }
    },
    {
      name: 'Edit',
      url: '#',
      icon: 'Edit',
      onClick: () => { console.log('edit...') },
    }]
  }],
  expanded: 'expanded',
  collapsed: 'collapsed',
}

export default SidebarMenu