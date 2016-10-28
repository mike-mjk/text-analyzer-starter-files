function main() {
	$('.js-form').submit(function(event) {
		event.preventDefault();
		var text = ($('#user-text').val());

		//get total word count
		var wordCount = text.split(/\s/).length;


		//get unique word count
		var uniqueWords = {};
		var words = text.split(/\s/);
		console.log(words);
		for (var i = 0; i < words.length; i++) {
			if (words[i] in uniqueWords) {
				continue;
			}
			else {
				uniqueWords[words[i]] = 1;
			}
		}
		var unique = Object.keys(uniqueWords).length

		//get avg word length excluding spaces
		spacesStripped = text.replace(/\s|\./g, "")
		var characterCount = spacesStripped.split('').length;
		avgWordLength = characterCount / wordCount;

		//get avg sentence length
		var sentenceCount = text.split(/\n|\.|\?/).length - 1;
		console.log(sentenceCount);
		var avgSentenceLength = wordCount / sentenceCount;

		$('.js-unhide').removeClass('hidden');


		$('.js-count').text(wordCount);
		$('.js-unique').text(unique);
		$('.js-avg-word-length').text(avgWordLength);
		$('.js-avg-sentence-length').text(avgSentenceLength);
	})
}

main();