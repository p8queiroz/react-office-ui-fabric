import React  from 'react'

interface ITempProps extends React.Props<ITempProps> {
    Title: string
    Name: string
}

interface ITempState {
    visible: boolean,
    Title: string
}

export default class Temp extends React.Component<ITempProps, ITempState> {
    static defaultProps: ITempProps

    constructor(props: ITempProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log('component did mount...')
    }

    render() {
      return (
      <div>
        <h1>Hello, {this.props.Name}, {this.props.Title}!</h1>
        <button onClick={this.handleChange}>
          click me!
        </button>
      </div>
    )}

    handleChange() {
        alert('hello!')
        this.setState({Title: "Web Developer"});
    }
}

Temp.defaultProps = {
    Name: 'Paulo',
    Title: 'System Analyst'
}