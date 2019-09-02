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
      }, {
        name: 'News',
        url: '#',
      }],
      isExpanded: true,
    }, {
      name: 'Documents',
      url: '#',
      isExpanded: true,
    }, {
      name: 'Pages',
      url: '#',
    }, {
      name: 'Notebook',
      url: '#',
    }, {
      name: 'Long Name Test for elipsis. Longer than 12em!',
      url: '#',
    }, {
      name: 'Edit Link',
      url: '#',
      iconClassName: 'ms-Icon--Edit',
    }, {
      name: 'Edit',
      url: '#',
      icon: 'Edit',
      onClick: () => {},
    }]
  }],
  expanded: 'expanded',
  collapsed: 'collapsed',
}

export default SidebarMenu