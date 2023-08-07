import style from './Sidebar.module.css';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo_notes from '../../../assets/notes.png';
import home_icon from '../../../assets/icons/home.png';
import add_icon from '../../../assets/icons/add.png';
import archive_icon from '../../../assets/icons/archive.png';

import { changeModal } from '../../../services/actions/modalAction';

function Sidebar() { 

    const dispatch = useDispatch(); 

    const handleIsOpen = () => { 
        dispatch(changeModal({
            isOpen: true,
            mode: 'add'
        }));
    }

    return (
        <div className={style.sidebar}>
            <img src={logo_notes} alt="logo_notes" />
            <div className={style.sidebar__container}>
                <div className={style.sidebar__item}>
                    <img src={ home_icon } alt="home_icon" />
                    <Link to="/">Home</Link>
                </div>
                <div className={style.sidebar__item}>
                    <img src={ add_icon } alt="add_icon" />
                    <a
                        href="#events"
                        onClick={() => handleIsOpen()}>Add Task!</a>
                </div>
                <div className={style.sidebar__item}>
                    <img src={ archive_icon } alt="completed_icon" />
                    <Link to="archived">Archive</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;