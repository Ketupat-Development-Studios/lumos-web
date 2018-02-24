import React from 'react'
import BackHeader from './BackHeader'
import NormalText from 'components/texts/NormalText'

const LoadingHeader = ({isLoading, text, loadingText}) => (
  <BackHeader
    right={(
      <NormalText>{isLoading ? loadingText : text}</NormalText>
    )}
  />
)

export default LoadingHeader