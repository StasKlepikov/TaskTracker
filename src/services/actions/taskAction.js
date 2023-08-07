
export const TASK_ADD = 'task/add';
export const TASK_EDIT = 'task/edit';
export const TASK_DELETE = 'task/delete';

export const addTask = task => {
    return {
        type: TASK_ADD,
        payload: task,
    }
}

export const editTask = task => {
    return {
        type: TASK_EDIT,
        payload: task,
    }
}

export const deleteTask = task => {
    return {
        type: TASK_DELETE,
        payload: task,
    }
}