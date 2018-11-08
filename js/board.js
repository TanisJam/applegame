class Board{
    //inicialice board
    constructor(width, height, element){
        this.width = width;
        this.height = height;
        this.population = 0;
        this.field = this.createField(element);            
    }
    createField(element){
        let field = [];
        let index = 1;
        for (let x = 0; x < this.height; x++) {
            let row = document.createElement('div');
            //row.id = "row-" + (x + 1);

            for (let y = 0; y < this.width; y++) {
                let col = document.createElement('div');
                col.id = "cell-" + index++;
                row.appendChild(col);
            }
            element.appendChild(row);
        }
        for (let i = 0; i < this.height; i++) {
            field.push(element.childNodes[i].childNodes)
        }
        return field;
    }

    populate(probability, treeColor){
        //probability 0.0 - 1.0
        for (let x = 0; x < this.field.length; x++) {
            for (let y = 0; y < this.field[x].length; y++) {
                if (Math.random() > 1-probability) {
                    this.population++;
                    //board[x][y].style.background = '#da1e1e';
                    //board[x][y].style.borderRadius = '50%';
    
                    //Create Tree icon
                    let icon = document.createElement('i');
                    icon.classList.add("fas");
                    icon.classList.add("fa-tree");
                    icon.style.color = treeColor;
                    this.field[x][y].appendChild(icon);
                    //console.log(this.field[x][y]);
                }
            }
        }
    }

    plant(number, color){
        let place = document.getElementById("cell-"+number);
        if(place){
            let icon = document.createElement('i');
            icon.classList.add("fas");
            icon.classList.add("fa-tree");
            icon.style.color = color;
            place.appendChild(icon);
            this.population++;
        }
    }
    clean(number){
        let place = document.getElementById("cell-"+number);
        if(place){            
            place.removeChild(place.firstChild);
            this.population--;
        }
    }

}
