# Inline Style

For simple, and fewer style.

```
const divStyle = {
  margin: 50px;
}

const Box = () => (
  <div style={divStyle}>Box</div>
);
```


# Styled Component

```
import styled from 'styled-components'

const Div = styled.div`
  margin: 4px;`

const OutBox = () => (
  <Div>This will have margin</Div>
);
```

# CSS StyleSheet

```
import './style.css'

<div className="Box"></div>

```

style.css
```
.Box {
  padding: 40px;
}
```
