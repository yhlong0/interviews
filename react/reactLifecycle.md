## Mounting ---------------  Updating ------------------------ UnMounting
constructor
render    -----  render ------ render
componentDidMount        ComponentDidUpdate                 ComponentWillUnmount


# componentWillMount

Your component is going to appear on the screen shortly, render function is about to be called. What do you want to do?

- no component yet, can't do anything involving the DOM. 
- API call, only root component need do that.
- 99% your components should not use componentWillMount. 
- Not a good place for AJAX call, check next cycle for why


# componentDidMount

Your component is out htere, mounted and ready to be used. 

- Good place for AJAX request, if your component haven't finish mount, you AJAX finished, you will have data but no DOM to update.
- draw on a canvas element you just rendered. 
- add event listeners
- Do all the setup you couldn't do without a DOM.
- Can call setState.


# componentWillReceiveProps

Our component was doing just fine, when all of a sudden a stream of new props arrive to mess things up.

- Access to this.props(old props) and nextProps(new props)
- Acting on particular prop changes to trigger state transitions.


# shouldComponentUpdate

- shouldComponentUpdate(nextProps, nextState) { return true }
- always return a boolean(update or not)
- If worried about wasted renders, good place to set false to improve performance. 
- Can call setState: No

# componentWillUpdate

Want me to do anything before I re-render? No....
- not quite useful? 


# componentDidUpdate



# componentWillUnmount

It's almost over, your component is going to go away.

- cancel any outgoing network requests
- remove all event listeners
- clean up anything that solely involves the component. 





