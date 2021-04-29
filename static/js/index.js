{
    console.log("1. Before callback");
    jQuery.get('/promises/getval', function(r) {
        console.log("2. I got via callback:", r);
    });
    console.log("3. Afer callback");

    console.log("4. Start promise call");
    axios.get('/promises/getval').then(function (r) {
        console.log("5. I got via promise:", r);
    });
    console.log("6. After promise call");

    async function async_get() {
        console.log("7. Start async call");
        let r = await axios.get('/promises/getval');
        console.log("8. I got via async:", r);
    }
    async_get();
    console.log("9. After async call");

    console.log("10. Before callback wrapped in promise");
    let p = new Promise(function (resolve, reject) {
        jQuery.get('/promises/getval', r => resolve(r));
    });
    p.then(function (r) {
        console.log("11. I got via callback wrapped in a promise:", r);
    })
    console.log("12. After callback wrapped in promise.")

}