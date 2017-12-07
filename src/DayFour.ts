import { PuzzleDay } from "./PuzzleDay";

export class DayFour implements PuzzleDay {
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
        let valid = 0;
        let rows = data.split('\n');
        rows.forEach(function(row){
            let words : {[word:string]: number} = {};
            let invalid = false;
            row.split(' ').forEach(function(word) {
                if(words[word] === 1){
                    invalid = true;
                } else {
                    words[word] = 1;
                }
            })
            if(!invalid) { valid += 1}
        })
        return valid.toString();
    }
    
    public puzzleTwo(data: string) : string {
        let valid = 0;
        let rows = data.split('\n');
        rows.forEach(function(row){
            let words : {[word:string]: number} = {};
            let invalid = false;
            row.split(' ').forEach(function(word) {
                let sorted = word.split('').sort().join('')
                if(words[sorted] === 1){
                    invalid = true;
                } else {
                    words[sorted] = 1;
                }
            })
            if(!invalid) { valid += 1}
        })
        return valid.toString();
    }
}
