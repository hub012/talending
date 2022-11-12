import PropTypes from "prop-types"
import Card from './shared/Card'

function Item({item}) {

  return (
    <Card
        image = {item.main_image}
        text = {item.text}
    
    />
  )
}

Item.propType = {
  item: PropTypes.object.isRequired,
}

export default Item