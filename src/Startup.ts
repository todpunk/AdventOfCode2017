import fs = require('fs');

import { DayOne } from "./DayOne";
import { DayTwo } from "./DayTwo";
import { DayThree} from "./DayThree";
import { DayFour} from "./DayFour";
import { PuzzleDay } from "./PuzzleDay";

let dayMap : {[index:number]:any} = {
    1: DayOne,
    2: DayTwo,
    3: DayThree,
    4: DayFour
}

class Startup {
    public static main(): number {
        if (process.argv.length < 3) {
            console.log('Usage: node aoc.js <day> <puzzle> [<puzzle input filename>|<puzzle input string>]');
        } else {
            console.log('Asking for day:', process.argv[2], 'puzzle', process.argv[3], 'input', process.argv.length > 3 ? process.argv[4] : 'None')
        }

        let day = parseInt(process.argv[2]);
        let puzzle = parseInt(process.argv[3]);
        let inputFile = process.argv.length > 4 ? process.argv[4] : null;
        let data = "None"
        if(inputFile !== null) {
            if(fs.existsSync(inputFile)){
                data = fs.readFileSync(inputFile, "utf-8");
            } else {
                // It's not a file, try just using the string
                data = inputFile;
            }
        }
        if (dayMap[day]) {
            // This should run the appropriate day's code
            let puzzleday = <PuzzleDay> new dayMap[day]();
            let result = puzzleday.run(puzzle, data);
            console.log("Answer:", result);
        } else {
            console.log("No puzzle code for the input day found.");
        }
        return 0;
    }
}

Startup.main();