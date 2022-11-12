import Item from "./Item"
import PropTypes from "prop-types"

function ItemList({item}) {

    if(!item || item.lenght === 0){
        return <p> No hay cursos</p>
    }

  return (
    <div>
        {
            item.map(item => (
                <Item 
                    key = {item.id} 
                    item = {item} 
                />
            ))
        }
    </div>
  )
}


ItemList.propType = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,            
            text: PropTypes.string.isRequired,
        })
    )
} 

export default ItemList