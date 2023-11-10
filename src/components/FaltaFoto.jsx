export const FaltaFoto = ({ category, width, height }) => {
  const imageContainerStyles = {
    width: `${width}`,
    height: `${height}`,
    background: '#444',
    display: 'flex',
    justifyContent: 'center'
  }
  const spanStyles = {
    fontSize: '5rem',
    color: 'white'
  }

  return (
      <div style={imageContainerStyles}>
        <span style={spanStyles}>{category}</span>
      </div>
  )
}
