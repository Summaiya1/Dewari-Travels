const navbar = document.getElementById("navbarTogglerDemo02");
const navbar_items = navbar.querySelectorAll("li");

for(const item of navbar_items)
{
    item.addEventListener("mouseover",function(event){ item.classList.add("box");});
}

for(const item of navbar_items)
{
    item.addEventListener("mouseout",function(event){ item.classList.remove("box");});
}

var card_header = ['Day 1','Day 2','Day 3','Day 4','Day 5', 'Day 6', 'Day 7','Day 8','Day 9','Day 10','Day 11','Services Included','Services Excluded','Trip Cost'];
var card_text =['Departure for Rawalpindi By Train at 09:00 pm','Reach Islamabad  Visit Monal (Dinner not included) Eat according to your preference Pick up members from Islamabad',
'Departure for Chillas at 03:00 AM, Breakfast in Besham, Reach Chillas at 06:00 PM, Dinner & Night Stay In Chillas',
'Breakfast at 08:00 AM Departure for Hunza, Short Stay at View point of Junction of 3 Great Mountain Ranges, Stop at Rakaposhi View Point, Visit altit/baltit forts, Arrival at Hunza in evening, Dinner & Night Stay in Hunza',
'Early Morning Breakfast at 09:00 AM, Visit Altit & Baltit Forts (Tickets not included), Visit Ataabad Lake, Visit PAK CHINA BORDER (Depends on condition), Back to Hunza in Evening, Visit Hunza Bazar, BBQ, Bonfire & Musical Night, Night Stay in Hunza'
,'Departure for Raikot 08:00 AM, Arrival at raikot 10:00 AM, Departure for Tattu Village on 4X4 Jeeps (Most Adventurous Jeep Track), Reach Tattu at 11:30, Start Trekking (03 Hours minimum), Arrival at fairy Meadows in evening, Dinner & Bonfire, nightstay in camps',
'Explore snow covered Fairy Meadows,Trek towards bayal camp (optional), Bonfire, Nightstay in Fairy Meadows camps,Breakfast & Dinner Included',
'After Breakfast, Hike back & jeep ride to Raikot Bridge, Transfer to our vehicle and depart to Besham or Chillas, Overnight Stay at Besham/Chillas, Food: Breakfast + Dinner',
'Breakfast at 08:00 AM, Departure for Islamabad, Reach Isb at 07:00, Dinner at Savour Foods & nightstay for Karachi members only',
'Drop at station, Departure for Karachi by Train',
'Reach Karachi in the morning',
'Transport, Fueling & Tolls, Accommodation (3 - 4 persons sharing in hotels & Groups in Huts), Food (As mentioned in the plan), Jeep Charges for Fairy Meadows, Guided Trip, First Aid Kit ',
'Liability,  Extra expenses due to landslides\road blocks, Tea, Mineral Water and Cold drinks expense,  Porter (For carrying personal equipment), Extra expenses due to the acts of nature and political reasons etc., Any item not mentioned above, Medication, evacuation and rescue etc. in emergencies, Personal insurances of clients, Laundry, beverages & phone calls or other expenses of personal nature',
'20500 per person from Islamabad (7days 6nights), 27500 per person from Karachi through Economy Class Train, 37000 per person from Karachi through Business Class Train, Group Discount Available.* 1500/NIGHT extra will be charged from couples for separate room throughout the trip'];

var card_header2 =['Day 01','Day 01: Refreshments',' Day 01: Games And Free Time','Day 02',' Services Included' , ' Services Excluded'];
var card_text2 = ['07:00 am: Meetup in Karachi, 07:30 am: Departure for Hub, 09:00 am: Breakfast at Hub (Menu: Anda, Paratha, Chai), 10:00 am: Departure for Kund Malir, 01:00 pm: Arrival at Kund Malir'
,'1:30 pm: Departure for Ormara, 03:30 pm: Arrival at Ormara Beach, 04:00 pm: Lunch at Ormara Beach (Menu: Chicken Biryani and Drinks)',
'05:30 pm: Sunset and Evening Tea, 09:00 pm: Dinner at Ormara Beach (Menu: Chicken Karhai, Roti, Drinks), 10:30 pm: Start of Bonfire with Tea & Music Session, 1:30 pm: Start of Movie Screening, 12:30 am: Tea during movie, 01:30 am: National Anthem, 02:00 am: Rest time / Star gazing',
'05:30 am: Wakeup call, 06:00 am: Sunrise view at Beach along with Games, 08:00 am: Breakfast at Ormara (Menu: Anda, Paratha, Chai), 10:00 am: Departure for Princess of Hope, 11:30 am: Arrival at Princess of Hope & Great Sphinx, 12:30 pm: Departure for Hub, 03:30 pm: Lunch at Hub (Menu: Chicken Biryani,Drinks), 04:30 pm: Departure for Karachi, 06:00 pm: Back to Karachi',
'✓ Luxury Transport (Air Conditioned), ✓ Beach Resorts (3 Person sharing), ✓ Camp (3-4 Person Sharing), ✓ Tour Guide, ✓ Meals, ✓ Photography, ✓ Bonfire, ✓ Movie Night & Music, ✓ Snacks Stall for Movie (Self-purchase), ✓ Games',
'✓ Personal equipment/medicine, ✓ Extras at hotels like hot / soft drinks, extra water bottles, extra snacks, laundry., ✓ Any kind of expense incurred, if anyone leaves trip at any stage due to any reason., ✓ Personal expenditure., ✓ Any items or services not mentioned in this package.'];

const trip = document.getElementById('trip_card');

var trip_name = trip.getElementsByTagName('h5');
var H = trip_name[0].innerText;

const button = trip.getElementsByTagName('a');
button[0].addEventListener('click',fun);

function fun(e)
{
    document.getElementById("trip_card").style.display ="none";
    
    document.getElementById("trip_card2").style.display ="none";

    const details = document.getElementById('collection');
    const trip_heading = (`<h1 id='name1'>${H}</h1>`);
    details.innerHTML += trip_heading;



    for(let i = 0 ; i <= 13 ; i += 1 )
    {

    const cards = (`
    <div class="card text-white bg-info mb-3 set x" style="max-width: 18rem;">
    <div class="card-header">${card_header[i]}</div>
    <div class="card-body">
    <p class="card-text">${card_text[i]}</p>
    </div>
    </div>`);
    details.innerHTML += cards;

    }



}

const trip2 = document.getElementById('trip_card2');

var trip_name2 = trip2.getElementsByTagName('h5');
var H2 = trip_name2[0].innerText;

const button2 = trip2.getElementsByTagName('a');
button2[0].addEventListener('click',fun1);


function fun1(e)
{
    document.getElementById("trip_card").style.display ="none";
    
    document.getElementById("trip_card2").style.display ="none";

    const details = document.getElementById('collection');
    const trip_heading2 = (`<h1 id='name'>${H2}</h1>`);
    details.innerHTML += trip_heading2;



    for(let i = 0 ; i <= 5 ; i += 1 )
    {

    const cards = (`
    <div class="card text-white bg-info mb-3 set x" style="max-width: 18rem;">
    <div class="card-header">${card_header2[i]}</div>
    <div class="card-body">
    <p class="card-text">${card_text2[i]}</p>
    </div>
    </div>`);
    details.innerHTML += cards;

    }



}



