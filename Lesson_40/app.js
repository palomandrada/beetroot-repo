class App extends React.Component {
    constructor(propos) {
        super(props);
        this.state = {counter: 0}
    }

    clickHandler = () => {
        //alert('Hello React!')
        const newCounter = this.state.counter + 1;
        this.setState({counter: newCounter})
    }

    render () {
        return React.createElement(
            'button',
            {
                //onclick: () => {alert ('Helo React!')}
                onClick: this.clickHandler,
                className: 'btn'
            }, 
            `Click me ${this.state.counter}`
        )
    }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app); // ReactDOM allow us to work with react elements 

root.render(React.createElement(App));

//-------------------------------------------

