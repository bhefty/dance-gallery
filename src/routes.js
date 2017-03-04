import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'

import App from './modules/App/'
import Home from './modules/Home'

const Routes = (props) => (
    <Router {...props}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

export default Routes