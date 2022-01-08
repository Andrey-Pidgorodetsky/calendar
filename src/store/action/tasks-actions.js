export const addTaskAction = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    };
};

export const deleteTaskAction= (id) => {
    return {
        type: "DELL_TASK",
        payload: id
    };
};