import './Button.css'

const Button= ({text , btnClass , link }) => {
  return (
    
    <a href={link} className={`btn ${btnClass}`}>
    {text}
    </a>
  )
}

export default Button