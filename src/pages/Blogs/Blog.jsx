import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    
    return (
        <div className=''>
            

            <div className='my-container flex justify-end  mt-6'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn  btn-warning' >Download Pdf</button>}
                </Pdf>
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


            <div className='my-container ' ref={ref}>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className='w-96 rounded-xl' src="/public/site-img/DetailsBanner.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;