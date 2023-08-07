import { v4 } from "uuid";
import { TASK_ADD, TASK_EDIT, TASK_DELETE } from "../actions/taskAction";

const initialState = {
    tasks: []
};

const taskReducer = (state=initialState, action) => { 
    switch (action.type) { 
        case TASK_ADD: {
            const defaultValues = {
                id: v4(),
                status: "To Do",
                title: "New Task",
                text: "Task description...",
                date: new Date()
            }
            return {
                ...state, tasks: [...state.tasks, {...defaultValues, ...action.payload }]
            }
        }
        case TASK_EDIT: { 
            const updatedTasks = state.tasks
                .map(t => {
                    if (t.id === action.payload.id) return { ...action.payload }
                        return t;
                });
            return {...state, tasks: updatedTasks}
        }
        case TASK_DELETE: {
            const updatedTasks = state.tasks.filter(t => t.id !== action.payload.id);
            return { ...state, tasks: updatedTasks };
         }
        default: return state;
    }
}

export default taskReducer;