import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-content'

// Functional component
const cockpit = (props) => {

    // Ref
    const toggleBtnRef = useRef(null);

    // ContextType on functional component
    // ContextAPI
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request
        // If componentDidMount and componentDidUpdate executed.
        // Simulating HTTP request
        const timer = setTimeout(() => {
            // alert('Saved data to cloud');
        }, 1000);
        // Only render when props.person changed (like computed or observer)
        // }, [props.persons]);
        // Multiple properties
        // }, [a,b,c]);
        // Only render the first time
        return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js] remove cockpit')
        }
        // When component is mounted
    }, []);

    // Wehen component is rendered
    useEffect(() => {
        toggleBtnRef.current.click();
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2')
        return () => {
            console.log('[Cockpit.js] remove cockpit 2')
        }
    })

    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red
    }

    if (props.personsLength.length <= 2) {
        classes.push(classes.red)
    }

    if (props.personsLength.length <= 1) {
        classes.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} onClick={props.clicked}>
                Toggle Persons
            </button>
            {/* Context API */}
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>

    );
}
// Store snaptshot of the component
export default React.memo(cockpit);