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

// Adendo normalmente não vai ser criado uma promise, normalmente será consumida uma promise em uma biblioteca como o axios

const displayUser = async () => {
    try {
        const user = await loginUserPromise('teste02@gmail.com', '123456')
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideoDetails(videos[0])

        console.log({ videoDetails })
    } catch (error) {
        console.log({ error })
    }
}

displayUser()