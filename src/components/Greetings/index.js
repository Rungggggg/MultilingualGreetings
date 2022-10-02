import {Component} from 'react'
import GreetingsItem from '../GreetingsItem'

import './index.css'
const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greeting extends Component{
  state={activeId:languageGreetingsList[0].id}

  setActiveId=tabId=>{
     this.setState({activeId:tabId})
  }

  getSearchResults=()=>{
    const {activeId}=this.state
    const searchResults=languageGreetingsList.filter(eachItem=>
      eachItem.id===activeId)
      return searchResults

  }

  render(){
    const {activeId}=this.state
    const greetings=this.getSearchResults()
    return(
      <div className="app-container">
         <div className="greetings-container">
           <h1 className="title">Multilingual Greetings</h1>
           <ul className="greetings">
             {languageGreetingsList.map(eachItem=>(
               <GreetingsItem key={eachItem.id} languageGreeting={eachItem} setActiveId={this.setActiveId}
               isActive={activeId===eachItem.id} />
             ))}
           </ul>
            {
              greetings.map(eachItem=>(
                <img src={eachItem.imageUrl} alt={eachItem.imageAltText} className="greeting-image" />
              ))
            }
         </div>
      </div>
    )
  }
}
export default Greeting