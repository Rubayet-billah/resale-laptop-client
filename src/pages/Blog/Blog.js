import React from 'react';

const Blog = () => {
    return (
        <div className='mx-2 mb-6'>
            <h2 className='text-center text-3xl md:text-6xl my-8'>Welcome to our Blogs</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        There are four main types of state you need to properly manage in your React apps:

                        <li>Local state</li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                        <b>Local (UI) state</b> : Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook. <br />
                        <b>Global (UI) state</b> : Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                        <b>Server state</b> : Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                        <b>URL state</b> : Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.

                        Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services. <br /> <br />
                        Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Difference between React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        <li>React JS, a library created by Facebook in 2013</li>
                        <li>Angular JS, a framework created by Google in 2010</li>
                        <li>Vue JS, a framework created by Google employee Evan You (the reason why Vue has all the robust features of Angular baked into it)</li> <br />
                        <b>React:</b> This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.

                        There are primarily three reasons which have made the React library a developer darling -

                        Code Reusability- it allows developers to reuse blocks of code for a simple function

                        Ease-of-use - React, though tougher than Vue, has a less steep learning curve than Angular JS.

                        Customizable - The crucial difference between the library and framework is about control. This is where React is ahead of Angular- it is highly customizable. You are in control and you incorporate the parts of the library you need, unlike Angular, which does not allow much modification. <br />
                        <b>Angular:</b> The best thing about Angular is its constant updates. Angular launches an update every 6 months and the new versions build upon the older ones. Take Angular 11 update, for example, which has gotten rid of all bugs the previous version had. Of course, you need to keep a watch on the updates, as the code may be affected in case of a major update. But Google makes sure to wait another 6 months after an update before pulling the previous tools, giving you a full year to change code if the need arises. However, this is just the tip of the iceberg. There are several more reasons why Angular is a favorite for large scale apps with complex functionalities, which wish to scale further. <br />
                        <b>Vue:</b> Since Vue is the new kid on the block, not many businesses have ventured into Vue JS development yet, and thus, real-time assessment of the pros and cons of Vue is not very well-documented. However, what we do know is that Vue has the best of both worlds- two-way data binding like Angular and flexibility in code like React. Because of this, Vue is rising steadily through the ranks and has a massive market in Asia- Alibaba and Xiaomi are the big names using Vue JS.

                        Hence, the fastest JavaScript framework – TezJS, uses Vue as the primary base of the language

                        Vue is best utilized in cases of lightweight yet high performance, intuitive apps as the applications are quickly ready for the market without compromising on the performance or functionalities. Let us take a quick look at what makes Vue JS a lucrative choice for businesses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;