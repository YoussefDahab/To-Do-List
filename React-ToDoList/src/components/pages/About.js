// functional component - rcf tab
/*If you don't need a div, you can use a react fragment. Its like a ghost element. It doesn't show in the DOM, however you need it for JSX when returning something.
We don't want to display the about component on the todo list page. We want it to be a completely different URL*/

import React from 'react';

export default function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is a TodoList app. It is part of a REACT crash course</p>
        </React.Fragment>
    )
}
