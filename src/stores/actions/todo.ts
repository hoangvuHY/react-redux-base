const todoList = [
    { id: 1, name: 'hello1' },
    { id: 2, name: 'hello2' },
    { id: 3, name: 'hello3' },
];

export const getAll = () => (dispatch: any) => {
    dispatch({
        type: 'GET_ALL',
        payload: todoList,
    });
}
