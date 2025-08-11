import PropTypes from "prop-types";

export const GifItem = ({title, url}) => {    
  return (
    <div className='card'>
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  )
}

GifItem.protTypes={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}