




import * as utils from "./GamePlayer.utils";

describe("utils correctly converts durations to arrow start times", () => {
    test("some durations close to 0, some far", () => {
        const durations = [1, 3, 5, 9, 1];
        const start_times = utils.convertDurationsToArrowStartTimes(durations, utils.Mode.EASY);
        expect(start_times).toEqual([0, 5, 14]);
    });

    test("all durations far from 0", () => {
        const durations = [9, 10, 11, 12];
        const start_times = utils.convertDurationsToArrowStartTimes(durations, utils.Mode.EASY);
        expect(start_times).toEqual([5, 15, 26]);
    });

    test("all durations close to 0", () => {
        const durations = [0.5, 0.6, 0.7, 1.2, 1.6];
        const start_times = utils.convertDurationsToArrowStartTimes(durations, utils.Mode.EASY);
        expect(start_times).toEqual([]);
    });
});