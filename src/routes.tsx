import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrfanagesMap from './pages/OrfanagesMap';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/app' element={<OrfanagesMap/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;