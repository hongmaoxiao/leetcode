/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
    let x = 0;
    let y = 0;

    for (let i = 0; i < moves.length; i++) {
        const ele = moves[i];

        switch (ele) {
            case 'U':
                y++;
                break;

            case 'D':
                y--;
                break;

            case 'L':
                x--;
                break;

            case 'R':
                x++;
                break;

            default:
                break;
        }
    }
    
    return x === 0 && y === 0;
};