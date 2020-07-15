import React from 'react'

const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

// Wrap app
// const withClass = (WrappedComponent, className) => {
//     return props => (
//         Forward props
//         < div className={className}><WrappedComponent {...props}/></div>
//     );
// }

export default withClass;