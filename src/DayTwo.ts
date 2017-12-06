import { PuzzleDay } from "./PuzzleDay";

export class DayTwo implements PuzzleDay {
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
        return "Day Two Puzzle One Solution"
    }
    
    public puzzleTwo(data: string) : string {
        return "Day Two Puzzle Two Solution"
    }
}
