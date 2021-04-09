var w=18;
var rows;
var cols;
var grid=[];
var current;
var stack=[];

function setup(){
    createCanvas(windowWidth,windowHeight);
    rows=ceil(windowWidth/w);
    cols=ceil(windowHeight/w);
    grid=Array(rows).fill(null).map(() => Array(cols));
    bigGrid();
    current=grid[floor(random(0,rows))][floor(random(0,cols))];
    console.log(current);
    current.visited=true;
}

function draw(){
    background(0);
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            grid[i][j].show(w);
        }
    }

    current.visited=true;
    var next=current.vecin();
    if(next){
        current.head();
        stack.push(current);
        current.removeWalls(next);
        current=next;
    }else if(stack.length>0){
        current.head();
        current=stack.pop();
    }
}

function bigGrid(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            grid[i][j]=new Cell(i,j);
        }
    }
}