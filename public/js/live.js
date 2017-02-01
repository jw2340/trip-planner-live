'use strict'
// array to store trip day itineraries
var tripDays = [
    { hotel: null, restaurants: [], activities: [] }
]
var hotelSelect = $('select[data-type="hotel"]');
var restaurantSelect = $('select[data-type="restaurant"]');
var activitySelect = $('select[data-type="activity"]');
// x from the index.html
// y from above
function appendOption(x, y) {
    for (var i = 0; i < x.length; i++) {
        $(`select[data-type="${y}"]`).append(`<option>${x[i].name}</option>`);
    }
}
// append options for select form
appendOption(hotels, 'hotel');
appendOption(restaurants, 'restaurant');
appendOption(activities, 'activity');
// add hotel button listener
$('button[data-action="add_hotel"]').click(function() {
    var selectedHotel = $('#hotel-choices').val();
    $(`.itinerary-item-hotel`).append('<span class="title">' + selectedHotel + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    for (var i = 0; i < hotels.length; i++) {
        if (hotels[i].name === selectedHotel) {
            var hotelLocation = hotels[i].place.location;
            drawMarker('hotel', hotelLocation);
        }
    }
    // get current day index
    // set selectedHotel to tripDays[current day index].hotel
    tripDays[$('.current-day').text() - 1].hotel = selectedHotel;
});
// add restaurant button listener
$('button[data-action="add_restaurant"]').click(function() {
    var selectedRestaurant = $('#restaurant-choices').val();
    $(`.itinerary-item-restaurant`).append('<span class="title">' + selectedRestaurant + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].name === selectedRestaurant) {
            var restaurantLocation = restaurants[i].place.location;
            drawMarker('restaurant', restaurantLocation);
        }
    }
    // get current day index
    // add selectedRestaurant to tripDays[current day index].restaurants
    tripDays[$('.current-day').text() - 1].restaurants.push(selectedRestaurant);
    console.log('RESTAURANTSSSSSS!!!!!!!!', tripDays);
});
// add activity button listener
$('button[data-action="add_activity"]').click(function() {
    var selectedActivity = $('#activity-choices').val();
    $(`.itinerary-item-activity`).append('<span class="title">' + selectedActivity + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    for (var i = 0; i < activities.length; i++) {
        if (activities[i].name === selectedActivity) {
            var activityLocation = activities[i].place.location;
            drawMarker('activity', activityLocation);
        }
    }
    // get current day index
    // add selectedActivity to tripDays[current day index].activities
    tripDays[$('.current-day').text() - 1].activities.push(selectedActivity);
    console.log('ACTIVITY!!!!!!!!', tripDays);
});
// itinerary remove button listener
$('#itinerary').on('click', '.remove', function(event) {
    //
    // remove sibling
    $(this).prev().remove()
        // remove button
    $(this).remove();
});
// add day button listener
$('button#day-add').click(function() {
    var day = tripDays.length + 1;
    var newDayButton = '<button class="btn btn-circle day-btn current-day">' + day + '</button>';
    $('.current-day').removeClass('current-day');
    $('#day-add').before(newDayButton);
    $(`.itinerary-item-hotel`).empty();
    $(`.itinerary-item-restaurant`).empty();
    $(`.itinerary-item-activity`).empty();

    tripDays.push({ hotel: null, restaurants: [], activities: [] });
    console.log('ADDDD NEWW DAYYYYY!!!!!!!!', tripDays);
    $('.btn.btn-circle.day-btn').click(function() {
        var hotelIdx = tripDays[$(this).text() - 1].hotel;
        if (hotelIdx === null) {
            console.log('AFTER', hotelIdx);
            // $(`.itinerary-item-hotel`).append('<span class="title">'+ hotelIdx + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            return;
        } else if (hotelIdx !== null) {
            console.log('HOTEL', hotelIdx);
            $(`.itinerary-item-hotel`).append('<span class="title">'+ hotelIdx + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
        }
        // var newDayButton = '<button class="btn btn-circle day-btn">' + day + '</button>';
    // change current day listener
            console.log('BEFORE', hotelIdx);
    // when day button is clicked, remove current-day class from current button
        if(!$(this).attr("class").includes('current-day')) {
    // add current-day class to button that was clicked
            $(this).addClass('current-day');
            //remove all prev day data for new added day
        }
        console.log('CLASS', $(this).attr('class'));
    });
});
// remove day button listener
