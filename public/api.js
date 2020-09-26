const API = {
  async getLastWorkout() {
    //when user loads via localhost this is fired
    console.log("L4 api.js");
    let res;
    try {
      console.log("try L6 api.js");
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    //when user clicks continue workout/add exercise this is fired. then getlastWork is called
    console.log("L18");
    const id = location.search.split("=")[1];
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    //when user clicks new workout this is fired 
    console.log("L32");
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    console.log("L31");
    const json = await res.json();

    return json;
  },
  //when user clicks dashboard this is fired
  async getWorkoutsInRange() {
    console.log("l45 api.js");
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
