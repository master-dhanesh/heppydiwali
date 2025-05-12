const Read = (props) => {
    const users = props.users;
    // const setusers = props.setusers;

    const renderuser = users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
    });

    return (
        <div>
            <h1>User Data</h1>
            <ol>{renderuser}</ol>
        </div>
    );
};

export default Read;
