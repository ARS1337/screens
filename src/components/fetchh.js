function makeRequest(url, headers, body, key) {
    let myheaders = new Headers();

    myheaders.append("Accept", "application/json");
    myheaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");

    if (headers != null) {
        Object.keys(headers).map((x) => {
            myheaders.append(x, headers[x]);
        });
    }

    let mainInit = {
        method: "POST",
        headers: myheaders,
        mode: "cors",
    };

    if (body != null) {
        mainInit.body = JSON.stringify(body);
    }

    return fetch(url, mainInit, key);
}
export default makeRequest;