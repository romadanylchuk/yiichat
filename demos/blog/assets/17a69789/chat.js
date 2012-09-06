// ChatBox Class

var ChatBox={
    chatid:'ChatBox',
    closetext:'>',
    opentext:'<',
    init: function(id) {
        ChatBox.chatid = id;
        if ($('#'+ChatBox.chatid+' .chatboxbtn').hasClass('right')){
          ChatBox.closetext='>';
          ChatBox.opentext='<';
        }
        else {
          ChatBox.closetext='<';
          ChatBox.opentext='>';
        }
            
        $('#'+ChatBox.chatid).css('width', $('#'+chatid).parent('div').css('width'));
        $('#'+ChatBox.chatid+' .chatboxbtn').click(function(){
                        $('#'+ChatBox.chatid+' .chatboxcontent').toggle("fast",ChatBox.refresh());
                        if ($('#'+ChatBox.chatid+' .chatboxcontent').visible())$('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.closetext);
                         else $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.opentext);
                      });
        $('#'+ChatBox.chatid+' .chatboxbtn').css('padding-top',$('#'+ChatBox.chatid).css('height')/2);
        if ($('#'+ChatBox.chatid+' .chatboxbtn').hasClass('right'))$('#'+ChatBox.chatid+' .chatboxbtn').text('<');
        else $('#'+ChatBox.chatid+' .chatboxbtn').text('>');
    },
    refresh: function() {
      
    }
}
