function EmitResult(iftrue,response){
    if (iftrue)
        this.$emit('check-answer',iftrue,response)
    else
        this.$emit('check-answer',iftrue,response)
}

export function CheckTrueFalseAnswer(answer){
    if(answer == this.answer){
        this.$emit('check-answer',true);
        console.log('check answer : True');
    }
    else{
        this.$emit('check-answer',true);
        console.log('check answer : True');
    }
}
