$(document).ready(function() {
	//dynamically

	$('#sushi-submit').on('click', function(e) {
		e.preventDefault();

		const sushiObj = {
			sushi_name: $('#sushi-name')
				.val()
				.trim(),
			devoured: 0
		};
		$.ajax({
			url: '/api/sushi',
			method: 'POST',
			data: sushiObj
		}).then(function(response) {
			console.log(response);

			window.location.reload();
		});
	});

	$(document).on('click', '.devour', devoursushi);

	function devoursushi() {
		const sushiObj = {
			id: $(this).attr('data-id'),
			devoured: true
		};

		$.ajax({
			url: '/api/sushi',
			method: 'PUT',
			data: sushiObj
		}).then(function(response) {
			console.log(response);

			window.location.reload();
		});
	}
});
