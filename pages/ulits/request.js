let BASE_URL = 'http://localhost:3000'
export default function request(options) {
    return new Promise((resolve, reject) => {
        wx.showLoading({
                title: '加载中',
                mask: true,
            }),
            wx.request({
                url: BASE_URL + options.url,
                success: (res) => {
                    let { status, message } = res.data
                    if (status === 0) {
                        resolve(message)
                    }
                },
                complete() {
                    wx.hideLoading({})
                }
            })

    })
}