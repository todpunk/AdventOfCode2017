import { PuzzleDay } from "./PuzzleDay";

export class DayOne implements PuzzleDay {
    public run(puzzle: number, data: string) : string {
        if(puzzle === 1) {
            return this.puzzleOne(data);
        }
        if(puzzle === 2) {
            return this.puzzleTwo(data);
        }
        else {return "Unimplemented puzzle: " + puzzle}
    }
    
    private algorithm(data: string, offset: number): string {
        let sum = 0;
        for(let i = 0; i < data.length; i++) {
            if(data[i] === data[(i+offset) % data.length]) {
                sum += parseInt(data[i]);
            }
        }
        return sum.toString();
    }

    public puzzleOne(data: string) : string {
        return this.algorithm(data, 1);
    }
    
    public puzzleTwo(data: string) : string {
        return this.algorithm(data, data.length/2);
    }
}
