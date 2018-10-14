import React from 'react';

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        fetch("http://localhost:8080/api")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({items: result})
                }
            )
    }

    render() {
        const items = this.state.items;

        return (
            <div>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                    </tr>
                    {items.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}   
                </table>
            </div>
        )
    }
}

export default Top;