// OLD code is 
function fetchMessag(chat_table) {
    $.post('php/fetch_message.php', {
        chat_table: chat_table
    }, function(message) {
        $('message_container').html(message)
    });
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Current time code formate
/**
 * Fetches messages for a given chat room.
 * 
 * @param {number} chatRoomId Identifies a chat room on the server-side
 * @returns {Promise<string>}
 */
function fetchMsg(chatRoomId) {
    return fetch(`http://localhost:3030/message?chatRoomId=${ encodeURIComponent(chatRoomId) }`).then(response => {
        return response.text();
    });
}

fetchMsg(15).then(html => {
    // document.querySelector('#msg_conainer').innerHTML = html
    console.log(html); // This is your chat room id: 15
});

// !encodeURIComponent sort Description
/*
Not Escaped:       : A-Z a-z 0-9 - _ . ! ~ * ' ( )
Reserved Characters: ";,/?:@&=+$";  //
*/