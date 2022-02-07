import React from "react";

import SideBar from "../../components/organisms/SideBar/SideBar";
import MusicPlayer from '../../components/molecules/MusicPlayer/MusicPlayer';
import Copyright from '../../components/atoms/Copyright/Copyright';
import Header from "../organisms/Header";
import MainContainer from "../../components/organisms/MainContainer";

export default function withLayout(WrappedComponent) {

  function WrapperComponent({...props}) {
    
    return (
      <>
        <SideBar/>
        <Header />
          <MainContainer>
            <WrappedComponent {...props}/>
          </MainContainer>
        <MusicPlayer/>
      </>
    );
  }
  return WrapperComponent;
}
