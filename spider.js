var request = require('request');
var cheerio = require('cheerio');

request('https://www.imdb.com/chart/moviemeter', function(err, res, body) {
	if(err) {
		console.log('erro: ' + erro);
	}

	var $ = cheerio.load(body);

	$('.lister-list tr').each(function() {
		var title = $(this).find('.titleColumn a').text().trim();
		var rating = $(this).find('.imdbRating string').text().trim();

		console.log('Título: ' + title);
	});

});