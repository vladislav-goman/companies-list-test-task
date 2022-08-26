import { Component, ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = {
    error: null,
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ error: true });
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return <p>Oopsie woopsie (try refreshing the page)</p>;
    }
    return this.props.children;
  }
}
