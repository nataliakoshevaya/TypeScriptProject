import { useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { todos, error, loading, page, limit } = useTypedSelector(
    (state) => state.todo
  );

  const pages = [1, 2, 3, 4, 5];

  const { fetchTodo, setTodoPage } = useAction();

  useEffect(() => {
    fetchTodo(page, limit);
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
        Todo List:
      <ol>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ol>
      <div>
            {pages.map(p => {
                return <span 
                        style={{border:p === page ? '2px solid green' : '1px solid grey', padding: 10}}
                        onClick={() => setTodoPage(p)}
                        >{p}</span>
            })}
      </div>
    </div>
  );
};

export default TodoList;
