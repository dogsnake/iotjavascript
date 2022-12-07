import Component from "./component.js";
import TodoHeader from "./todoheader.js";

export default class App extends Component {
    setup(){
        console.log("setup");
        this.state = {
            inputText:"",
            todoLists : [
                {
                    no:1,
                    content: "할일1",
                    isDone: false
                },
                {
                    no:2,
                    content: "할일2",
                    isDone: false
                },
                {
                    no:3,
                    content: "할일3",
                    isDone: false
                }
            ]
        }
    }
    template(){
        return `
        <div id="insertTodo"></div>
        <div id="listTodo"></div>
        `
    }
    mounted(){
        const {addTodoList} = this;
        const headerInput = document.querySelector("#insertTodo");
        new TodoHeader(headerInput,{addTodoList: addTodoList.bind(this)});
    }
    addTodoList(content){
        const {todoLists} = this.state;
        this.setState({
            todoLists: [
                ...todoLists,
                {
                    no:4,
                    content: content,
                    isDone: false
                }
            ]
        })
    }
}
