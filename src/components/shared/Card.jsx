import PropTypes from "prop-types"

function Card({image, text}) {
  return (
    <div className='elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a69906'>
        <img src={image}></img>
        <p>{text}</p>
    </div>
  )
}

Card.defaultProp ={
  reverse: false,
} 

Card.propType = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
  }

export default Card