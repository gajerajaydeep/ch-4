import React from 'react';

const withUserData = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <div>
                    <h1>Higher Order Components</h1>
                    <h5>User Data:</h5>
                    <WrappedComponent {...props} />
                </div>
            </>
        );
    };
};

export default withUserData;