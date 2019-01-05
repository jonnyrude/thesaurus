import React, { Component } from 'react';


class SearchWarning extends Component {

  render() {
    if(this.props.status) {
        return (
        <div>
            Search only using words - no spaces, numbers, or punctuation
        </div>
    )

    }
    else {
        return (
        <div></div>
        )
    }
  }
}

export default SearchWarning