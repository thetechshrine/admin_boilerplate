import React, { createContext, useState } from 'react';
import { sidebarStates } from '../../utils/enums';

export const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [sidebarState, setSidebarState] = useState(sidebarStates.DEFAULT);
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [togglerVisible, setTogglerVisible] = useState(false);
  const [togglerHovered, setTogglerHovered] = useState(false);

  function toggleSidebar() {
    if ([sidebarStates.DEFAULT, sidebarStates.EXPANDED].includes(sidebarState)) setSidebarState(sidebarStates.SHRINKED);
    else setSidebarState(sidebarStates.EXPANDED);
  }

  function handleEnterSidebar() {
    setSidebarHovered(true);
    setTogglerVisible(true);
  }

  function handleExitSidebar() {
    setSidebarHovered(false);
    if (sidebarState !== sidebarStates.SHRINKED && !togglerHovered) setTogglerVisible(false);
  }

  function handleEnterToggler() {
    setTogglerHovered(true);
    setTogglerVisible(true);
  }

  function handleExitToggler() {
    setTogglerHovered(false);
    if (sidebarState !== sidebarStates.SHRINKED && !sidebarHovered) setTogglerVisible(false);
  }

  return (
    <LayoutContext.Provider
      value={{ sidebarState, togglerVisible, toggleSidebar, handleEnterSidebar, handleExitSidebar, handleEnterToggler, handleExitToggler }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
