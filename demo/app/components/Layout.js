import React from 'react'

const Widget = React.createClass({
  render: function() {
    return (
      <div>
        Layout:
        <br/>
        {this.props.children}
      </div>
    );
  }
});

export default Widget;
