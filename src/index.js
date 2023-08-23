import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/view';
import Other from './components/other';



// Define a functional component
function App() {
    return (
        <div className='row'>
            <div className='col-3'>
                <View />
            </div>
            <div className='col-9'>
                <Other />
            </div>
        </div>
    );
}

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));
