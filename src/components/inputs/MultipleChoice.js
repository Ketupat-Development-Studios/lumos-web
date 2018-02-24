import React from 'react'
import "./MultipleChoice.css"

const MultipleChoice = ({ options, onChange, value }) => (
  <select className="multiple-choice" onChange={onChange} value={value}>
    {
      options.map(option => {
        if(typeof option === 'string'){
          return <option key={option} value={option}>{option}</option>
        } else {
          return <option key={option.value} value={option.value}>{option.text}</option>
        }
      })
    }
  </select>
)

export default MultipleChoice