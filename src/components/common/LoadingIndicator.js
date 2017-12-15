import React from 'react';
import styled from 'styled-components';
import 'loaders.css/loaders.min.css';

const StyledBall = styled.div`
  background-color: #3f6695 !important;
`;

const Centered = styled.div`
  text-align: center;
`;

const Loader = () => (
  <Centered className="ball-pulse">
    <StyledBall />
    <StyledBall />
    <StyledBall />
  </Centered>
);

const EmptyComponent = () => null;

class LoadingIndicator extends React.Component {
  constructor() {
    super();

    this.state = {
      componentToRender: EmptyComponent,
    };

    this.swapComponent = this.swapComponent.bind(this);
  }

  componentDidMount() {
    this.swapComponent();
  }

  swapComponent() {
    this.setState({
      componentToRender: Loader,
    });
  }

  render() {
    return this.state.componentToRender();
  }
}

export default LoadingIndicator;
