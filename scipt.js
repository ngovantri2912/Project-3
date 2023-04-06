const hien = document.querySelector('.sign-up')
const dangnhap = document.querySelector('.login')
const bo = document.querySelector('.login .content-login')
function moDangNhap() {
    dangnhap.classList.add('open')
}
function dongDangNhap() {
    dangnhap.classList.remove('open')
}
hien.addEventListener('click', moDangNhap)
dangnhap.addEventListener('click', dongDangNhap)
bo.onclick = function (e) {
    e.stopPropagation()
}
const mo = document.querySelector('.menu')
const menu = document.querySelector('.header .ul-nav')
const dong = document.querySelector('.nav .ul-nav .me')
const nav = document.querySelector('.nav-1')
mo.onclick = function () {
    menu.classList.add('abc')
}
dong.onclick = function () {
    menu.classList.remove('abc')
}


