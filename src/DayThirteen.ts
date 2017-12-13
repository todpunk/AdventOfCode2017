import { PuzzleDay } from "./PuzzleDay";

export class DayThirteen implements PuzzleDay {
    public run(puzzle: number, data: string) : string {
        if(puzzle === 1) {
            return this.puzzleOne(data);
        }
        if(puzzle === 2) {
            return this.puzzleTwo(data);
        }
        else {return "Unimplemented puzzle: " + puzzle}
    }

    public caught = (depth: number, range: number, offset: number) : boolean => ((offset + depth) % (2 * (range - 1))) === 0;
    
    public algorithm(data: string, offset: number) : [number, boolean] {
        let caught = false;
        let rows : string[] = data.split('\n');
        let severity = 0;
        let depths : number[][] = rows.map(row => {
            let splits = <Array<string>> row.split(': ');
            return [parseInt(splits[0]), parseInt(splits[1])];
        });
        depths.forEach(([depth, range]) => {
            if(this.caught(depth, range, offset)) {
                caught = true;
                severity += depth * range;
            }
        })
        return [severity, caught];
    }
    
    public puzzleOne(data: string) : string {
        return this.algorithm(data, 0)[0].toString();
    }
    
    public puzzleTwo(data: string) : string {
        let offset = 0;
        let val = this.algorithm(data, offset);
        while(val[1] === true) {
            // console.log('val:', val, 'offset:', offset);
            offset += 1;
            val = this.algorithm(data, offset);
        }
        return (offset).toString();
    }
}
