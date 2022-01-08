import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Sri Sai Pooja Stores',
  description: 'We sell the best pooja items online',
  keywords: 'pooja items, pooja, bhakti, temple',
}

export default Meta
