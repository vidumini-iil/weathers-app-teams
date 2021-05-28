import axios, { CancelTokenSource } from "axios";

let source: CancelTokenSource;

export const getContryList = () => {
    return axios("https://restcountries.eu/rest/v2/all")
        .then((res) => {
            const list = res.data.map((value: any) => ({
                name: value.name,
                countryCode: value.alpha2Code.toLowerCase(),
            }));
            return list;
        })
        .catch((error) => error);
};

export const getCityList = (serachText: string, countryCode: string | null | undefined) => {
    if (source) {
        source.cancel(); // minimize server calling
    }
    source = axios.CancelToken.source();
    return axios
        .get("https://api.geoapify.com/v1/geocode/autocomplete", {
            cancelToken: source.token,
            params: {
                text: serachText,
                filter: `countrycode:${countryCode}`,
                type: "city",
                apiKey: "bf0cfe45ea014b5ab6b22c3b84e2e515",
            },
        })
  
};
