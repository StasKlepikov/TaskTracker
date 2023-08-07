import './MainPage.css';

import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';
import Modal from '../modal/Modal';


function MainPage() {
	return (
		<div className="main-page">
			<Header />
			<Sidebar />
			<Outlet />
			<Footer />
			<Modal />
		</div>
  	);
}

export default MainPage;