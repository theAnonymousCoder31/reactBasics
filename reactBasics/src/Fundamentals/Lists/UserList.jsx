const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Bob Johnson", age: 40 },
  ];

  return (
    <div>
      {users.map(({ id, name, age }) => (
        <ul key={id}>
          <li>
            {name} - {age}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
