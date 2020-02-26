import React, { Component } from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import Form from "./Form";
import {ThemeProvider} from './contexts/ThemeContext';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
