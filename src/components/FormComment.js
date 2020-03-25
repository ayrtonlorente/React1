import React from 'react'

class FormComment extends React.Component{
    constructor(props){
        super(props)

        this.message = React.createRef();

        this.state = {
            sent: false,
            limite: 20,
            minimo: 10,
            overLimit: false,
            comment: {
                body:''
            }
        }
    
    }

    handleKeyUp = () =>{
        this.setState(state =>{
            let value = this.message.current.value

            return{
            overLimit:  value.length > state.limite,
            comment:{
                body: value
            }
        }
        })

        
    }

    sendComment = (e) => {
        e.preventDefault()
        this.setState({
            sent: true}
        )
    }

    render(){

        let confirmation = <div>Gracias por comentar!</div>

        return(
            <div>

                {
                    this.state.sent ? confirmation : 
                
            
            <form>
                <div>
                    <p></p>
                    <textarea ref={this.message} onKeyUp={this.handleKeyUp}>{this.state.comment.body}</textarea>
                    <p>Restan {this.state.limite - this.state.comment.body.length} caracteres</p>
                    {this.state.overLimit ? 'Te pasaste' : ''}
                </div>
                <div>
                    <button onClick={this.sendComment}
                     disabled={this.state.comment.body.length < this.state.minimo ? true : false }>
                         Enviar</button>
                         
                </div>
            </form>
            }
            </div>
        )
    }
}


export default FormComment