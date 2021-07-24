'use strict' ;

function TodoItem ( id , caption , description ) {          //инициализируем конструктор TodoItem

    this.id = id ;
    this.caption = caption ;
    this.description = description ;

}
TodoItem.prototype.done = false ;

function secretFunctionId () {
    let value = 1 ;
    return function () {
        return value++ ;
    } ;
}
const _id = secretFunctionId () ;

function secretArray () {
    let array = [] ;
    return function () {
        return array ;
    }
}
const items = secretArray ()() ;  

function TodoList () {}                                     //инициализируем конструктор TodoList
Object.defineProperties ( TodoList.prototype , {            
    'add' : {
        value : function ( sCaption, sDescription ) { items.push ( new TodoItem ( _id () , sCaption, sDescription ) ) ; }
    } ,
    'completeAll' : {
        value : function () { items.forEach ( object => { object.done = true } ) ; }   
    } ,
    'view' : {  // метод для просмотра items, которые нельзя менять извне
        value : function () { items.forEach ( object => {
            console.log( `id - ${object.id} , caption = ${object.caption} , description = ${object.description} , done - ${object.done}` ) 
        }) }
    } 
}) ;

const todoListObject = new TodoList () ;
todoListObject.add( 'caption1' , 'description1' ) ;
const test = new TodoItem ( 'test' , 'test' ) ;
todoListObject.add( 'caption2' , 'description2' ) ;
todoListObject.add( 'caption3' , 'description3' ) ;

todoListObject.view() ;
todoListObject.completeAll() ;
todoListObject.view() ;