import './Content.css';

import Column from './column/Column';

function Content() { 
    return (
        <div className='content'>
            <Column status={"To Do"}/>
            <Column status={"In progress"}/>
            <Column status={"Done"} />
        </div>
    );
}

export default Content;