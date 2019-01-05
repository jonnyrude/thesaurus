import React, { Component } from 'react';

class Results extends Component {

    componentWillMount() {
        this.digestProps();
    }

    render () {
        return (
            <div className="search-result">
                <h3>{this.props.wordType}</h3>
                <ul>
                    {this.state.results.map(result => {
                        return <div> <h4>{result}</h4>
                        {this.props.oneDefinition[result].map(item => {
                            return <li>{item}</li>
                        })}

                        </div>
                    })}
                </ul>
            </div>
        )
    }
    // put data into useful arrays
    digestProps () {
        const partOfSpeech = this.props.wordType;
        const results = Object.keys(this.props.oneDefinition);

        this.setState({ partOfSpeech, results })
    }
}

export default Results;