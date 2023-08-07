import style from './App.module.css';

import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import MainPage from './components/mainPage/MainPage';
import Content from './components/mainPage/content/Content';
import ArchivePage from './components/archivePage/ArchivePage';
import ErrorPage from './components/errorPage/ErrorPage';

function App() {
	return (
		<Provider store={ store }>
			<div className={style.App}>
				<Routes>
					<Route path="/" element={<MainPage />}>
						<Route index element={<Content />} />
						<Route path="archived" element={<ArchivePage />} />
						<Route path="*" element={ <ErrorPage />} />
					</Route>
				</Routes>
			</div>
		</Provider>
  	);
}

export default App;

