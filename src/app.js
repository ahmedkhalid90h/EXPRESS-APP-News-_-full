// http://localhost:3000/about

const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const path = require('path')

const request = require('request')

const viewPath = path.join(__dirname,'../templates/views')

const partialsPath = path.join(__dirname,'../templates/partials')

const hbs = require('hbs')

hbs.registerPartials(partialsPath)

app.set('view engine', 'hbs')

app.set('views',viewPath)

const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=224f163e2bab4e7b8c67830310ea2bb2'
request({url,json:true},(error,response)=>{
    const data = response.body.articles
    // console.log(data)
    app.get('/about',(req,res)=>{
        res.render('about',{
            data,
            head:'New'
        })
    })
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})