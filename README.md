## Season

Learn and practice react from udemy course
[Modern React with Redux](https://www.udemy.com/course/react-redux)

One method to create the state using constractor
** Only usable in class component - for state **

```javascript
constructor(props) {
    super(props);
    this.state = {
        lat: null,
        long: null,
    };
}
```

Create a state init using component life cycle

- constructor <br />
  <em>good place to do one time setup</em>
  <br />
  <br />
- render [will be call many time when component update]<br />
  <em>avoid doing anything besides returning jsx</em>
  <br />
  <br />
- componentDidMount [content visibale on screen]<br />
  <em>good place to do data loading</em>
  <br />
  <br />
- componentDidUpdate [sit and wait for update]<br />
  <em>good place to do more data loading when state/props change</em>
  <br />
  <br />
- componenWillUnMount [sit and wait until this component is not longer shown]<br />
  <em>good place to do cleanup (especially for non-React stuff)</em>
  <br />
  <br />

Feature:

- Able to get geolocation

- Run `npm start`

- Allow browser to get location
