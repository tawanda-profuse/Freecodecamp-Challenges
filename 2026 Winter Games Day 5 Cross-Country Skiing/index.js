function getRelativeResults(results) {
  // Helper: convert H:MM:SS to seconds
  function toSeconds(timeStr){
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  // Helper: convert seconds → "+M:SS"
  function formatDifference(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `+${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  const winnerTime = toSeconds(results[0]);

  return results.map((time, index) => {
    if (index === 0) return "0";

    const diff = toSeconds(time) - winnerTime;
    return formatDifference(diff);
  })
}

// Tests
console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]));
console.log(getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]));
console.log(getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]));
console.log(getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]));