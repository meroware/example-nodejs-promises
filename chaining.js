function samplePromise() {
    return new Promise((resolve, reject) => resolve('apple cider'));
}

samplePromise()
.then((res) => {
    console.log('response1', res);
    throw new Error('apple sauce');
})
.then((res2) => console.log('response2', res2))
.catch((e) => {
    console.log('error1', e);
    return 'pear juice';
})
.then((res3) =>console.log('response3', res3))