import { useDispatch} from 'react-redux';
import './Card.css';
import { deleteTask, editTask } from '../../../../services/actions/taskAction';
import { changeModal } from '../../../../services/actions/modalAction';

function Card({ task }) { 

    const dispatch = useDispatch();

    const openEdit = () => { 
        dispatch(changeModal({
            isOpen: true,
            mode: 'edit',
            task: task
        }))
    };

    const deleteCard = task => {
        dispatch(deleteTask(task))
    };

    const handleDragStart = e => { 
        e.dataTransfer?.setData("text/plain", task.id);
    }

    const trimTitle = title => title?.length > 15
        ? title.slice(0, 15) + "..."
        : title;  

    return (
        <div
            className="card"
            draggable
            onDragStart={e => handleDragStart(e)}>
            <div className="card__title">
                <h2>{trimTitle( task.title )}</h2>
                <div className="card__functional">
                    <button
                        className='btn-edit'
                        onClick={() => openEdit()}></button>
                    <button
                        className='btn-delete'
                        onClick={() => deleteCard(task)}></button>
                </div>
            </div>
            <div className="card__body">
                <p>{task.text}</p>
            </div>
            <div className="card__date">
                {task.status !== "Archived" && <button onClick={() => dispatch(editTask( { ...task, status: "Archived" }))}>Archive</button>}
                <p>{task.date.toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default Card;