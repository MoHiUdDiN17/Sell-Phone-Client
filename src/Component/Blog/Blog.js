import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mx-10 my-10'>
                <p className='text-3xl'>1. What are the different ways to manage a state in a React application?</p>
                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <ul>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Global state</li>
                    <li>URL state</li>
                </ul>
            </div>
            <div className='mx-10 my-10'>
                <p className='text-3xl'>2. How does prototypical inheritance work?</p>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='mx-10 my-10'>
                <p className='text-3xl'>3. What is the difference between javascript and NodeJS?</p>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='mx-10 my-10'>
                <p className='text-3xl'>4. React vs. Angular vs. Vue?</p>
                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;