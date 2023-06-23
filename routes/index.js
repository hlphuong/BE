const mathangRoute = require('./mathang')
const nhanvienRoute = require('./nhanvien')
const hoadonRoute = require('./hoadon')
const authRoute = require('./auth')
const khachhangRoute = require('./khachhang')
const nganhhangRoute = require('./nganhhang')
const calendarRoute = require('./calendar')

const route = (app) => {
    app.use('/api/mathang',mathangRoute);
    app.use('/api/nhanvien',nhanvienRoute)
    app.use('/api/hoadon',hoadonRoute)
    app.use('/api/auth',authRoute)
    app.use('/api/khachhang', khachhangRoute)
    app.use('/api/calendar',calendarRoute)
    app.use('/api/nganhhang',nganhhangRoute)
}

module.exports =route
