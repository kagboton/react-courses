function WelcomeFunc (props){
return <div>
    <h1>Bonjour {props.name}</h1>
    <p>{props.children}</p>
</div>
}

class Welcome extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
    </div>
    }
}

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    tick(){
        this.setState({date: new Date()})
    }
    
    render(){
        const date = this.state.date
        return <div>
            Il est {date.toLocaleDateString()} {date.toLocaleTimeString()}
         </div>
    }
}


class Incrementer extends React.Component{

    constructor(props){
        super(props)
        this.state = {number: props.start}
    }

   

    componentDidMount(){
        this.timer = window.setInterval(this.increment.bind(this), 1000)
    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    increment(){      
        this.setState(function(state, props){
            return {number: state.number + props.step}
        })
    }
    
    render(){
        
        return <div>
            Le numbre : {this.state.number}
         </div>
    }
}

class IncrentManual extends React.Component{
    constructor(props){
        super(props)
        this.state = {n: 0, timer:null}
    }


    componentDidMount(){
        this.play()
    }

    componentWillUnmount(){
        window.clearInterval(this.state.timer)
    }

    increment(){
        this.setState(function(state, props){
            return {n: this.state.n + 1}
        })
    }

    pause(){
        window.clearInterval(this.state.timer)
        this.setState({timer: null})
    }

    play(){
        window.clearInterval(this.state.timer)
        this.setState({timer: window.setInterval(this.increment.bind(this), 1000) })
    }


    render(){
        return <div>
            La valeur : {this.state.n} 
            {this.state.timer ?  <button onClick={this.pause.bind(this)}>Pause</button> : <button onClick={this.play.bind(this)}>Play</button>}            
        </div>
        
    }
}

Incrementer.defaultProps = {
    step : 1
}

function Home() {
    return <div> 
        <Welcome name ="Tata"/>
        <Welcome name ="Toto"/>
        <Clock/>
        <Incrementer start={10} />
        <Incrementer start={10} step={10}/>
        <IncrentManual/>
    </div> 
}



ReactDOM.render(<Home/>, document.querySelector('#app'))