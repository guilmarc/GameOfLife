

function make2DArray(cols, rows){
    let array = new Array(cols);
    for(let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array;
}

let COLS_COUNT = 25;
let ROWS_COUNT = 25;
let grid;

function setup() {

    createCanvas();


    grid = make2DArray(COLS_COUNT,ROWS_COUNT);
    for (let x = 0; x < COLS_COUNT; x++ ){
        for (let y = 0; y < ROWS_COUNT; y++){
            grid[x][y] = Math.round(Math.random());
        }
    }
}

function draw(){
    for (let x = 0; x < COLS_COUNT; x++ ){
        for (let y = 0; y < ROWS_COUNT; y++){
            grid[x][y]
        }
    }
}

setup();