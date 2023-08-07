import { useSelector } from 'react-redux';
import './ArchivePage.css';
import Card from '../mainPage/content/card/Card';

function ArchivePage() { 

    const tasks = useSelector(state => state.tasks.tasks);
    const search = useSelector(state => state.search);

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
        <div className='archive-page'>
            {tasks
                .filter(task => task.status === "Archived" && filterTask(task) && filterByDate(task))
                .map(task => (<Card task={task} />))}
        </div>
    );
}

export default ArchivePage;