var path = require('path');
var express = require("express");
app = express();
bodyparser = require("body-parser");
mongoose = require("mongoose");

const uri = 'mongodb+srv://ReadONLY:KlgbzTvmRgzFNYw5@cluster0.frqqlec.mongodb.net/Game_DB?retryWrites=true&w=majority';


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.use(express.static("public"));
app.set("view engine", "ejs");

const schema = require('./schema');

app.get("/", async (req, res) => {
    const pa_Casual = await schema.aggregate([{$match:{G:"Casual"}},{$group:{_id: null,avg_val: {$avg: "$P"}}},{$unset: "_id" }]);
    const pa_Strategy = await schema.aggregate([{$match:{G:"Strategy"}},{$group:{_id: null,avg_val: {$avg: "$P"}}},{$unset: "_id" }]);
    const pa_Adventure = await schema.aggregate([{$match:{G:"Adventure"}},{$group:{_id: null,avg_val: {$avg: "$P"}}},{$unset: "_id" }]);
    const pa_Indie = await schema.aggregate([{$match:{G:"Indie"}},{$group:{_id: null,avg_val: {$avg: "$P"}}},{$unset: "_id" }]);
    const pa_Action = await schema.aggregate([{$match: {G: "Action",},},{$group: {_id: null,avg_val: {$avg: "$P" },},},{$unset: "_id" }]);
    
    const hBar_MultiPlayer =  await schema.aggregate([{$match:{F:"Multi-player"}},{$group:{_id: null,maxP: {$max: "$P"}, maxGD: {$max: "$GD"}}},{$unset: "_id" }]);
    const hBar_SinglePlayer =  await schema.aggregate([{$match:{F:"Single-player"}},{$group:{_id: null,maxP: {$max: "$P"}, maxGD: {$max: "$GD"}}},{$unset: "_id" }]);
    const hBar_Strategy =  await schema.aggregate([{$match:{F:"Strategy"}},{$group:{_id: null,maxP: {$max: "$P"}, maxGD: {$max: "$GD"}}},{$unset: "_id" }]);
    const hBar_FullController =  await schema.aggregate([{$match:{F:"PvP"}},{$group:{_id: null,maxP: {$max: "$P"}, maxGD: {$max: "$GD"}}},{$unset: "_id" }]);
    const hBar_Mmo =  await schema.aggregate([{$match:{F:"MMO"}},{$group:{_id: null,maxP: {$max: "$P"}, maxGD: {$max: "$GD"}}},{$unset: "_id" }]);

    const line_75 =  await schema.aggregate([{$match:{MS: 75}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_76 =  await schema.aggregate([{$match:{MS: 76}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_77 =  await schema.aggregate([{$match:{MS: 77}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_78 =  await schema.aggregate([{$match:{MS: 78}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_79 =  await schema.aggregate([{$match:{MS: 79}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_80 =  await schema.aggregate([{$match:{MS: 80}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_81 =  await schema.aggregate([{$match:{MS: 81}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_82 =  await schema.aggregate([{$match:{MS: 82}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_83 =  await schema.aggregate([{$match:{MS: 83}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_84 =  await schema.aggregate([{$match:{MS: 84}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_85 =  await schema.aggregate([{$match:{MS: 85}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_86 =  await schema.aggregate([{$match:{MS: 86}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_87 =  await schema.aggregate([{$match:{MS: 87}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_88 =  await schema.aggregate([{$match:{MS: 88}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_89 =  await schema.aggregate([{$match:{MS: 89}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);
    const line_90_plus =  await schema.aggregate([{$match:{MS:{$gt: 90}}},{$group:{_id: null,avgP: {$avg: "$P"}, avgGD: {$avg: "$GD"}}},{$unset: "_id" }]);


    const total_Games = await schema.count()
    const total_Free_Games = await schema.count().where('P').equals(0);



    const top_Indie = await schema.aggregate([{$match:{G:"Indie"}},{$sort:{MS: -1}}]);
    const top_Action = await schema.aggregate([{$match:{G:"Action"}},{$sort:{MS: -1}}]);
    const top_Adventure = await schema.aggregate([{$match:{G:"Adventure"}},{$sort:{MS: -1}}]);


    const PvP1 = await schema.aggregate([{$match:{F:"PvP"}},{$sort:{P: -1}}]);
    const PvP2 = await schema.aggregate([{$match:{F:"PvP"}},{$sort:{P: 1}}]);


    res.render("index", {  
        pa_casual: pa_Casual, 
        pa_action: pa_Action, 
        pa_indie: pa_Indie, 
        pa_strategy: pa_Strategy, 
        pa_adventure : pa_Adventure,
        hbar_mp : hBar_MultiPlayer,
        hbar_sp: hBar_SinglePlayer,
        hbar_stra: hBar_Strategy,
        hbar_fc: hBar_FullController,
        hbar_mmo: hBar_Mmo,
        total: total_Games,
        total_free: total_Free_Games,
        l_75: line_75,
        l_76: line_76,
        l_77: line_77,
        l_78: line_78,
        l_79: line_79,
        l_80: line_80,
        l_81: line_81,
        l_82: line_82,
        l_83: line_83,
        l_84: line_84,
        l_85: line_85,
        l_86: line_86,
        l_87: line_87,
        l_88: line_88,
        l_89: line_89,
        l_90_p: line_90_plus,
        t_indie: top_Indie,
        t_action: top_Action,
        t_adventure: top_Adventure,
        pvp1: PvP1,
        pvp2: PvP2

    });
});

const PORT = process.env.PORT || 8000;

const start = async() => {
    try{
        await mongoose.connect(uri);

        app.listen(PORT, () => {
            console.log('App Listening on port 8000');
        });
    } catch(e){
        console.log(e.message)
    }
}

start();
