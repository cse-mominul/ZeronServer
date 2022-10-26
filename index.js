const express = require('express')
const app =express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const course = require('./courses.json')
const categories = require('./category.json')
app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.get('/course',(req, res)=>{
    res.send(course)
})

app.get('/category/:id',(req,res)=>{
    
    const id = req.params.id;
    if (id == 08){
        res.send(course)
    }
    else
    {
    const SelectedCategory = course.filter(n => n.category_id === id);
    res.send(SelectedCategory);

    }
    
})
app.get('/course/:id',(req,res)=>{
    const id = req.params._id;
    const selectedCourse = course.find(n => n.id === id);
    res.send(selectedCourse);

})
app.get('/',(req, res)=>{
    res.send('Api Runing')
})

app.listen(port, ()=>{
    console.log('api runiing port',port);
})