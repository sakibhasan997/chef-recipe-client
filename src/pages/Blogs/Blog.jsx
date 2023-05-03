import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className="header bg-blue-100 py-14">
                <h1 className='font-bold text-3xl text-[#1A1919] text-center'>Question & Answer</h1>
            </div>
            <div className='my-container my-16'>
                <div className=' border-2 p-8 rounded-xl my-5  shadow-lg '>
                    <h1 className='text-xl font-bold'>What is differences between uncontrolled and controlled components.?</h1>
                    <br />
                    Controlled components are those that are explicitly managed by a parent component, whereas uncontrolled components operate independently and have their own internal state management.
                    controlled components are typically used when a parent component needs to manage the state of its children components, while uncontrolled components are used when a component needs to manage its own internal state independently.

                    <br />
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>How to validate React props using PropTypes.?</h1>
                    <br />
                    <p>
                        <br />
                        The example, we define the MyComponent function that accepts props and returns a JSX element. We also define the propTypes object that specifies the expected data types for each prop. Finally, we use the props inside the component as usual, and the PropTypes library will validate them based on the defined propTypes object.

                        If a prop is passed with a different data type than expected, PropTypes will generate a warning in the console. This can help catch bugs early and make your code more robust.
                    </p>
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is the difference between nodejs and express js.?</h1>
                    <br />
                    <p>
                        <br />
                        Node.js provides a runtime environment for executing JavaScript on the server-side, while Express.js is a specialized web application framework built on top of Node.js that provides additional tools and features for building web applications and APIs. Express.js extends the capabilities of Node.js by adding a more robust routing system, a middleware system, and an opinionated structure for building web applications.
                    </p>
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is a custom hook, and why will you create a custom hook?</h1>
                    <br />
                    <p>
                        <br />
                        custom hooks provide a way to encapsulate and reuse logic across multiple components in React. You might create a custom hook to improve reusability, encapsulate complex logic, manage stateful behavior, abstract implementation details, and simplify the code in your components.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;