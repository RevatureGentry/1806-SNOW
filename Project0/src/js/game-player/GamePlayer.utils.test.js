




import * as utils from "./GamePlayer.utils";

describe("utils correctly converts durations to arrow start times", () => {
    test("some durations close to 0, some far", () => {
        const durations = [1, 3, 5, 9, 1];
        let start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, utils.Mode.EASY);
        expect(start_end_times).toEqual([
            [8, 18],
        ]);

        start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, utils.Mode.MEDIUM);
        expect(start_end_times).toEqual([
            [2, 9],
            [11, 18],
        ]);

        start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, utils.Mode.HARD);
        expect(start_end_times).toEqual([
            [0, 4],
            [5, 9],
            [14, 18],
        ]);
    });

    test("all durations far from 0", () => {
        const durations = [9, 10, 11, 12];
        const start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, utils.Mode.HARD);
        expect(start_end_times).toEqual([
            [5, 9],
            [15, 19],
            [26, 30],
        ]);
    });

    test("all durations close to 0", () => {
        const durations = [0.5, 0.6, 0.7, 1.2, 1.6];
        const start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, utils.Mode.HARD);
        expect(start_end_times).toEqual([]);
    });
});