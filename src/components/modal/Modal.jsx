import './Modal.css';
import calendar_icon from '../../assets/icons/calendar.png';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../../services/actions/taskAction';
import { changeModal } from '../../services/actions/modalAction';

import DateField from '../dateField/DateField';

function Modal() {

    const dispatch = useDispatch();
    const { isOpen, mode, task } = useSelector(state => state.modal);
    const [modalTask, setModalTask] = useState();

    const handleAdd = () => { 
        dispatch(addTask(modalTask));
    };

    const handleEdit = () => {
        dispatch(editTask(modalTask));
    };

    useEffect(() => setModalTask(task), [task]);
    
    return (
        <div className={isOpen ? "modal open": "modal"}>
            <div
                className={isOpen ? "modal__content open" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                <button
                    className="modal__del-btn"
                    onClick={() => dispatch(changeModal({ isOpen: false }))}></button>
                <div className="modal__container">
                    <div className="modal__title">
                        <input
                            type="text"
                            name="Title"
                            placeholder='Title...'
                            value={modalTask?.title}
                            onChange={e => setModalTask({ ...modalTask, title: e.target.value })} />
                    </div>
                    <div className="modal__body">
                        <textarea
                            type="text"
                            name="Tetx"
                            placeholder='Text...'
                            value={modalTask?.text}
                            onChange={e => setModalTask({ ...modalTask, text: e.target.value })} />
                        <div className="modal__date">
                            <img src={ calendar_icon } alt="" />
                            <DateField
                                value={modalTask?.date ?? new Date()}
                                onChange={date => {
                                    setModalTask({ ...modalTask, date })}} />
                        </div>
                    </div>
                </div>
                <button
                    className="modal__add-btn"
                    onClick={() => {
                        if (!modalTask?.title) return alert("Enter the task title, please!");
                        mode === 'add'
                            ? handleAdd()
                            : handleEdit();
                        dispatch(changeModal({ isOpen: false }));
                        setModalTask({title: "", text: "", date: new Date()});
                    }}>Add</button>
            </div>
        </div>
    );
}

export default Modal;