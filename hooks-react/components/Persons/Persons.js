import React, { PureComponent, Component } from 'react';
import Person from '../Persons/Person/Person';

// Normal component which implements shouldComponentUpdate with complete props check,any change on the component
// class Persons extends PureComponent {
class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }

    // Removed
    // componentWillReceiveProps(props) {
    //     console.log('[Person.js] shouldComponentUpdate');
    //     console.log('[Person.js], Props:', props);
    // }

    // Removed
    // componentWillUpdate() {

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.changed !== this.props.clicked) {
            return true
        }
        // Continue updating...
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate');
        console.log('[Person.js] Snapshot', snapshot);
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}

export default Persons;