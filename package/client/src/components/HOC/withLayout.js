import React from "react";

import SideBar from "../../components/organisms/SideBar/SideBar";
import MusicPlayer from '../../components/molecules/MusicPlayer/MusicPlayer';
import Header from "../organisms/Header";
import MainContainer from "../../components/organisms/MainContainer";

export default function withLayout(WrappedComponent) {

  function WrapperComponent({...props}) {
    
    return (
      <div className="d-flex h-100">
        <SideBar/>
          <div className="d-flex flex-column vh-100 position-relative vw-100">
          <Header />
            <MainContainer>
              <WrappedComponent className="container" {...props}/>
            </MainContainer>
          </div>
        <MusicPlayer/>
      </div>
    );
  }
  return WrapperComponent;
}
