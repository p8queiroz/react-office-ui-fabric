import React  from 'react'
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox'
import './NavBar.css'

interface INavBarProps {
  onChange: Function;
  onSearch: Function;
}

class NavBar extends React.Component<any, any> {
  render() {
    return (
     <div className="NavBar">
        <div className="logo ms-font-xl">
          <strong>APP - NavBar Component</strong>
        </div>
        <div className="searchbox">
          <SearchBox labelText="Search"
            onChange={(newValue) => console.log('SearchBox onChange fired: ' + newValue)}
            onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
          />
        </div>
      </div>
    );
}

}

export default NavBar