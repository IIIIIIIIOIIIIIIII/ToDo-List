let theButton = document.getElementById('button');
theButton.addEventListener('click', makeTask);

function makeTask(){
	let parentBlock = document.getElementById('quests');
	let task = document.getElementById('text').value;
	
	if(task){			
		let newTask = document.createElement('div');		
		newTask.className = 'task';	
		newTask.innerHTML = '<input type="checkbox" class="checkbox"><img src="trash.png" id="img" title="Удалить задачу">' + task;		
		parentBlock.appendChild(newTask);		
		
		let icon = document.getElementsByTagName('img');

		for(let i = 0; i < icon.length; i++){
			icon[i].addEventListener('click', function(){this.parentNode.style.display = 'none'});
		}
		
		let checkboxes = document.getElementsByClassName('checkbox');
		
		
		for(let i = 0; i < checkboxes.length; i++){
			checkboxes[i].addEventListener('change', doneIt);				
		}
		
		function doneIt(){
			if (this.checked){ 
				this.parentNode.style.textDecorationLine = 'line-through';
				this.parentNode.style.textDecorationColor = 'red';
			}
			else this.parentNode.style.textDecorationLine = 'none';
		}
		
		
		document.getElementById('text').value = '';
	}
	else{
		alert('Вы не написали задачу!');	
	}	
}
