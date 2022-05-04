'use strict';
/*
Todo:
1. Make dragging work - done
2. populate board with white and black pieces in correct locations
3.make moving rules work 
4. make eating rules work
5. make kinging rule
6. make king movement rules work
7. Make websockets server able to send info about board
8. Make server able to receive info from user
9. Make 2 users streams in server
10. make logins for both users (easy click in login)
11. save board state on server, allow for reset of game by users


*/
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.targetable');
let dragged;
//Start dragging
const dragStart = (e) => {
  console.log(e);
  dragged = e;
};

//End Dragging
// const dragEnd = (e) => {};

//Dragging/draggables listeners
// target.addEventListener('dragstart', dragStart);
// target.addEventListener('dragend', dragEnd);

const dropPiece = (e) => {
  e.preventDefault();
  e.target.append(dragged);
};

draggables.forEach((e) => {
  e.addEventListener('dragstart', () => {
    dragStart(e);
  });

  e.addEventListener('dragend', dragEnd);
});

//Looping through targetable sqaures
containers.forEach((e) => {
  e.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  e.addEventListener('dragenter', (e) => {
    e.preventDefault();
  });

  e.addEventListener('dragleave', (e) => {
    e.preventDefault();
  });

  e.addEventListener('drop', dropPiece);
});
