import { useDispatch, useSelector } from "react-redux";


interface ITodoList {
    todoList: {
        id: number;
        name: string;
    }
}

const useTodo = () => {
    const todoList = useSelector((state: ITodoList) => state.todoList);

    return {
        todoList
    }
};

export default useTodo;
