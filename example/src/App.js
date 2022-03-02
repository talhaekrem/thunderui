import React, { useState } from 'react'

import { Button } from 'thunderui'
import 'thunderui/dist/index.css'
import Example from './Example'
const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <>
    <Example/>
    <div>
    <Button
        style={{ margin: '20px' }}
        text='primary'
        color='primary'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='secondary'
        color='secondary'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='success'
        color='success'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
        <Button
        style={{ margin: '20px' }}
        text='info'
        color='info'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='warning'
        color='warning'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='danger'
        color='danger'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='dark'
        color='dark'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='light'
        color='light'
        type='solid'
        size='large'
        onClick={() => setNumber(number + 1)}
      />  
    </div>
    <div>
      <Button
        style={{ margin: '20px' }}
        text='primary'
        color='primary'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='secondary'
        color='secondary'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='success'
        color='success'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
        <Button
        style={{ margin: '20px' }}
        text='info'
        color='info'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='warning'
        color='warning'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='danger'
        color='danger'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='dark'
        color='dark'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='light'
        color='light'
        type='outline'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      </div>
      <div>
      <Button
        style={{ margin: '20px' }}
        text='primary'
        color='primary'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='secondary'
        color='secondary'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='success'
        color='success'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
        <Button
        style={{ margin: '20px' }}
        text='info'
        color='info'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='warning'
        color='warning'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='danger'
        color='danger'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />

      <Button
        style={{ margin: '20px' }}
        text='dark'
        color='dark'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      <Button
        style={{ margin: '20px' }}
        text='light'
        color='light'
        type='text'
        size='large'
        onClick={() => setNumber(number + 1)}
      />
      </div>
      <h1>{number}</h1>
    </>
  )
}

export default App
