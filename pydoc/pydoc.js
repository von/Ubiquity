
CmdUtils.CreateCommand({
    name: "pydoc",
    takes: {"Python term to search for": noun_arb_text},
    author: "Von Welch",
    email: "von@vwelch.com",
    homepage: "http://www.vwelch.com/ubiquity/pydoc.html",
    preview: "Uses http://docs.python.org/search.html to lookup python terms.",
    execute: function( term ) {
	var urlTemplate = "http://docs.python.org/search.html?q={QUERY}"
	var urlString = urlTemplate.replace("{QUERY}", term.text);
	Utils.openUrlInBrowser(urlString);
    }
})
