import React, {Component} from 'react'

let quiz_data = require('./quiz_data.json')

class Quiz extends Component{
    render(){
        return (
        <div className='quizQuestion'>
        {quiz_data.quiz_questions[0].instruction_text}
        </div>)
    }
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }
}

export default Quiz
