import React from 'react';

class StateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'starting...'};
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
};

export default StateMessage;