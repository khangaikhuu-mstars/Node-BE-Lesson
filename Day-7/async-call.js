function getCountries(s, p) {
  let answer = 0;
  const https = require("https");
  let base_url = `https://jsonmock.hackerrank.com/api/countries/search`;

  function getTotalPages(s) {
    let url = `${base_url}?name=${s}`;
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let response = "";
        res.on("data", (chunk) => {
          response += chunk;
        });
        res.on("end", () => {
          resolve(JSON.parse(response).total_pages);
        });
      });
    });
  }
  function getCountriesPerPage(s, page) {
    let url = `${base_url}?name=${s}&page=${page}`;
    return new Promise((resolve, reject) => {
      https.get(url, (resp) => {
        let data = "";
        resp.on("data", (chunk) => (data += chunk));
        resp.on("end", () => resolve(JSON.parse(data).data));
      });
    });
  }

  getTotalPages(s).then(
    (total_pages) => {
      let current_page = 1;
      let countries = [];
      while (current_page <= total_pages) {
        countries.push(getCountriesPerPage(s, current_page));
        current_page++;
      }
      Promise.all(countries).then((arr) => {
        let answer = arr
          .reduce(
            (accumulator, currentValue) => [...accumulator, ...currentValue],
            []
          )
          .filter((item) => item.population > p).length;
        console.log(answer);
        return answer;
      });
    },
    (err) => console.log(err)
  );
}
console.log("===final answer", getCountries("in", 10000));
