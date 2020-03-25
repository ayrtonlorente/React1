import React from 'react';
import Comment from './Comment';
import FormComment from './FormComment';

class Post extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            showComments: false,
            comments: []
        }
    }


    componentWillMount(){
        this.setState({
            comments:[{
                
                    id:1, body:"Muy buen post", user:"pepe@argentina.com"
                },
                {
                    id:2, body:"buen post", user:"osvaldo@argentina.com"
                },
                {
                    id:3, body:"No gusto", user:"susan@argentina.com"
                }
            ]
        })
    }
    componentDidMount(){
        console.log("el componente ha sido montado");
        
    }


    showComments = (e) => {
        e.preventDefault()
        
        this.setState(state => {
           return {showComments: !state.showComments}
        })
        console.log(this.state.showComments);
           
    }

    render () {

        let comments
            if(this.state.showComments){
                comments =  <ul>
                    {this.state.comments.map(comment => <Comment data={comment} key={comment.id}/>)}
                </ul>
            }else{
                 comments = <div>"Clickee para ver los comentarios"</div>
            }

        return (
            <div>
                <h2> {this.props.data.title} </h2>
                <p> {this.props.data.brief} </p>
                <p> {this.props.data.body} </p>
                <button onClick={this.showComments}>Mostrar comentarios</button>
                    {comments}
                    <FormComment/>
                
            </div>
        )

    }
}

export default Post