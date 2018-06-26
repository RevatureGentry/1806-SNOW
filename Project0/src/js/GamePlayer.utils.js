export var Mode = {
    EASY: 0,
    MEDIUM: 1,
    HARD: 2
}


export function convertDurationsToArrowStartTimes(durations, mode) {
    const arrow_start_times = durations
        .reduce(function convertToNoteStartTime(acc, cur) {
            // convert durations to scheduled times
            acc.push(cur + acc[acc.length - 1]);
            return acc;
        }, [0])
        .map(function convertToArrowStartTime(time) {
            // TODO TODO : Convert based on MODE.
            if(mode === Mode.EASY) {
                return time - 4;
            } else if (mode === Mode.MEDIUM) {
                return time - 4;  // 7 ?
            } else if (mode === Mode.HARD) {
                return time - 4    // 10 ?
            } else {
                throw new Error("invalid mode deteceted: " + mode.toString());
            }
        })
        .filter(function isPositive(time) {  // Get rid of negative start times.
            return time >= 0;
        });

    // Unfortunately the last time is not valid, because no note is scheduled
    // to begin then.
    arrow_start_times.pop();

    return arrow_start_times;
}