//bunddle. Arquivo que vai ser buildado
export default ()=>{
    return {
        tasks:[], 
        newTask: '',

        submit(){
            this.tasks.push({body: this.newTask, completed: false})
            this.newTask = ''
        }
    }
}