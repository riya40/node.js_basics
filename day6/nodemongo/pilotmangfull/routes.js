const Pilot =  require('./user')

//calling the api endpoints

function routes(app){
    //get endpoint to fetch the all the pilots reecords
    app.get('/pilots',async(req,res)=>{
        try{
            const pilots = await Pilot.find();
            res.json(pilots);
        }catch(error){
            res.status(500).json({error:'Error retriving pilots'})
        }
    });


    //post endpoint to post the records to database
    app.post('/pilots',async(req,res)=>{
        const{name,airlines,email}=req.body;
        try{
            const pilot = new Pilot({name,airlines,email});
            await pilot.save();
            res.json(pilot);
        }catch(error){
            res.status(500).json({error:'Error creating pilots'})
        }
    });


    //update endpoint to update the details of pilots by identifying the id 
    app.put('/pilots/:id',async(req,res)=>{
        const {id}=req.params;
        const{name,airlines,email}=req.body;
        try{
            const pilot = await Pilot.findByIdAndUpdate(id,{name,airlines,email},{new:true});
            res.json(pilot);
        }catch(error){
            res.status(500).json({error:'Error updating pilots'})
        }
    });

    // delete the pilot by identifying the id
    app.delete('/pilots/:id',async(req,res)=>{
        const {id}=req.params;
        try{
            const pilot = await Pilot.findByIdAndDelete(id);
            res.json(pilot);
        }catch(error){
            res.status(500).json({error:'Error deletiing Pilots'})
        }
    });

    //fetching the pilots by using the id
    app.get('/pilots/:id',async(req,res)=>{
        const {id}=req.params;
        try{
            const pilot = await Pilot.findById(id);
            if (pilot){
            res.json(pilot);}
            else{
                res.status(404).json({error:'user not found'})
            }
        }catch(error){
            res.status(500).json({error:'Error deletiing Pilots'})
        }
    });


}

module.exports = routes;