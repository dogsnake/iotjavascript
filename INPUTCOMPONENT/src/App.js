import Component from "./components/Component.js";
import ContentInput from "./components/ContentInput.js";
import Lists from "./components/Lists.js";

export default class App extends Component {
    setup(){
        this.state = {
            students:[
                {
                    no:1,
                    content:"stu1",
                    active: true
                },
                {
                    no:2,
                    content:"stu2",
                    active: false
                },
                {
                    no:3,
                    content:"stu3",
                    active: false
                },
            ]
        }
        console.log(this);
    }
    template(){
        return `
            <div id="contentAdd"></div>
            <div id="studentLists"></div>
            <div id="viewBtn"></div>
        `;
    }
    mounted(){
        const { students } = this.state;
        const { addStudent, deletestudent } = this;
        const contentAppender = document.querySelector("#contentAdd");
        const stuListDiv = document.querySelector("#studentLists");
        new ContentInput(contentAppender, {
            addStudent: addStudent.bind(this)
        });
        new Lists(stuListDiv, { students: students,
            deletestudent: deletestudent.bind(this) });
    }
    addStudent(contents){
        const { students } = this.state;
        const no = Math.max(0, ...students.map(s=>s.no))+1;
        this.setState({
            students:[
                ...students,
                {
                    no: no,
                    content: contents,
                    active: false
                }
            ]
        })
    }
    deletestudent(no){
        const { students } = this.state;
        const newStudents = students.filter(stu=>stu.no !== no);
        console.log(newStudents);
        this.setState({ students: newStudents });
    }
}