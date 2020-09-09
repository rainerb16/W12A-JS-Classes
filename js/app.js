
class BoredActivity {
    content = "";

    getActivity() {
        let activity = new XMLHttpRequest();
        activity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newActivity = JSON.parse(this.responseText);
                console.log(newActivity);
                document.getElementById("random-activity").innerHTML = newActivity.activity;
                this.content = newActivity.activity;
            } else if(this.readyState != 4) {
                document.getElementById("random-activity").innerHTML = "Loading...";
            } else {
                document.getElementById("random-activity").innerHTML = "Something went wrong..."
            }
        }
        activity.open("GET", "http://www.boredapi.com/api/activity/", true);
        activity.send();
    }


    getGroupActivity() {
        let groupActivity = new XMLHttpRequest();
        groupActivity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newGroupActivity = JSON.parse(this.responseText);
                console.log(newGroupActivity);
                document.getElementById("random-activity").innerHTML = newGroupActivity.activity;
                this.content = newGroupActivity.activity;
            } else if(this.readyState != 4) {
                document.getElementById("random-activity").innerHTML = "Loading...";
            } else {
                document.getElementById("random-activity").innerHTML = "Something went wrong..."
            }
        }
        groupActivity.open("GET", "http://www.boredapi.com/api/activity?participants=4", true);
        groupActivity.send();
    }


    getFreeActivity() {
        let freeActivity = new XMLHttpRequest();
        freeActivity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newFreeActivity = JSON.parse(this.responseText);
                console.log(newFreeActivity);
                document.getElementById("random-activity").innerHTML = newFreeActivity.activity;
                this.content = newFreeActivity.activity;
            } else if(this.readyState != 4) {
                document.getElementById("random-activity").innerHTML = "Loading...";
            } else {
                document.getElementById("random-activity").innerHTML = "Something went wrong..."
            }
        }
        freeActivity.open("GET", "http://www.boredapi.com/api/activity?participants=1", true);
        freeActivity.send();
    }


    getRecreationalActivity() {
        let recActivity = new XMLHttpRequest();
        recActivity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newRecActivity = JSON.parse(this.responseText);
                console.log(newRecActivity);
                document.getElementById("random-activity").innerHTML = newRecActivity.activity;
                this.content = newRecActivity.activity;
            } else if(this.readyState != 4) {
                document.getElementById("random-activity").innerHTML = "Loading...";
            } else {
                document.getElementById("random-activity").innerHTML = "Something went wrong..."
            }
        }
        recActivity.open("GET", "http://www.boredapi.com/api/activity?type=recreational", true);
        recActivity.send();
    }
}


function activityButton() {
    bored.getActivity();
}

function groupActivityButton() {
    bored.getGroupActivity();
}

function freeActivityButton() {
    bored.getFreeActivity();
}

function recActivityButton() {
    bored.getRecreationalActivity();
}

let bored = new BoredActivity();

// EVENT LISTENER
document.getElementById("activity-button").addEventListener("click", activityButton);
document.getElementById("group-activity-button").addEventListener("click", groupActivityButton);
document.getElementById("free-activity-button").addEventListener("click", freeActivityButton);
document.getElementById("recreational-activity-button").addEventListener("click", recActivityButton);