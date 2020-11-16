function samplePromise() {
    return new Promise((resolve, reject) => resolve('pear cider'));
}

async function sampleAppleSauceYESSSS() {
    return 'yes to apple sauce';
}

async function samplePromiseTester() {
    try {
        const res1 = await samplePromise();
        console.log('response1', res1);
        const res2 = await sampleAppleSauceYESSSS();
        console.log(res2);
    } catch(e) {
        console.log('error1', e);
    }
}

(async () => samplePromiseTester())();