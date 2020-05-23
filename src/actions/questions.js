export const RECEIVE_QUESTIONS='Receive_questions'

export function questions(questions){
    
    return{
        type:RECEIVE_QUESTIONS,
        questions
    }
}

