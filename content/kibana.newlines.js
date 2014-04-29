$(document).on('click', 'tr[ng-click="toggle_details(event)"]', function(e) {
	var $tbody = $(e.target).parents('tbody');

	$tbody.find('tr[ng-show="event.kibana.details"] td table tbody tr td:nth-child(3)').each(function() {
		var $this = $(this);
		var text = $this.text().replace(/\\r\\n/g, '<br>');

		$this.html(text);
	});
});

$(document).on('scroll', function(e) {
	var elements = this.getElementsByClassName('highlight');

	if (elements.length) {

		for (i = 0; i < elements.length; i++) {
			var element = elements[i];

			element.style.color = '#fff';
			
			if (element.innerText == 'debug') {
				element.style.backgroundColor = '#3F6833';
			} else if (element.innerText == 'informational') {
				element.style.backgroundColor = '#7EB26D';
			} else if (element.innerText == 'notice') {
				element.style.backgroundColor = '#F2C96D';
			} else if (element.innerText == 'warning') {
				element.style.backgroundColor = '#F9934E';
			} else if (element.innerText == 'error') {
				element.style.backgroundColor = '#E24D42';
			} else if (element.innerText == 'critical') {
				element.style.backgroundColor = '#BF1B00';
			} else if (element.innerText == 'alert') {
				element.style.backgroundColor = '#890F02';
			} else if (element.innerText == 'emergency') {
				element.style.backgroundColor = '#58140C';
			}
		}
	}
});