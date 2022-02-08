import React from "react"

import Copyright from "../../atoms/Copyright";

function MainContainer({children, ...props}) {

  return (
    <main className="main__container"{...props}>{children}
      <Copyright/>
    </main>
  );
}

export default MainContainer;
