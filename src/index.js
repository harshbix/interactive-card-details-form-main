import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/view';
import Other from './components/other';

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

ReactDOM.render(<App />, document.getElementById('root'));
