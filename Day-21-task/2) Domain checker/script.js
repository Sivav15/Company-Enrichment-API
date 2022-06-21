document.getElementsByClassName("button")[0].addEventListener("click", () => {
  let input_value = document.getElementsByClassName("inputbox")[0].value;
  loading(input_value);
});
function loading(value) {
  console.log(input_value);
  function domain() {
    return new Promise((resolve, reject) => {
      let url = `https://companyenrichment.abstractapi.com/v1/?api_key=5529a87e052444e5b5fbcd7cca305990&domain=${value}`;
      fetch(url)
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  domain()
    .then((data) => data.json())
    .then((data1) => {
      console.log(data1);
      document.getElementsByClassName(
        "company"
      )[0].innerHTML = `Company Name : ${data1.name}`;
      let anchor = document.createElement("a");
      anchor.innerHTML = data1.domain;
      anchor.href = `https://www.${data1.domain}`;
      anchor.target = "_blank";
      anchor.style.color = "blue";
      anchor.style.fontWeight = "400";
      anchor.style.letterSpacing = "1px";
      document.getElementsByClassName("domain")[0].innerHTML =
        "<span>Domain Name : </span>";
      document.getElementsByClassName("domain")[0].append(anchor);

      document.getElementsByClassName(
        "startup"
      )[0].innerHTML = `Startup Year : ${data1.year_founded}`;
      document.getElementsByClassName(
        "industry"
      )[0].innerHTML = ` Business Type : ${data1.industry}`;
      document.getElementsByClassName(
        "employees"
      )[0].innerHTML = `No Of Employees Working : ${data1.employees_count}`;
      document.getElementsByClassName(
        "location"
      )[0].innerHTML = `Locality : ${data1.locality}`;
      document.getElementsByClassName(
        "country"
      )[0].innerHTML = `Country : ${data1.country}`;
      let anchor1 = document.createElement("a");
      anchor1.innerHTML = data1.domain;
      anchor1.href = `https://www.${data1.linkedin_url}`;
      anchor1.target = "_blank";
      anchor1.style.color = "blue";
      anchor1.style.fontWeight = "400";
      anchor1.style.letterSpacing = "1px";
      document.getElementsByClassName("linkedin")[0].innerHTML =
        "<span>linkedin : </span>";
      document.getElementsByClassName("linkedin")[0].append(anchor1);
    })
    .catch((err) => console.log(err));
}
let input_value = document.getElementsByClassName("inputbox")[0].value;
loading(input_value);
