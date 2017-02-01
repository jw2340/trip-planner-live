'use strict'

// array to store trip day itineraries
var tripDays = [
  {hotel: null, restaurants: [], activities: []}
]

var hotelSelect = $('select[data-type="hotel"]');
var restaurantSelect = $('select[data-type="restaurant"]');
var activitySelect = $('select[data-type="activity"]');
// x from the index.html
// y from above
function appendOption (x, y) {
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
  $(`.itinerary-item-hotel`).append(`<span class="title">${selectedHotel}</span>
                                    <button class="btn btn-xs btn-danger remove btn-circle">x</button>`);
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
  $(`.itinerary-item-restaurant`).append(`<span class="title">${selectedRestaurant}</span>
                                    <button class="btn btn-xs btn-danger remove btn-circle">x</button>`);
  for (var i = 0; i < restaurants.length; i++) {
    if (restaurants[i].name === selectedRestaurant) {
      var restaurantLocation = restaurants[i].place.location;
      drawMarker('restaurant', restaurantLocation);
    }
  }

  // get current day index
  // add selectedRestaurant to tripDays[current day index].restaurants

});

// add activity button listener
$('button[data-action="add_activity"]').click(function() {
  var selectedActivity = $('#activity-choices').val();
    $(`.itinerary-item-activity`).append(`<span class="title">${selectedActivity}</span>
                                    <button class="btn btn-xs btn-danger remove btn-circle">x</button>`);
  for (var i = 0; i < activities.length; i++) {
    if (activities[i].name === selectedActivity) {
      var activityLocation = activities[i].place.location;
      drawMarker('activity', activityLocation);
    }
  }

  // get current day index
  // add selectedActivity to tripDays[current day index].activities

});

// itinerary remove button listener
$('#itinerary').on('click', '.remove', function (event) {

  //

  // remove sibling
  $(this).prev().remove()
  // remove button
  $(this).remove();

});

// add day button listener
$('button#day-add').click(function() {
  var day = tripDays.length + 1;
  var newDayButton = `<button class="btn btn-circle day-btn">${day}</button>`;

  $('#day-add').before(newDayButton);

  tripDays.push({hotel: null, restaurants: [], activities: []});
});

// change current day listener
  // when day button is clicked, remove current-day class from current button
  // add current-day class to button that was clicked


// remove day button listener

