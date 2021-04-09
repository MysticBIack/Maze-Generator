function Cell(x,y){
    this.x=x;
    this.y=y;
    this.visited=false;
    this.wall={
        top:true, 
        left:true, 
        bottom:true, 
        right:true
    };

    this.show=function(w){
        let x=this.x*w;
        let y=this.y*w;
        strokeWeight(4);
        stroke(255);
        if (this.wall.top && this.visited) 
                line(x, y, x + w, y);
        if (this.wall.right && this.visited)
                line(x + w, y, x + w, y + w);
        if (this.wall.bottom && this.visited)
                line(x, y + w, x + w, y + w);
        if (this.wall.left && this.visited)
                line(x, y + w, x, y);
         if (this.visited) {
            noStroke();
            fill('grey');
            rect(x, y, w, w);
        }
    }
    this.vecin=function(){
        var neighbors = [];

        if (grid[this.x][this.y + 1])
            var top = grid[this.x][this.y + 1];
        if (grid[this.x + 1] && grid[this.x + 1][this.y])
            var right = grid[this.x + 1][this.y];
        if (grid[this.x][this.y - 1])
            var bottom = grid[this.x][this.y - 1];
        if (grid[this.x - 1] && grid[this.x - 1][this.y])
            var left = grid[this.x - 1][this.y];

        if (top && !top.visited)
            neighbors.push(top);
        if (right && !right.visited)
            neighbors.push(right);
        if (bottom && !bottom.visited)
            neighbors.push(bottom);
        if (left && !left.visited)
            neighbors.push(left);

        var random = floor(Math.random() * neighbors.length);
        return neighbors[random];
    }

    this.removeWalls=function(next){
        let i=this.x-next.x;
        let j=this.y-next.y;
        if(i===1) {
            this.wall.left=false;
            next.wall.right=false;
        }else if(i===-1){
            this.wall.right=false;
            next.wall.left=false;
        }
        if(j===1){
            this.wall.top=false;
            next.wall.bottom=false;
        }else if(j===-1){
            this.wall.bottom=false;
            next.wall.top=false;
        }

    }

    this.head=function(){
        let x=this.x*w;
        let y=this.y*w;
        noStroke();
        fill('rgb(210,0,210)')
        rect(x,y,w,w);
    }
}