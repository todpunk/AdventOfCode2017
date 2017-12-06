export let allPairs = function(a : Array<number>) {
    let fn = function(combo_size : number, src : Array<number>, got : Array<number>, all : Array<Array<number>>) {
        if (combo_size == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (let j = 0; j < src.length; j++) {
            fn(combo_size - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    let all : Array<Array<number>> = [];
    fn(2, a, [], all);
    return all;
}

