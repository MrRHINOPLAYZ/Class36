class Form{
    constructor(){

    }
    display(){
    var title = createElement('h3')
    title.html('SIMPLE RIDER')
    title.position(300,0)
    var input = createInput()
    var button = createButton('RIDE!')
    input.position (300,150)
    button.position(400,200)
    button.mousePressed(function(){
input.hide()
button.hide()
var name = input.value()
var greeting = createElement ('h4')
greeting.html('NAME'+name)
greeting.position(300,150)
    })

    }
    
    
}