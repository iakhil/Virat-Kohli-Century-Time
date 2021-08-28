let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs'); 
const express = require('express');
const app = express(); 
app.use(express.static("public")); 
app.set('view engine', 'ejs');

app.get("/", function(req, res)
{ 
axios.get('https://www.espncricinfo.com/player/virat-kohli-253802/bowling-batting-stats')
    .then((response) => {
        if(response.status === 200) {
        const html = response.data;
            const $ = cheerio.load(html);
            const cents = $("span.out-padding");
            const test_cents = cents[8].children[0]['data'];

            // const test_cents = cents[8].children[0]['data'] 
            var countUpDate = new Date("Nov 22, 2019 14:04:25").getTime();

// Update the count down every 1 second
	 const odi_cents = 43; 
            const t20_cents = 0;
	if (Number(odi_cents) + Number(t20_cents) + Number(test_cents) > 70)
		countUpDate = new Date().getTime(); 
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countUpDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // Display the result in the element with id="demo"
  

            console.log(test_cents); // This works! 
            const total_cents = Number(odi_cents) + Number(t20_cents) + Number(test_cents); 
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
	            res.render("index", {
            	testHunds: test_cents, 
            	totalHunds: total_cents, 
            	days: days, 
            	hours: hours, 
            	mins: minutes, 
            	secs: seconds


            })
    //        const cents = $('.out-padding')
           
    //     console.log(cents);  
    }
    }, (error) => console.log(err))});

app.listen(3000, function() {
	console.log("Works!"); 
}); 