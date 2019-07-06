import React from 'react';
import App from './App.js';
import ControlledCarouselStarters from './components/ControlledCarouselStarters';
import Bingo from './components/Bingo.js';
import Gallery from './components/Gallery.js';
import About from './components/About.js';
import Starters from './components/Starters.js';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function AppRouter() {
	return (
		<Router>
		  <div>
		    <Route exact path="/" component={App}/>
		    <Route path="/news" component={ControlledCarouselStarters}/>
		    <Route path="/bingo" component={Bingo}/>
		    <Route path="/gallery" component={Gallery}/>
		    <Route path="/about" component={About}/>
		    <Route path="/starters" component={Starters}/>
		  </div>
		</Router>
	)
}

export default AppRouter;