import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import Content from './components/content-component/Content/Content'
//import Sales from './components/business-component/Sales/Sales'
import NavBar from './components/content-component/NavBar/NavBar'
import SidebarMenu from './components/content-component/SideBarMenu/SidebarMenu'
import Footer from './components/content-component/Footer/Footer'
//import Temp from '../src/components/Temp/Temp'
import './index.css'

export const App: React.FunctionComponent = () => {
  return (
    <Fabric className="App thisIsMyClass">
    <div className="header">
      <NavBar />
    </div>        
    <div className="body">
      <div className="content">
        <Content />
      </div>
      <div className="sidebar">
        <SidebarMenu />
      </div>      
    </div>
    <div className="footer">
      <Footer />
    </div>
  </Fabric>
  );
};
