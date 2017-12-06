import { PuzzleDay } from "./PuzzleDay";
import { allPairs } from "./LibFunctions";

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
        let checksum = 0;
        let rows = data.split('\n');
        rows.forEach(function(row){
            let max = 0;
            let min = Number.MAX_VALUE;
            let columns = row.split('\t');
            columns.forEach(function(column){
                let val = parseInt(column);
                if (val > max){
                    max = val;
                }
                if (val < min){
                    min = val;
                }
            });
            checksum += max - min;
        })
        return checksum.toString();
    }
    
    public puzzleTwo(data: string) : string {
        let sum = 0;
        let rows = data.split('\n');
        rows.forEach(function(row){
            let items : Array<number> = [];
            row.split('\t').forEach(function(item){items.push(parseInt(item))});
            let pairs = allPairs(items);
            pairs.forEach(function(pair){
                let a = pair[0], b = pair[1];
                if(a !== b && (a > b ? a % b : b % a) === 0) {
                    sum += a > b ? a / b : b / a;
                }
            })
        });
        return sum.toString();
    }
}
