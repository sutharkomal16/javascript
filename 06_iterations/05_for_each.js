const coding = ["python","java","javascript","go"]
coding.forEach(function(item){
    // console.log(item)
})
coding.forEach((item)=> {
    // console.log(item)
})

coding.forEach((item,index,array)=>{
    // console.log(item,index,array);
})

const myCoding = [
    {
        language:"javascript",
        filename:"js"
    },
    {
        language:"python",
        filename:"py"
    },
    {
        language:"java",
        filename:"java"
    },
    {
        language:"html",
        filename:"html"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language)
    console.log(item.filename)

})