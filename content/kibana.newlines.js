$(document).on('click', 'tr[ng-click="toggle_details(event)"]', function(e) {
	var $tbody = $(e.target).parents('tbody');

	$tbody.find('tr[ng-show="event.kibana.details"] td table tbody tr td:nth-child(3)').each(function() {
		console.log('replace');
		var $this = $(this);
		var text = $this.text().replace(/\\r\\n/g, '<br>');

		$this.html(text);
	});
});