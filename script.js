document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
	  initialView: 'timeGridWeek',
	  editable: true,
	  headerToolbar: {
		start: 'title',
		center: 'addEventButton, dayGridMonth, timeGridWeek',
		end: 'today prev,next' 
	  },
	  customButtons: {
		addEventButton: {
		  text: 'add event here',
		  click: function() {
			var eventInfo = prompt('Enter a date in YYYY-MM-DD format and enter the event title',"2022-11-03,Project Meeting").split(",");
			var date = new Date(eventInfo[0] + 'T00:00:00'); 
			var eventName = eventInfo[1] || "event"
  
			if (!isNaN(date.valueOf())) { 
			  calendar.addEvent({
				title: eventName,
				start: date,
				allDay: true
			  });
			  alert('Event Added');
			} else {
			  alert('Please check your format');
			}
		  }
		}
	  },
	  eventClick: function(info) {
		alert('Event: ' + info.event.title);
	  }
	});
  
	calendar.render();
  });