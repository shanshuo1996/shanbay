function my_add_vocalulary(my_word){
	$('#to_add_vocabulary').val(my_word);
	add_vocabulary();
}

function my_get_worddom(my_word){
	var table = $("table.table")[0];

	for (var i = 0 ; i < table.rows.length ; i++) {
		var this_dom = table.rows[i];
		var word = this_dom.getElementsByClassName("span2")[0].innerText;
		if(word == my_word){
			return this_dom;
		}
	}
}

function my_edit_definition(my_word,definition){
	var this_dom = my_get_worddom(my_word);
	var wordlist_id = $('#wordlist-id').text();
	var vocabulary_id = this_dom.getElementsByClassName("span1")[0].firstElementChild.attributes['value'].value;

    var definition = $.trim(definition);
    var url = "/wordlist/vocabulary/definition/edit/";
    var data = {
        'vocabulary_id': vocabulary_id,
        'wordlist_id': wordlist_id,
        'definition': definition
    };
    console.log(data);
    $.post(url, data, function(res) {
        if (res.status == 0) {
            this_dom.getElementsByClassName('wordlist-vocabulary-definition')[0].innerText = definition;
        } else {
            alert('failed, please contect admin')
        }
    });
}


my_edit_definition("hello","helloworld")