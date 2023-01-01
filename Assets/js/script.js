window.onload = function () {
  console.log("Page Loaded");
  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd, MMMM D"));

  const currentHour = currentDay.hour();
  const timeBlocks = Array.from(document.getElementsByClassName("time-block"));
  console.log(timeBlocks);
  for (let i = 0; i < timeBlocks.length; i++) {
    const timeBlock = timeBlocks[i];
    let timeBlockHour = parseInt(timeBlock.id.split("-")[1]);
    const timeOfDay = timeBlock.id.split("-")[2];
    if (timeOfDay === "pm") {
      timeBlockHour += 12;
    }
    console.log(`timeBlockHour: ${timeBlockHour}`);
    console.log(`currentHour: ${currentHour}`);
    if (timeBlockHour < currentHour) {
      timeBlock.classList.add("past");
    } else if (timeBlockHour === currentHour) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  }

  timeBlocks.forEach((timeBlock) => {
    const saveButton = timeBlock.querySelector(".saveBtn");
    var textarea = timeBlock.querySelector(".description");
    textarea.value = localStorage.getItem(timeBlock.id);
    saveButton.addEventListener("click", () => {
      localStorage.setItem(timeBlock.id, textarea.value);
    });
  });
};
