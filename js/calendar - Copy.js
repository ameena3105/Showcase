$( document ).ready(function() {
					
	//Calender
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2016-08-29',
		selectable: true,
		selectHelper: true,
		select: function(start, end) {
			var open = $('#modal1').openModal();
			
			var title = $("#eventTitle").val();
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'All Day Event',
				start: '2016-08-01'
			},
			{
				title: 'Long Event',
				start: '2016-08-07',
				end: '2016-08-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-08-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-08-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2016-08-11',
				end: '2016-06-13'
			},
			{
				title: 'Meeting',
				start: '2016-08-12T10:30:00',
				end: '2016-08-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2016-08-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2016-08-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2016-08-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2016-08-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2016-08-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2016-08-28'
			}
		]
	});
	
});