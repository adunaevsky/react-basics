import React from 'react';
import ReactDOM from 'react-dom/client';

import Reducer from './Reducer';
import Effects from './Effects';
import State from './State';
import Ref from './Ref'
import LayoutEff from './LayoutEffect';
import Imperative from './Imperative';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context />
);


