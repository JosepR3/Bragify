import React from "react";

import SideBar from "../../components/organisms/SideBar/SideBar";
import Footer from "../../components/organisms/Footer";
import Header from "../organisms/Header";
import MainContainer from "../../components/organisms/MainContainer";
import SearchList from "../molecules/SearchList";

export default function withLayout(WrappedComponent) {

  function WrapperComponent({ ...props }) {

    return (
      <div className="d-flex h-100">
        <SideBar />

        <div className="d-flex flex-column vh-100 position-relative vw-100">
          <Header />
          <MainContainer>
            <SearchList />
            <WrappedComponent className="container" {...props} />
          </MainContainer>
        </div>
        <Footer />
      </div>
    );
  }
  return WrapperComponent;
}
