let n = 0;

function numberFormat(n){
    return n.toString().padStart(2, '0')
}

function render(){

    const items = [
        'Tache 1', 
        'Tache 2',
        'Tache 3'
    ]

    const lis = items.map((item, key ) => <li key={key}>{item}</li>)
    
    const content = 
    
    <div>
        <h1>Bonjour <span>{numberFormat(n)}</span></h1>
        
        <ul>
            {lis}
        </ul>
    </div>
    ReactDOM.render(content, document.querySelector('#app'))
}


render()

window.setInterval(()=>{
    n++
    render()
}, 1000)