
let listApp = (function () {
  function newItem() {
  /*//1. Adding a new item to the list of items USING JAVASCRIPT
     let li = document.createElement("li");
     let inputValue = document.getElementById("input").value;
     let text = document.createTextNode(inputValue);
     li.appendChild(text);

     if (inputValue === '') {
       alert("You must write something!");
     } else {
       let list = document.querySelector('#list');
       list.appendChild(li);
     }*/

   //1 - adding a new item to the list of items WITH JQUERY
   let listElement = $('<li></li>');
   listElement.addClass('list-item');
   let inputValue = $('#input').val();
   listElement.text(inputValue);
   //3a - adding the delete button "X" WITH JQUERY
  let crossOutButton = $('<button></button>');
  crossOutButton.text('X');
  crossOutButton.click(deleteListItem(listElement));
  listElement.append(crossOutButton);

  listElement.dblclick(function (event) {
    crossOut();
  });

   if(inputValue === '') {
    alert("Please write something.");
   }else{
    let list = $('#list');
    list.append(listElement);
   }
  }

  //2 - crossing out an item
  function crossOut() {
    li.addClass('strike');
  }
  $('#list-item').on('dblclick', function (event) {
    crossOut(item);
  });

  return {
    newItem: newItem,
    crossOut: crossOut
  };

})();
 /*//2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}
 	li.addEventListener("dblclick",crossOut);*/

  

  



 /*//3(i). Adding the delete button "X" WITH JAVASCRIPT
   let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}*/



  //3b - adding CLASS DELETE from the css USING JQUERY
  function deleteListItem() {
    $('#list-item').addClass('delete');
  }


 // 4. Reordering the items: 
   $('#list').sortable();

}

 







// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/










