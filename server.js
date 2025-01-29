// Import Express
const express = require('express')

// Create an Express app
const app = express()

// Define routes here (we'll add them soon)

// Listen for requests on port 3000
app.listen(7000, () => {
    console.log('Listening on port 7000')
  })

   app.get('/', (req , res) => {
     res.send('Welcome Home')
   })

  app.get('/greet/:name', (req, res) => {
   const name = req.params.name;

     res.send(`<h1>Hello there, ${name}!</h1>`);
   });


   app.get('/roll/:num', (req, res) => {
     const num = req.params.num;
      if(isNaN(num)){

         res.send(`<h1>You must specify a number.</h1>`);
      } else {

         res.send(`<h1>You rolled a ${Math.floor(Math.random() * num)}</h1>`);
      }


     });




  

     const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      


      app.get('/collectibles/:indexParameter', (req, res) => {
        const indexParameter = parseInt(req.params.indexParameter);
         if(indexParameter === 0){
   
            res.send(`<h1>So, you want the ${collectibles[0].name}? For ${collectibles[0].price}, it can be yours!</h1>`);
         } else if (indexParameter === 1){
   
            res.send(`<h1>So, you want the ${collectibles[1].name}? For ${collectibles[1].price}, it can be yours!</h1>`);
         } else if (indexParameter === 2){
   
            res.send(`<h1>So, you want the ${collectibles[2].name}? For ${collectibles[2].price}, it can be yours!</h1>`);
         } else {

            res.send('<h1>This item is not yet in stock. Check back soon!</h1>');
  
         }
   
   
        });


        const shoes = [
            { name: "Birkenstocks", price: 50, type: "sandal" },
            { name: "Air Jordans", price: 500, type: "sneaker" },
            { name: "Air Mahomeses", price: 501, type: "sneaker" },
            { name: "Utility Boots", price: 20, type: "boot" },
            { name: "Velcro Sandals", price: 15, type: "sandal" },
            { name: "Jet Boots", price: 1000, type: "boot" },
            { name: "Fifty-Inch Heels", price: 175, type: "heel" }
        ];

         
        app.get('/shoes', (req, res) => {
            
           let filteredShoes = shoes;

            const minPr = parseInt(req.query.minPr);
            const maxPr = parseInt(req.query.maxPr);
            const type1 = req.query.type1;

           
                filteredShoes = filteredShoes.filter((shoe)=>{return shoe.price >= minPr})
            

                filteredShoes = filteredShoes.filter((shoe)=>{return shoe.price <= maxPr})

            
                filteredShoes = filteredShoes.filter((shoe)=>{return shoe.type === type1})


            
           res.send(filteredShoes)

        }); 
        
        
        
        