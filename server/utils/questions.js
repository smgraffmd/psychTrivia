const axios = require("axios");
const mysql = require('mysql2/promise');

var databaseOptions = {
    host:"mysql.sarah.graffmd.com",
    user:"testsarahgraffco",
    password:"s5tJp2jA",
    database:"gmetrivia" 
};

module.exports = {

    getCategories: async function databaseConnection(){  
        const connection = await mysql.createConnection(databaseOptions);
        const [rows] = await connection.query("SELECT section,id FROM gmetrivia.sections where section is not null");
        await connection.end();
        //console.log(rows);
        return rows;
    },

    getQuestions: async (category, difficulty, questions) => {
        //var url;
        const connection = await mysql.createConnection(databaseOptions); 

        if(category === "0" && difficulty === "any") {

            const [rows] = await connection.query("SELECT category,type,difficulty,question,correct_answer,incorrect_answers FROM gmetrivia.questions order by rand() limit "+questions);
            connection.end(); 
            return rows;
        } else /*if(category === "0")*/ {
            //url = `https://opentdb.com/api.php?amount=${questions}&difficulty=${difficulty}&encode=url3986`;
            //console.log("category", category);
            const [rows] = await connection.query("SELECT category,type,difficulty,question,correct_answer,incorrect_answers FROM gmetrivia.questions where category='"+category+"' order by rand() limit "+questions);
            connection.end();
        //} else if(difficulty === "any") {
            //url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&encode=url3986`;        
        //} else {
        //    url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&encode=url3986`;

        };

        // try {
        //     var response = await axios.get(url);
        //     return response.data.results;
        // } catch (error) {
        //     throw new Error("Unable to fetch questions", error);
        // }
        
    },

    shuffleArray: (array) => {
    
        for(var i =0; i < array.length; i++) {
            array[i] = decodeURIComponent(array[i]);
        }

        for(let i = array.length - 1; i >= 0; i--) {
            
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            
        }
        console.log("suffle array", array);
        return array;
        
    }


};

/* function randomQuestions(questions,questionCount) {
    var selectedQuestions = [];
    //console.log('questions inner', questions);

    for(var i=0; i < questions; i++){
        //console.log('Random',getRandomInt(questions));
        //console.log(i);
        selectedQuestions[i] = getRandomInt(questionCount);
        console.log('selectedQuestion[i]',selectedQuestions[i]);
    } 
    return selectedQuestions;
};

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
} */

