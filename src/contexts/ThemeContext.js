import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props){
    super(props);
    this.state={isDarkMode:true}
  }
  render() {
    return <ThemeContext.Provider value={{...this.state, isWorking:true}}>{this.props.children}</ThemeContext.Provider>;
  }
}
