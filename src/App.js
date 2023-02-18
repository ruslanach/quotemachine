
import React from 'react';
import {connect, Provider} from "react-redux";
import {getQuotes, setCurrentQuotes} from "./redux/quoteReducer";
import store from "./redux/reduxStore";
import Quote from "./components/quote/quote";
class App extends React.Component  {
    componentDidMount() {
        this.props.getQuotes();
    }

    render() {
        if (this.props.initialized) {

            return <Quote {...this.props}/>
        }
    }
}

const mapStateToProps =(state) =>{

  return {
      quotes:state.allQuotes.quotes,
      initialized:state.allQuotes.initialized,
      quote:state.allQuotes.quote


  }
}

const AppContainer=  connect(mapStateToProps,  {getQuotes,setCurrentQuotes})(App);
const MainApp = (props) =>{
  return (
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>

      </React.StrictMode>
  )
}
export default MainApp;


