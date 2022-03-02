# thunderui

> A powerful UI as thunder

[![NPM](https://img.shields.io/npm/v/thunderui.svg)](https://www.npmjs.com/package/thunderui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save thunderui
```

## Settings

### Set button text with text property

```jsx
<Button text="Hello world" />
```

***

### Colors

![thunderui buttons color](images/colors.png)

#### default color:primary

```jsx
<Button color="info" />
```

***

### Types

![thunderui buttons types](images/types.png)

#### default type:solid

```jsx
<Button type="outline" />
```

***

### Sizes

![thunderui buttons sizes](images/size.png)

#### default size:medium

```jsx
<Button size="large" />
```

***

### Disabled

![thunderui buttons disabled](images/disabled.png)

```jsx
<Button text="i am disabled" disabled/>
```

***

### You can set all button properties

```jsx
<Button onClick={()=> alert("Hello world")} />
```

## Usage

```jsx
import React from 'react'

import {Button} from 'thunderui'
import 'thunderui/dist/index.css'

export default function Example() {
  return <Button text="I am thunderui button" />
```

## License

MIT © [talhaekrem](https://github.com/talhaekrem)
