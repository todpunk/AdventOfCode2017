import { PuzzleDay } from "./PuzzleDay";

export class DayFifteen implements PuzzleDay {
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
        let gena_factor = 16807;
        let genb_factor = 48271;
        let remainder = 2147483647;
        let rows = data.split('\n');
        let gena_start = parseInt(rows[0].split(' ')[4])
        let genb_start = parseInt(rows[1].split(' ')[4])

        let score = 0;
        let a = gena_start;
        let b = genb_start;

        for(let i = 0; i < 40000000; i++) {
            a = ((a * gena_factor) % remainder);
            b = ((b * genb_factor) % remainder);
            if((a & 0xFFFF) == (b & 0xFFFF)){score += 1};
        }

        return score.toString();
    }
    
    public puzzleTwo(data: string) : string {
        let gena_factor = 16807;
        let genb_factor = 48271;
        let remainder = 2147483647;
        let rows = data.split('\n');
        let gena_start = parseInt(rows[0].split(' ')[4])
        let genb_start = parseInt(rows[1].split(' ')[4])

        let score = 0;
        let a = gena_start;
        let b = genb_start;

        for(let i = 0; i < 5000000; i++) {
            do {a = ((a * gena_factor) % remainder)} while(a%4 !== 0);
            do {b = ((b * genb_factor) % remainder)} while(b%8 !== 0);
            if((a & 0xFFFF) == (b & 0xFFFF)){score += 1};
        }

        return score.toString();
    }
}
