// TODO
var TodoList = (props) => {

  var onListItemClick = (event) => {
    console.log('Finish doing this task');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li onClick={onListItemClick}>{props.todos[1]}</li>
      <li onClick={onListItemClick}>{props.todos[2]}</li>
    </ul>
  );
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
