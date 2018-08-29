[Repo](https://github.com/Indexu/ReactCrashCourse)

# JS

[ECMAScript 2016, 2017 and 2018 examples](https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e)

- const, let, var
- Arrow functions vs normal functions
- Template literal strings
- Equality
- Spread operator
- Objects
- Import export
- map, filter, reduce
- Promises
- async/await

# React

## Basics

- Browser extension recommended
  - Allows you to debug your React application efficiently
- React boots up by targeting a specific root element in an actual .html file
  - `<div id="root"></div>`
- State and props
  - Components keep track of their variables within the state
  - Props are "parameters" for components
- className
  - Use `className` when referring to the HTML attribute `class`
  - This is because we are writing our code in JavaScript and `class` is a reserved keyword, just like in C#
  - `<span className="blueText">I'm blue</span>`
- setState
  - Asynchronous, but happens pretty fast
  - Accepts a callback which is called when the `setState` operation is complete
- [Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - Mounting
    - constructor
    - getDerivedStateFromProps _(uncommon use case)_
    - render
    - componentDidMount
  - Updating
    - getDerivedStateFromProps _(uncommon use case)_
    - shouldComponentUpdate _(not run when `forceUpdate()` is called)_
    - getSnapshotBeforeUpdate _(very rare use case)_
    - render
    - componentDidUpdate
  - Unmounting
    - componentWillUnmount
- Component types
  - Component
  - PureComponent
    - Implements `shouldComponentUpdate`
    - Does shallow comparison
      - Don't use nested objects
  - Stateless functional component (SFC)
    - No state, only props
    - Doesn't extend any class
    - Not a class, it's a function
- Constructor vs no constructor
  - The constructor in React does literally nothing
  - It's only there due to classes
  - The only benefit it brings is being the first in the Mounting phase of the lifecycle
    - If you need to do something **BEFORE** the component mounts, take a step back and re-think your code. It's very possible to go a different route than to use the constructor

## Patterns and tips

[React Patterns](https://reactpatterns.com/)

- You can spread props onto a component
  - `<MyComponent {...someProps} />`
- Conditional rendering
  - ```javascript
    {
      condition && <MyComponent>Rendered when `truthy`</MyComponent>;
    }
    {
      condition || <MyComponent>Rendered when `falsey`</MyComponent>;
    }
    {
      condition ? <span>Rendered when `truthy`</span> : <span>Rendered when `falsey`</span>;
    }
    ```
- List rendering

  - ```javascript
    <ul>
      {arrayOfMessageObjects.map(({ id, ...message }) => (
        <Message key={id} {...message} />
      ))}
    </ul>
    ```

- Controlled input and state hoisting

  - ```javascript
    const CustomInput = ({ value, onChange }) => <input value={value} onChange={onChange} />

    class SomeComponent extends React.Component {
      this.state = {
        name: "",
      };

      render() {
        const { name } = this.state;

        return (
          <CustomInput value={name} onChange={e => this.setState({name: e.target.value})} />
        );
      }
    }
    ```

- Generic handler

  - ```javascript
    class SomeOtherComponent extends React.Component {
      this.state = {
        name: "",
        address: "",
        email: "",
      };

      handleOnChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      render() {
        const { name, address, email } = this.state;

        return (
          <input type="text" name="name" value={name} onChange={handleOnChange} />
          <input type="text" name="address" value={address} onChange={handleOnChange} />
          <input type="email" name="email" value={email} onChange={handleOnChange} />
        );
      }
    }
    ```

# Libraries

## npm

[Website](https://www.npmjs.com/)

- **N**ode **P**ackage **M**anager
- Comes with Node
- package.json
  - info about the project
  - Various config for libraries
    - Preferred to store library configs in seperate files to keep the `package.json` file short
  - scripts
    - Aliases for common commands
    - `npm run <script_name>`
      - `test`, `start`, `restart` and `stop` can be shorthanded
        - `npm test`
        - `npm start`,
        - `npm restart`,
        - `npm stop`
  - dependencies
    - Libraries/packages your projects needs to run in production
  - devDependencies
    - Libraries/packages your project needs in development
      - Testing framework/tools
      - Type definitions
      - Anything that will **NOT** be in production code
  - peerDependencies
    - Only relevant for libraries/packages
    - Dependencies that both the library itself and the project using the library depend on
      - Enforces that the host project and the library use the same version of the dependencies
- package-lock.json
  - Generated by running `npm install`
  - Specifies what version of packages to fetch during `npm install` if it already exists
  - Enforces everyone to use the same package versions
  - Is automatically modified when adding/removing/updating packages via `npm`

## Lodash

[Website](https://lodash.com/)

- A very good utility library
- If you need to write a helper function for arrays, objects, math, etc..., first check Lodash docs
  - Examples:
    - Deep copy an object (If you have an object that contains nested objects)
    - Uppercase only the first letter of a string
    - Generating an array of numbers in a range (same as the range function in Python)
- Do some research before using a utility library
  - There may be a native approach
    - Lodash forEach vs native array forEach
  - There might be performance pitfalls
    - Lodash forEach and native forEach is **MUCH** slower than a native for loop
      - Imperative programming methods are generally more performant
        - Don't pre-optimize. Only optimize when bottlenecks occur or too avoid a known bottleneck. With experience you will know which functions/methods to use for different use cases

## Babel

[Website](https://babeljs.io/)

- Transpile newer JS syntax code to older JS syntax that most browsers support
  - arrow functions -> normal functions
  - const/let -> var
- Allows us to not be bound to old clients and use the latest up-to-date standards
- [ECMAScript stages](http://2ality.com/2015/11/tc39-process.html)
  - Stage 0: strawman
    - Just an idea. Use with extreme caution (rather not at all)
  - Stage 1: proposal
    - Official proposal, likely to change somewhat. Use with caution
  - Stage 2: draft
    - A more defined and formal description. Core functionality and usage unlikely to change. Use with that in mind that things could change.
  - Stage 3: candidate
    - The feature is mostly complete, wanting feedback from implementations and changes made only in response to critical issues. OK to use.
  - Stage 4: finished
    - The feature is finished and will be included in the next release of ECMAScript. Safe to use.

## Webpack

[Website](https://webpack.js.org/)

- Powerful JS build tool
- Plugin-based
- Example of some features:
  - Use babel plugin for transpiling
  - Bundling
  - Uglifying and minifying
  - Tree-shaking (stripping dead- and unused code)
  - Compile SASS/LESS
  - Entrypoints and chunking
    - Multiple entrypoints into the application
    - Entrypoints can share common code (chunking)

## Eslint

[Website](https://eslint.org/)

- Linter for ECMAScript (JavaScript)
- Enforces coding rules
- The [Airbnb config](https://github.com/airbnb/javascript) is what we will be using
  - With minor adjustments

## Prettier

[Website](https://prettier.io/)

- Amazing and fast formatter
- Makes Eslint scream less at you
- Eslint integration
  - Runs Prettier, then runs `eslint --fix`
  - Not flawless. Conflicts between Prettier and the Eslint config might happen.
    - The VSCode extension only runs a single pass of eslint. [This is a known issue](https://github.com/Microsoft/vscode-eslint/issues/154)
  - Don't think we will use the integration
    - Instead we will overwrite the Airbnb Eslint config with a Prettier config to minimize linting errors

## Jest

[Website](https://jestjs.io/)

- Testing tool by Facebook
  - Same purpose as NUnit
- Code coverage report
- Pass parameters to package.json scripts:
  - `npm test -- --coverage`
- `describe` and `it`
  - `describe` should contain what is being tested
  - `it` should contain what is expected to happen
  - ```javascript
    describe('MyComponent', () => {
      it('should do the correct thing when X is true', () => {
        ...
      });
    });
    ```

## Enzyme

[Website](http://airbnb.io/enzyme/)

- Testing utility library by Airbnb
  - Used to test React components
- Renders React components in isolation in memory without browser
- Shallow and dive
  - Render only the top level of the component
  - Need to navigate within and manually dive to render deeper
- Mount
  - Renders the component and all sub-components all the way
  - Potentially way less performant than shallow, but more reliable
- Instance
  - The component instance
  - Can be used to access current state
- Change props
- Set state

## PropTypes

[Website](https://reactjs.org/docs/typechecking-with-proptypes.html)

- Type tool by Facebook
- Explicitly name your props and their types
  - Can mark a prop as required
  - Types can be anything from boolean, number, string, to array, object, function, enum
- Very good for documentation
- Offers nice IntelliSense and auto-complete
- Will cause an error if incorrect type/value or if required prop not supplied

## CSS-In-JS

- Write all style code inside the component in JavaScript
- Eliminates need for SASS/LESS/CSS files
- Multiple libraries available
  - [styled-components](https://www.styled-components.com/)
    - The library we will be using
    - SASS syntax
