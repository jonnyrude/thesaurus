import data from './scrape.js'; // Temporary

function thesaurusAPIcall (word) {

    // Temporary:
    if (word === "scrape") {
        // let content = fs.readFileSync('./scrape.json');
        // console.log(JSON.stringify(data));
        const resp = new Promise((resolve, reject) => {
            resolve(data);
        });

        return resp;
    } else {
        // Keep
    return fetch(`http://words.bighugelabs.com/api/2/013ebae8e4e1a176fb2371f24e2e5700/${word}/json`)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return err;
        })
    }
}

export default thesaurusAPIcall