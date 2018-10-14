import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    onclick(event) {
        console.log(event);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"  href="#" onClick={this.props.action} data-link-target="Top">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={this.props.action} data-link-target="List">一覧</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;