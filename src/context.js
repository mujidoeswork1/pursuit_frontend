import React, { useState, useContext } from "react";
// import sublinks from "./data"; // LINKS imported!

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  // ALL states & functions which we want to be GLOBAL - Start

  const [myGoals, setMyGoals] = useState("initial state");

  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  //   const openSidebar = () => {
  //     setIsSidebarOpen(true);
  //   };
  //   const closeSidebar = () => {
  //     setIsSidebarOpen(false);
  //   };
  //   const openSubmenu = () => {
  //     setIsSubmenuOpen(true);
  //   };
  //   const closeSubmenu = () => {
  //     setIsSubmenuOpen(false);
  //   };
  // ALL states & functions which we want to be GLOBAL - END

  return (
    <GlobalContext.Provider
      value={{
        myGoals,
        setMyGoals,

        // isSidebarOpen,
        // openSidebar,
        // closeSidebar,
        // isSubmenuOpen,
        // openSubmenu,
        // closeSubmenu,
        // page,
        // location,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
// make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
