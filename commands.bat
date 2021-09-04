start cmd /k sass --watch ./assets/scss/_main.scss:./dist/style.css



start cmd /k browser-sync start --server --files "./*html, dist/*.css, ./assets/js/*.js, ./asset/scss/*.scss"