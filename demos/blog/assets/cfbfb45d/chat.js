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
            
        $('#'+ChatBox.chatid).css('width', $('#'+ChatBox.chatid).parent('div').css('width'));
        $('#'+ChatBox.chatid+' .chatboxbtn').click(function(){
                        $('#'+ChatBox.chatid+' .chatboxcontent').toggle("fast",ChatBox.refresh());
                        if ($('#'+ChatBox.chatid+' .chatboxbtn').text()==ChatBox.opentext)
                          $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.closetext);
                        else 
                          $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.opentext);
                      });
        var height =parseInt($('#'+ChatBox.chatid).css('height'));           
        $('#'+ChatBox.chatid+' .chatboxbtn').css('padding-top',(height/2)-10+'px');
        $('#'+ChatBox.chatid+' .chatboxbtn').css('height',height-(height/2)+10+'px');
        $('#'+ChatBox.chatid+' .chatboxcontent').css('height',height+'px');
        var width = $('#'+ChatBox.chatid+' .chatboxcontent').css('width',width-10+'px');
        $('#'+ChatBox.chatid+' .chatboxmess').css('height',height-80+'px');
        $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.opentext);
        
        $('#'+ChatBox.chatid+' .chatboxsend').click(function(){ChatBox.send()});
    },
    refresh: function() {
    },
    send: function(){
        var text = $('#'+ChatBox.chatid+' .chatboxmessage').val();
        alert(text);
        if (text){
         $.post('/',
            {'getmess':text},
            function(data) {
                $('#'+ChatBox.chatid+' .chatboxmess').html(data);
                $('#'+ChatBox.chatid+' .chatboxmessage').val();
            });
        } 
        return false;
    }
}
