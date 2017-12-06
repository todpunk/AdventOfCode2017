
export interface PuzzleDay {
    
    puzzleOne(data:string) : string;
    puzzleTwo(data:string) : string;
    
    run(puzzle: number, data: string) : string;
}
