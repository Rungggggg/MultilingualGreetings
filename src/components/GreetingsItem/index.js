import './index.css'

const GreetingsItem=props=>{
  const {languageGreeting,setActiveId,isActive}=props
  const {id,buttonText}=languageGreeting
  const onClickActiveId=()=>{
      setActiveId(id)
  }
  const buttonClassName=isActive ? 'language-btn active':'language-btn'
  return(
    <li className="greetings-item">
      <button type="button" onClick={onClickActiveId} className={buttonClassName}>{buttonText}</button>
    </li>
  )

}

export default GreetingsItem



