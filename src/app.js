import React from 'react'
import ReactDOM from 'react-dom'

class ListItems extends React.Component {

    constructor () {
        super()

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onRemovePressed = this.onRemovePressed.bind(this)

        this.state = {
            items: []
        }
    }

    onRemovePressed (index) {

        this.setState((prevState) => {

            const items = prevState.items
            const deletedItem = items.splice(index, 1)
            
            return {
                items
            }
        })

        console.log(`will remove item at index ${index}`)
    }

    onFormSubmit (e) {

        e.preventDefault()

        const newValue = e.target.elements.newItem.value

        if (newValue.length > 0) {

            e.target.elements.newItem.value = ""
        
            this.setState((prevState) => {
                return {
                    items: [...prevState.items, newValue]
                }
            })
        }
    }

    render () {

        const {items} = this.state

        return (
            <div>
            {
                items.length > 0 &&
                    <div>
                    <h2>Seçenekler</h2>
                    {
                        items.map((item,index) => {
                            return (
                                <li key={index}>
                                    {item}
                                    <button 
                                        onClick={() => {this.onRemovePressed(index)}}
                                    >Sil</button>
                                </li>
                            )
                        })
                    }
                </div>
            }
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" name="newItem" placeholder="Yeni Satır Girin" />
                        <button>Kaydet</button>
                    </form>
                </div>
            </div>
        )
    }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<ListItems />, appRoot) 