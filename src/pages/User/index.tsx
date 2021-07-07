import { Component } from "react";

type Props = {};

type State = {
  signed: boolean;
};

export default class User extends Component<{}, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      signed: false,
    };
  }

  componentDidMount() {
    this.setState({ signed: true });
  }

  // Error boundary
  componentDidCatch() {}

  render() {
    return (
      <div>
        <p>{`Signed: ${this.state.signed}`}</p>
      </div>
    );
  }
}
