import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import Content from '../src/components/Content/Content'
import NavBar from '../src/components/NavBar/NavBar'
import SidebarMenu from '../src/components/SideBarMenu/SidebarMenu'
import Footer from '../src/components/Footer/Footer'
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
