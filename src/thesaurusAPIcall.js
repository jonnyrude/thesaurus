function thesaurusAPIcall (word) {

    return fetch(`http://words.bighugelabs.com/api/2/013ebae8e4e1a176fb2371f24e2e5700/${word}/json`)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return err;
        })
}

export default thesaurusAPIcall