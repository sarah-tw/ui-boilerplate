window.onload = function(){
	document.getElementById('input-name').onkeyup = function(e){
		if(e.keyCode ==13){
			var name = this.value;
			document.getElementById('name').innerHTML = name;
			this.hidden = true;
			document.getElementById('name').hidden = false
		}
	}
	document.getElementById('name').ondblclick = function(){
		this.hidden = true;
		document.getElementById('input-name').hidden = false;
		document.getElementById('input-name').focus()
	}
}
$(document).ready(function(){
	$(".todo-toggle").click(function(){
		$(".todo-modal").toggle();
	})

	$(".add-todo").keyup(function(e){
		if(e.keyCode ==13){
			var todo = $(this).val();
			if(todo.length == 0){
				alert("Please input a todo");
				return false;
			}
			var todoItem = Todo.add(todo);
			Todo.bindDestroyHandlerOn(todoItem);
			Todo.updateCount();
			$(this).val("");
		}
	});

	$(".todo-item").on("click", ".destroy", function(){
		console.log("dsfd");
		$(this).remove();
	})

});

Todo = (function(){
	function add (todo) {
		var newTodo = "<li class='todo-item'><label><input type='checkbox'>" + todo 
									+ "</label><span class='destroy pull-right'>✕</a></li>"
		return $(".todos").append(newTodo).children().last();
	}

	function bindDestroyHandlerOn (todoItem) {
		$(todoItem, '.destroy').on('click', function(){
			todoItem.remove();
			updateCount();
		});		
	}

	function updateCount() {
		var count = $(".todos .todo-item").length;
		$(".todo-count").text(count);		
	}

	return {
		add: add,
		bindDestroyHandlerOn: bindDestroyHandlerOn,
		updateCount: updateCount 
	}
})();

