export const addTaskAction = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    };
};

export const dellTaskAction = (id) => {
    return {
        type: "DELL_TASK",
        payload: id
    };
};