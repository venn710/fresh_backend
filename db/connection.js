const mongoose=require('mongoose')
const uri='mongodb+srv://venn:venn123@cluster0.ziajh.mongodb.net/test?retryWrites=true&w=majority'
async function connectDB(){
await mongoose.connect(uri)
console.log("CONNECTED")
}
module.exports=connectDB;