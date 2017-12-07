import { PuzzleDay } from "./PuzzleDay";

export class DayThree implements PuzzleDay {
    public run(puzzle: number, data: string) : string {
        if(puzzle === 1) {
            return this.puzzleOne(data);
        }
        if(puzzle === 2) {
            return this.puzzleTwo(data);
        }
        else {return "Unimplemented puzzle: " + puzzle}
    }
    
    public puzzleOne(data: string) : string {
        let num = parseInt(data);
        let root = Math.floor(Math.sqrt(num));
        let solution = num - (root * root);
        return solution.toString();
    }
    
    public puzzleTwo(data: string) : string {
        // This is modified from a reddit answer, because holy hell does the math here not sound fun.
        let input = parseInt(data);
        let [x,y]=[0,0];
        let [inc,dir]=[1,1];
        let memory : {[index:string] : number} = {"0,0":1};
        let g = function(x:number,y:number) { return memory[x+","+y] || 0};
        for (;;) {
          for (let i=1;i<inc+1;i++) {
            x = (dir===1) ? x+1 : (dir===3) ? x-1 : x;
            y = (dir===2) ? y+1 : (dir===4) ? y-1 : y;
            memory[x+","+y]=g(x+1,y-1)+g(x+1,y)+g(x+1,y+1)+g(x-1,y-1)+g(x-1,y)+g(x-1,y+1)+g(x,y-1)+g(x,y+1);
            if (memory[x+","+y]>input) return memory[x+","+y].toString();
          }
          dir = (dir===4) ? 1 : dir+1;
          if ((dir===1) || (dir===3)) inc++;
        }
    }
}
