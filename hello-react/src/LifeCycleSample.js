import { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFormProps(nextProps, prevState) {
    console.log('getDerivedStateFormProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
}

componentDidMount() {
  console.log('componentDidMount');
}

sholdComponentUpdate(nextProps, nextState) {
  console.log('shouldComponentUpdate', nextProps, nextState)
  return nextState.number % 10 !==4;
}

componentWillUnmount() {
  console.log('componentWillunmount');
}

handleClick = () => {
  this.setState({
    number: this.state.number + 1
  })
}

getSnapshotBeforeUpdate(prevProps, prevState) {

}

export default LifeCycleSample;
