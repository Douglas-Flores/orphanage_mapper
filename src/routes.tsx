import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrfanagesMap from './pages/OrfanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/app' element={<OrfanagesMap/>} />
                <Route path='/create' element={<CreateOrphanage/>} />
                <Route path='/detail/:id' element={<Orphanage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;