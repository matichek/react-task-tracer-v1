import PropTypes from 'prop-types'

export const Button = ({colorBg, colorBg_hover, text, onClick}) => {

  return (
    <div>
      <a href="#" onClick={onClick} className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 ${colorBg_hover} ${colorBg}`}>{text} </a>
    </div>
  )
}

Button.defaultProps = {
  colorBg: 'bg-indigo-600',
  coloBg_hover: 'hover:bg-indigo-800',
  text: 'Text',
}

Button.propTypes = {
  text: PropTypes.string,
  colorBg: PropTypes.string,
  colorBg_hover: PropTypes.string,
  onClick: PropTypes.func,
}