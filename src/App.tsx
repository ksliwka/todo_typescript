import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TododsContextProvider from "./store/todos-context";

function App() {
  return (
    <TododsContextProvider>
      <NewTodo  />
      <Todos />
    </TododsContextProvider>
  );
}

export default App;
