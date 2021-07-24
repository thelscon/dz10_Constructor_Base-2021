'use strict' ;

function TodoItem ( id , caption , description ) {          //инициализируем конструктор TodoItem

    this.done = false ;
    this.id = id ;
    this.caption = caption ;
    this.description = description ;

}   

function TodoList () {

    if (!new.target) return ;

    const METH_ID = function () {
        let value = 1 ;
        return function () {
            return value++ ;
        } ;
    }
    const PROP_ID = METH_ID () ;
    
    const METH_ITEMS = function () {
        let array = [] ;
        return function () {
            return array ;
        }
    }
    const PROP_ITEMS = METH_ITEMS ()() ;  

    Object.defineProperties ( TodoList.prototype , {            
        'add' : {
            value : function ( sCaption, sDescription ) { PROP_ITEMS.push ( new TodoItem ( PROP_ID () , sCaption, sDescription ) ) ; }
        } ,
        'completeAll' : {
            value : function () { PROP_ITEMS.forEach ( object => { object.done = true } ) ; }   
        } ,
        'view' : {
            value : function () { PROP_ITEMS.forEach ( object => {
                console.log( `id - ${object.id} , caption = ${object.caption} , description = ${object.description} , done - ${object.done}` ) 
            }) }
        } 
    }) ;

}   

const todoListObject = new TodoList () ;
todoListObject.add( 'caption1' , 'description1' ) ;
const test = new TodoItem ( 'test' , 'test' ) ;
todoListObject.add( 'caption2' , 'description2' ) ;
todoListObject.add( 'caption3' , 'description3' ) ;

todoListObject.view() ;
todoListObject.completeAll() ;
todoListObject.view() ;