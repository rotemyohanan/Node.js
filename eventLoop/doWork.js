module.exports.doWork = async (duration) => {
    const start = Date.now()
    while ((Date.now() - start) < duration) {}
    console.log('finish time')
}
