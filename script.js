

const timeBlockDiv = $("#time-block");

buildSchedule();

function buildSchedule() {
  for (var i = 8; i <= 17; i++) {
    buildRow(i);
  }
  console.log(plannerContent)
  localStorage.setItem("planner-items", JSON.stringify(plannerContent))
}

function buildRow(hour) {
  var timeClass = "future";
  const time = moment(hour, "HH");
  var activity;

  if(plannerContent[hour]){
    activity = plannerContent[hour]
  }  

  if (moment().isSame(time, "hour")) {
    timeClass = "present";
  } else if (moment().isAfter(time)) {
    timeClass = "past";
  }

  const row = $("<div>").addClass("row");
  const hourEl = $("<div>").addClass("hour col-1").text(time.format("ha"));
  const textareaEl = $("<textarea>").addClass(
    "description " + timeClass + " col-10"
  ).val(activity);
  const saveBtn = $("<button>").addClass("saveBtn col-1");
  const icon = $("<i>").addClass("fas fa-save");
  saveBtn.append(icon);

  row.append(hourEl, textareaEl, saveBtn);
  timeBlockDiv.append(row);
}
