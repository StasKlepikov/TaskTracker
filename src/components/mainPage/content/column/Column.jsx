import './Column.css';

import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../../../../services/actions/taskAction';

function Column({ status }) { 

    const tasks = useSelector(state => state.tasks.tasks);
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
    
    const handleDrop = e => {
        const taskId = e.dataTransfer?.getData('text/plain');
        const task = tasks.find((task) => task.id === taskId);
        if (!task) return;
        dispatch(editTask({ ...task, status }));
    };

    const handleDragOver = e => {
        e.preventDefault();
    };

    const filterTask = task => {
        const searchToLowerCase = search.searchValue.toLowerCase();
        return task.title.toLowerCase().includes(searchToLowerCase)
            || task.text.toLowerCase().includes(searchToLowerCase);
    };

    const filterByDate = task => { 
        const searchDate = search.date;
        if (!searchDate) return true;
        return task.date.toLocaleDateString() === searchDate.toLocaleDateString();
    };

    return (
        <div className='column'
            onDrop={e => handleDrop(e) }
            onDragOver={e => handleDragOver(e)}>
            <h3>{ status }</h3>
            {tasks
                .filter(task => (task.status === status) && filterTask(task) && filterByDate(task))
                .map(task => (<Card task={task} />))}
        </div>
    );
}

export default Column;