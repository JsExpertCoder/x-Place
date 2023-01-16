const noMatchActivitySpan = document.querySelector(".noMatchActivitySpan");
const allActivities =     document.querySelectorAll("._activity-content");
const noMatchActivityDiv =   document.querySelector(".noMatchActivityDiv");
const selectedActivity = document.querySelector(".selectedActivity");
const activityDiv =  document.querySelector("._activity");
const btnFilter =   document.querySelector("._btnFilter");

btnFilter.addEventListener("click", () => {

  noMatchActivityDiv.setAttribute("style", "display: none;")

  allActivities.forEach(activity => {
    activity.setAttribute("style", "display: none;")

  })

  const showThis = ((selectedActivity.value).toLowerCase()).replace(/ /ig, "_")
  const activityToShow = document.querySelectorAll(`.${showThis}`)
  const match = activityToShow.length;
  console.log(match);
  
  if (match > 0) 
  {
    if (match == 1) {
      activityDiv.setAttribute("style", "height: 620px")
    }
    else if (match == 2) 
    {
      activityDiv.setAttribute("style", "height: 800px")
    }
    else 
    {
      activityDiv.setAttribute("style", "height: 900px")
    }
    activityToShow.forEach(activity => {
      activity.setAttribute("style", "display: block;")
    })
  }
  else {
    activityDiv.setAttribute("style", "height: auto")

    
    let str = (showThis.replace(/_/ig, " "));
    const firstLetterToUpper = String.fromCharCode(showThis.charCodeAt(0) - 32)
    str = `${firstLetterToUpper}${str.substr(1, str.length - 1)}`

    noMatchActivitySpan.innerText = `"${str}"`;

    noMatchActivityDiv.setAttribute("style", `display: block;`)

  }
})