

/**
 * Fetches live cricket match data from the CricAPI and displays it on the page.
 *
 * It makes an async request to the CricAPI to get current match data.
 * Filters the response to only get live matches, maps it to a string,
 * and displays it in the #matches element.
 */
async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/cricScore?apikey=b42d4a7f-5a9a-451e-a92f-9ea990e1aca0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      
      const relevantData = matchesList
        .filter((match) => match.ms == "live")
        .map(
          (match) =>
            `${match.status} || ${match.t1} score:${match.t1s} vs ${match.t2} score:${match.t2s}`
        );

      console.log({ relevantData });

      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match} </li>`)
        .join("");

      return relevantData;
    })
    .catch((e) => console.log(e));
}

getMatchData();
