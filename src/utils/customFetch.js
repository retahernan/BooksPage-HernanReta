let Ok = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Ok) {
                resolve(task);
            } else {
                reject("Error");
            }
        }, time)
    })
}

export default customFetch;