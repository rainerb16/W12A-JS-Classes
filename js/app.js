
class BoredActivity {
    content = "";
    activityPost = document.getElementById("random-activity");
    loadingPost = document.getElementById("random-activity");
    errorPost = document.getElementById("random-activity");

    getActivity() {
        let activity = new XMLHttpRequest();
        let holder = this;

        activity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newActivity = JSON.parse(this.responseText);
                console.log(newActivity);
                holder.activityPost.innerHTML = newActivity.activity;
                holder.content = newActivity.activity;
            } else if(this.readyState != 4) {
                holder.loadingPost.innerHTML = "Loading...";
            } else {
                holder.errorPost.innerHTML = "Something went wrong..."
            }
        }
        activity.open("GET", "http://www.boredapi.com/api/activity/", true);
        activity.send();
    }


    getGroupActivity() {
        let holder = this;
        let groupActivity = new XMLHttpRequest();

        groupActivity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newGroupActivity = JSON.parse(this.responseText);
                console.log(newGroupActivity);
                holder.activityPost.innerHTML = newGroupActivity.activity;
                holder.content = newGroupActivity.activity;
            } else if(this.readyState != 4) {
                holder.loadingPost.innerHTML = "Loading...";
            } else {
               holder.errorPost.innerHTML = "Something went wrong..."
            }
        }
        groupActivity.open("GET", "http://www.boredapi.com/api/activity?participants=4", true);
        groupActivity.send();
    }


    getFreeActivity() {
        let holder = this;
        let freeActivity = new XMLHttpRequest();

        freeActivity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newFreeActivity = JSON.parse(this.responseText);
                console.log(newFreeActivity);
                holder.activityPost.innerHTML = newFreeActivity.activity;
                holder.content = newFreeActivity.activity;
            } else if(this.readyState != 4) {
                holder.loadingPost.innerHTML = "Loading...";
            } else {
                holder.errorPost.innerHTML = "Something went wrong..."
            }
        }
        freeActivity.open("GET", "http://www.boredapi.com/api/activity?participants=1", true);
        freeActivity.send();
    }


    getRecreationalActivity() {
        let recActivity = new XMLHttpRequest();
        let holder = this;

        recActivity.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let newRecActivity = JSON.parse(this.responseText);
                console.log(newRecActivity);
                holder.activityPost.innerHTML = newRecActivity.activity;
                holder.content = newRecActivity.activity;
            } else if(this.readyState != 4) {
                holder.loadingPost.innerHTML = "Loading...";
            } else {
                holder.errorPost.innerHTML = "Something went wrong..."
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