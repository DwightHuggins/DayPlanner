// var idsCollection = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];
// var timeSlotCollection = [
//   "09:00:00",
//   "10:00:00",
//   "11:00:00",
//   "12:00:00",
//   "13:00:00",
//   "14:00:00",
//   "15:00:00",
//   "16:00:00",
//   "17:00:00",
// ];
// var shiftedTimeSlotCollection = [
//   "10:00:00",
//   "11:00:00",
//   "12:00:00",
//   "13:00:00",
//   "14:00:00",
//   "15:00:00",
//   "16:00:00",
//   "17:00:00",
//   "18:00:00",
// ];

// var plannerContent = [];
// var getLocalStorageData = JSON.parse(localStorage.getItem("planner-items"));

// if (getLocalStorageData !== null) {
//   plannerContent = getLocalStorageData;
// }
// || === OR
// && === AND
//  true === true, Int > 0, ['minimum on item'], { has: "atleast one key"}
//  false === false, undefined, null, '', 0, {}, []
// if (plannerContent === null) {
//   plannerContent = [];
// }
// if(!plannerContent){
//   plannerContent = []
// }
var plannerContent = JSON.parse(localStorage.getItem("planner-items")) || {};
// console.log(plannerContent)

// for (var i = 0; i < idsCollection.length; i++) {
//   var descriptionEl = $(idsCollection[i]);
//   var buttonEl = descriptionEl.parent().parent().find("button");

//   if (
//     moment().format("MMMM Do YYYY, HH:mm:ss") <
//     moment().format("MMMM Do YYYY") + ", " + timeSlotCollection[i]
//   ) {
//     descriptionEl.attr("class", "future");
//     plannerContent.forEach(function (item) {
//       if (idsCollection[i] === "#" + item["input-id"]) {
//         descriptionEl.val(item["input-value"]);
//       }
//     });
//   } else if (
//     moment().format("MMMM Do YYYY, HH:mm:ss") >=
//       moment().format("MMMM Do YYYY") + ", " + timeSlotCollection[i] &&
//     moment().format("MMMM Do YYYY, HH:mm:ss") <
//       moment().format("MMMM Do YYYY") + ", " + shiftedTimeSlotCollection[i]
//   ) {
//     descriptionEl.attr("class", "present");
//     $(".present").attr("disabled", "disabled");
//     buttonEl.attr("disabled", true);
//     plannerContent.forEach(function (item) {
//       if (idsCollection[i] === "#" + item["input-id"]) {
//         descriptionEl.val(item["input-value"]);
//       }
//     });
//   } else if (
//     moment().format("MMMM Do YYYY, HH:mm:ss") >
//     moment().format("MMMM Do YYYY") + ", " + timeSlotCollection[i]
//   ) {
//     descriptionEl.attr("class", "past");
//     $(".past").attr("disabled", "disabled");
//     buttonEl.attr("disabled", true);
//   }
// }

// $("button").on("click", function () {
//   event.preventDefault();
//   var container = $(this).parent().parent();
//   var inputValue = container.find("input").val();
//   var inputId = container.find("input").attr("id");
//   var textObj = {
//     "input-id": inputId,
//     "input-value": inputValue,
//   };

//   if (textObj["input-value"] !== "") {
//     plannerContent.push(textObj);
//     localStorage.setItem("planner-items", JSON.stringify(plannerContent));
//   }
// });

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
var obj = { name: "Ben" };

console.log(['a', 'b', 'c'])
console.log(['a', 'b', 'c'][1])
console.log(obj)
console.log(obj.name)
console.log(obj['name'])
var key = "name"
console.log(obj[key])

key = "age"
obj[key] = 32
obj.job = "tutor"
console.log(obj)
console.log(obj.key)
console.log(obj[key])