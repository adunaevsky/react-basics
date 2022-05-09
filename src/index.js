import React from 'react';
import ReactDOM from 'react-dom/client';

import Reducer from './Reducer';
import Effects from './Effects';
import State from './State';
import Ref from './Ref'
import LayoutEff from './LayoutEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LayoutEff />
);


