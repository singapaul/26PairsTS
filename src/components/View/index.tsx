import React from "react"
import PropTypes from "prop-types"
 
const View = ({ title, children }: {title: any, children: any}) => (
  <section className='max-w-[640px] mx-auto mt-[2rem] mb-[3rem]'>
    <h1>{title}</h1>
    {children}
  </section>
)

View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View
