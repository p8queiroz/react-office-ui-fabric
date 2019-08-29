import * as React from 'react';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import {MarqueeSelection} from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/utilities/selection'
import {Check} from 'office-ui-fabric-react/lib/Check'
import {/*identity,*/ createListItems} from '../../utils/index'
//import {menuItems as defaultMenuItems, farMenuItems as defaultFarMenuItems} from '../../utils/items'
import './Content.css'

interface IContentProps {
    /*maxBreadcrumbs?: 3,
    breadcrumbs: [
      {text: 'Files', 'key': 'Files'},
      {text: 'This is folder 1', 'key': 'f1'},
      {text: 'This is folder 2', 'key': 'f2'},
      {text: 'This is folder 3', 'key': 'f3'},
      {text: 'This is folder 4', 'key': 'f4'},
      {text: 'Home', 'key': 'f5'},
    ],
    menuItems: [],
    farMenuItems: [],*/
}

interface IContentState {
  items: any;
  selection: any;
  selectionMode: any;
  canSelect: any;
}

class Content extends React.Component<any, any> {

  constructor(props: any) {
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
    //this._hasMounted = true
  }

  _onSelectionChanged = () => {
   // if (this._hasMounted) this.forceUpdate()
  }

  render() {
    const { maxBreadcrumbs} = this.props
    const {items, selection, selectionMode} = this.state
    return (
      <div className="container">
        <Breadcrumb 
          className="breadcrumbs" 
          items={[
            {text: 'Files', 'key': 'Files'},
            {text: 'This is folder 1', 'key': 'f1'},
            {text: 'This is folder 2', 'key': 'f2'},
            {text: 'This is folder 3', 'key': 'f3'},
            {text: 'This is folder 4', 'key': 'f4'},
            {text: 'Home', 'key': 'f5'},
          ]}
          maxDisplayedItems={maxBreadcrumbs}
        />
        <div> CONTENT COMPONENT </div>
        <div className="selection">
          <MarqueeSelection selection={selection} isEnabled={selectionMode === SelectionMode.multiple}>
            <SelectionZone selection={selection}
              selectionMode={selectionMode}
              onItemInvoked={item => alert(item)}>
            {items.map((item: { name: React.ReactNode; }, index: string | number | undefined) => (
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

  /*private _onBreadcrumbItemClicked = (ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void => {
    console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
  };*/

}


export default Content