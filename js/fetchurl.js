console.log("im in fetchurl")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.json());
}

function fetchAnyUrlText(url) {
    console.log("inside fetch json url=" + url)
    return  fetch(url).then(response => response.text());
}

async function actionFetchUrlText(btn) {
    const url = inpUrl.value
    console.log(url)
    const txt = await fetchAnyUrlText(url)
    textArea.textContent = txt
    console.log(txt)
}


async function actionFetchUrlVers1(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url)
    const txt = convertJsonToText(jsonOutput)
    textArea.textContent = txt
    console.log(txt)
}

function convertJsonToText2(json) {
    const txt = json.map(region => `{"region": "${region.kode}"}`).join(', ');
    return txt
}

function convertJsonToText3(json) {
    const txt = json.map(region => "kurt").join(', ');
    return txt
}

function convertJsonToText(json) {
    console.log(json)
    //return json.map(region => `{"region": "${Object.keys(region)[1]}"}`).join(', ');
}


const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")
pbFetch.addEventListener('click', actionFetchUrlText)


