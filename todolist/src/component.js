export default class Component {
    target;
    props;
    stats;
    constructor(target, props){
        this.target = target;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();
    }
    setup(){}
    template(){
        return "";
    }
    mounted(){}
    setEvent(){}
    render(){
        this.target.innerHTML = this.template();
        this.mounted()
    }
    setState(newState){
        this.state = {...this.state, ...newState};
        this.render();
    }
}