import React from 'react';
import Header from './header.js';
import Top from './top.js';
import List from './list.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: "Top", items: []};
        this.linkClickEventHandler = this.linkClickEventHandler.bind(this);
    }

    linkClickEventHandler(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.dataset.linkTarget);
        console.log("before set state");
        this.setState({currentPage: event.target.dataset.linkTarget});
        console.log("after set state");
    }

    render() {
        let Content = null;

        const currentPage = this.state.currentPage;
        console.log(currentPage);      
        switch (currentPage) {
            case "Top":
                Content = (() => <Top />);
                break;
            case "List":
                Content = (() => <List />);
                break;
        }

        return (
            <div className="container-fluid">
                <Header action={this.linkClickEventHandler}/>
                <Content />
            </div>
        )
    }
}

export default App;