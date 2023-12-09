const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false

        if(error) {
            reject(new Error('error in login!'))
        }

        console.log('user logged!')
        resolve({ email })
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos')
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideoDetails')
            resolve({ title: "video title"})
        }, 2500)
    })
}

loginUserPromise('teste@gmail.com', '123456')
    .then((user) => getUserVideos(user.email))
    .then((videos) => getVideoDetails(videos[0]))
    .then((videosDetails) => console.log({videosDetails}))
    .catch((error) => console.log({error}))