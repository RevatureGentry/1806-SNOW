export var Mode = {
    EASY: 0,
    MEDIUM: 1,
    HARD: 2
}


export function convertDurationsToArrowStartAndEndTimes(durations, mode) {
    const arrow_start_times = durations
        .reduce(function convertToNoteStartTime(acc, cur) {
            // convert durations to scheduled times
            acc.push(cur + acc[acc.length - 1]);
            return acc;
        }, [0])
        .map(function convertToArrowStartAndEndTime(time) {
            // TODO TODO : Convert based on MODE.
            if(mode === Mode.EASY) {
                return [time - 10, time];
            } else if (mode === Mode.MEDIUM) {
                return [time - 7, time];
            } else if (mode === Mode.HARD) {
                return [time - 4, time];
            } else {
                throw new Error("invalid mode detected: " + mode.toString());
            }
        })
        .filter(function isPositive(times_array) {  // Get rid of negative start times.
            return times_array[0] >= 0;
        });

    // Unfortunately the last time is not valid, because no note is scheduled
    // to begin then.
    arrow_start_times.pop();

    return arrow_start_times;
}