import React from 'react'
import TitleHeader from './TitleHeader'
import AddButton from 'components/buttons/AddButton'
import './AddHeader.css'

const AddHeader = (props) => (
  <TitleHeader
    className="add-header"
    {...props}
    right={(
      <AddButton onClick={props.onAdd} color='#fff' />
    )}
  />
)

export default AddHeader