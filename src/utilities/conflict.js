export const isConflict = (course, courselist) => {
    let conflict = false;
    courselist.map((c) => {if (twoConflict(c, course)){
        conflict = true;
    }})
    return conflict;
}

const twoConflict = (c1, c2) => c1 === c2? false:  c1.term === c2.term ? hasTimeConflict(c1.meets, c2.meets) : false;

function parseCourseTime(str) {
    const daysString = str.split(" ")[0];
    const time = str.split(" ")[1];
    const start = parseInt(time.split("-")[0].replace(":", ""), 10);
    const end = parseInt(time.split("-")[1].replace(":", ""), 10);

    const dayMapping = {
        "M": "Monday",
        "T": "Tuesday",
        "W": "Wednesday",
        "Th": "Thursday",
        "F": "Friday",
        "Sa": "Saturday",
        "Su": "Sunday"
    };

    let parsedDays = [];
    let remainingDaysString = daysString;

    for (const day in dayMapping) {
        if (remainingDaysString.includes(day)) {
            parsedDays.push(dayMapping[day]);
            if (day === "Th") {
                // Ensure that we don't misinterpret "T" when "Th" is present.
                remainingDaysString = remainingDaysString.replace("Th", "");
            } else {
                remainingDaysString = remainingDaysString.replace(day, "");
            }
        }
    }

    return {
        days: parsedDays,
        start: start,
        end: end
    };
}

function hasTimeConflict(str1, str2) {
    const course1 = parseCourseTime(str1);
    const course2 = parseCourseTime(str2);

    for (const day1 of course1.days) {
        for (const day2 of course2.days) {
            if (day1 === day2) {
                if (
                    (course1.start >= course2.start && course1.start < course2.end) ||
                    (course1.end > course2.start && course1.end <= course2.end) ||
                    (course1.start <= course2.start && course1.end >= course2.end)
                ) {
                    return true; // there is a time conflict
                }
            }
        }
    }

    return false; // no conflict found
}