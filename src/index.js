import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/view';
import Other from './components/other';
import './index.css'

function Main() {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <View />
      </div>
      <div className='col-md-9'>
        <Other />
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
