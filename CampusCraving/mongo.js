const mongoose = require("mongoose");

const con1 = mongoose.createConnection("mongodb://127.0.0.1:27017/food", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to food database");
});

const con2 = mongoose.createConnection("mongodb://127.0.0.1:27017/userdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to userdata database");
});
const con3 = mongoose.createConnection("mongodb://127.0.0.1:27017/order", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to order  database");
});

const userschema = new mongoose.Schema({
    image: String,
    name: String,
    price: String,
    offer: String
});

const userschema2 = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const userschema3=new mongoose.Schema({
    order:String
})
const fooditem = con1.model("fooditem", userschema);
const seconddb = con2.model("userdata", userschema2);
const thirddb=con3.model("order",userschema3)

const fooditem1=new fooditem({
    image:"https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg",
    name:"panner",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})

const fooditem2=new fooditem({
    image:"https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg",
    name:"Fruit chart",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem3=new fooditem({
    image:"https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg",
    name:"Speial combo",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem4=new fooditem({
    image:"https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?size=626&ext=jpg",
    name:"Tikka",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem5=new fooditem({
    image:"https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg",
    name:"Noodle",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem6=new fooditem({
    image:"https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?size=626&ext=jpg",
    name:"Dal",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem7=new fooditem({
    image:"https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg",
    name:"Roti Samosa",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem8=new fooditem({
    image:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg",
    name:"Pasta",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem9=new fooditem({
    image:"https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg",
    name:"Pizza",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})

const fooditem10=new fooditem({
    image:"https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg",
    name:"Sandwich",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem11=new fooditem({
    image:"https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35929.jpg?size=626&ext=jpg",
    name:"FUll Plate Shai",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})

const fooditem12=new fooditem({
    image:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
    name:"FUll Boilded Egg",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})


const fooditem13=new fooditem({
    image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
    name:"Cherry Sandwich",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem14=new fooditem({
    image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
    name:"Green Vege's",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem15=new fooditem({
    image:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D",
    name:"CONE ICE ",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem16=new fooditem({
    image:"https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Bread Curd ",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem17=new fooditem({
    image:"https://images.pexels.com/photos/16803393/pexels-photo-16803393/free-photo-of-pizzas-on-the-table-at-the-restaurant.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Pizzaa",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem18=new fooditem({
    image:"https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Soup",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem19=new fooditem({
    image:"https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"GRilled papad",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem20=new fooditem({
    image:"https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Boiled Leaf",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem21=new fooditem({
    image:"https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Panner",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem22=new fooditem({
    image:"https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Panner peices",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem23=new fooditem({
    image:"https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Purmle ",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})
const fooditem24=new fooditem({
    image:"https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Dumpkin cake  ",
    price:`Rs.${Math.floor(Math.random()*1000)+1}`,
    offer:`${Math.floor(Math.random()*10)+1}%`
})

fooditem1.save();
fooditem2.save();
fooditem3.save();
fooditem4.save();
fooditem5.save();
fooditem6.save();
fooditem7.save();
fooditem8.save();
fooditem9.save();
fooditem10.save();
fooditem11.save();
fooditem12.save();
fooditem13.save();
fooditem14.save();
fooditem15.save();
fooditem16.save();
fooditem17.save();
fooditem18.save();
fooditem19.save();
fooditem20.save();
fooditem21.save();
fooditem22.save();
fooditem23.save();
fooditem24.save();


module.exports = { fooditem, seconddb,thirddb };