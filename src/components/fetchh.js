function makeRequest(url, headers, body, key) {
    let base_url = "https://staging.mypcot.com/Homefood/customergateway";
    if(url!=undefined){
        base_url+=url;
    }
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

    return fetch(base_url, mainInit, key);
}
export default makeRequest;