import * as React from 'react';
import {Breadcrumb, IBreadcrumbItem} from 'office-ui-fabric-react/lib/Breadcrumb'
import {MarqueeSelection} from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/utilities/selection'
import {Check} from 'office-ui-fabric-react/lib/Check'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import {identity, createListItems} from '../../../utils/index'
import {IContextualMenuItem} from 'office-ui-fabric-react/lib/ContextualMenu'
import {menuItems as defaultMenuItems, farMenuItems as defaultFarMenuItems} from '../../../utils/items'
import './Sales.css'

interface ISalesProps extends React.Props<ISalesProps> {
  items?: IBreadcrumbItem[]
  menuItems: IContextualMenuItem[]
  farMenuItems: IContextualMenuItem[]
  maxBreadcrumbs: number
  breadcrumbs: any[]
}

interface IContentState {
  items: any[]
  selection: Selection
  selectionMode: SelectionMode
  canSelect: string
}

export default class Sales extends React.Component<ISalesProps, IContentState> {

  static defaultProps: ISalesProps

  constructor(props: ISalesProps) {
    super(props);
    this.state = {
      items: createListItems(200),
      selection: new Selection({onSelectionChanged: this._onSelectionChanged}),
      selectionMode: SelectionMode.multiple,
      canSelect: 'all',
    }
    this.state.selection.setItems(this.state.items, false)
  }

  componentDidMount() {
    console.log('component did mount...')
  }

  _onSelectionChanged = () => {
    //console.log('_onSelectionChanged...')
  }

  render() {
    const {breadcrumbs, maxBreadcrumbs, menuItems, farMenuItems} = this.props
    const {items, selection, selectionMode} = this.state
    return (
      <div className="container">
        <Breadcrumb 
          className="breadcrumbs" 
          items={breadcrumbs}
          maxDisplayedItems={maxBreadcrumbs}
        />
        <CommandBar
          items={menuItems}
          farItems={farMenuItems}
          ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />
        <div className="selection">
          <MarqueeSelection selection={selection} isEnabled={selectionMode === SelectionMode.single}>
              <SelectionZone 
                selection={selection}
                selectionMode={selectionMode}
                onItemInvoked={item => console.log(item)}>
                  {items.map((item, index) => (
                    <div key={index} className="selection-item" data-selection-index={index}>
                    {(selectionMode !== SelectionMode.none) && (
                      <span className="check" data-selection-toggle={true}>
                        <Check checked={selection.isIndexSelected(index)} />
                      </span>
                    )}
                      <span className="name">{item.name}</span>
                    </div>
                  ))}  
              </SelectionZone>
          </MarqueeSelection>
        </div>
      </div>
    )
  }

}

Sales.defaultProps = {
  maxBreadcrumbs: 4,
  breadcrumbs: [
    {text: 'This is folder 1', 'key': 'f1', onClick: identity},
    {text: 'This is folder 2', 'key': 'f2', onClick: identity},
    {text: 'This is folder 3', 'key': 'f3', onClick: identity},
    {text: 'Home', 'key': 'f5', onClick: identity},
  ],
  menuItems: defaultMenuItems,
  farMenuItems: defaultFarMenuItems,
}


