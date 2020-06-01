import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { store } from './redux/storeRedux';

class App extends Component{
    
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Main/>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));