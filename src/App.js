import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UiComponent from './components/UiComponent';
import TaskLoopComponent from './components/TaskLoopComponent';
import CheckComponent from './components/CheckComponent';



function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={ <CheckComponent /> }/>
					<Route path='/task' element={ <TaskLoopComponent /> }/> 
					<Route path='/ui' element={ <UiComponent /> }/> 
				</Routes>
			</Router>
		</>
	);
}

export default App;
