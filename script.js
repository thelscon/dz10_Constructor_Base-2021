'use strict' ;

function TodoItem ( id , caption , description ) {

    this.id = id ;
    this.caption = caption ;
    this.description = description ;

}
TodoItem.prototype.done = false ;

function TodoList () {

    let items = [] ;

    function secretFunctionId () {
        let value = 1 ;
        return function () {
            return value++ ;
        } ;
    }
    const _id = secretFunctionId () ;

    this.add = function( sCaption, sDescription ) {
        items.push( new TodoItem ( _id () , sCaption, sDescription ) ) ;
    }

    this.completeAll = function () {
        items.forEach ( object => { object.done = true } ) ;
    }   

    //// метод для просмотра items, который нельзя менять извне
    this.view = function () {
        items.forEach ( object => { console.log( `id - ${object.id} , caption = ${object.caption} , description = ${object.description} , done - ${object.done}` ) }) ;
    }

}

const todoListObject = new TodoList () ;
todoListObject.add( 'caption1' , 'description1' ) ;
const test = new TodoItem ( 'test' , 'test' ) ;
todoListObject.add( 'caption2' , 'description2' ) ;
todoListObject.add( 'caption3' , 'description3' ) ;

todoListObject.view() ;
todoListObject.completeAll() ;
todoListObject.view() ;