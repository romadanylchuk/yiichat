// ChatBox Class

var ChatBox={
    chatid:'ChatBox',
    chaturl:'',
    closetext:'>',
    opentext:'<',
    isRight:true,
    parentwhidth:0,
    init: function(id,chaturl) {
        ChatBox.chatid = id;
        if ($('#'+ChatBox.chatid+' .chatboxbtn').hasClass('right')){
          ChatBox.closetext='>';
          ChatBox.opentext='<';
          isRight=true;
        }
        else {
          ChatBox.closetext='<';
          ChatBox.opentext='>';
          isRight=false;
        }
            
        ChatBox.chaturl=chaturl;
        ChatBox.parentwhidth = parseInt($('#'+ChatBox.chatid).parent('div').css('width'));
        
        $('#'+ChatBox.chatid+' .chatboxbtn').click(function(){
              $('#'+ChatBox.chatid+' .chatboxcontent').toggle("fast",function() {ChatBox.refresh();});
            if ($('#'+ChatBox.chatid+' .chatboxbtn').text()==ChatBox.opentext)
              $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.closetext);
            else 
              $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.opentext);
        });
        var height =parseInt($('#'+ChatBox.chatid).css('height'));           
        $('#'+ChatBox.chatid+' .chatboxbtn').css('padding-top',(height/2)-10+'px');
        $('#'+ChatBox.chatid+' .chatboxbtn').css('height',height-(height/2)+10+'px');
        $('#'+ChatBox.chatid+' .chatboxcontent').css('height',height+'px');
        //$('#'+ChatBox.chatid+' .chatboxcontent').css('width',width-10+'px');
        $('#'+ChatBox.chatid+' .chatboxmess').css('height',height-80+'px');
        $('#'+ChatBox.chatid+' .chatboxbtn').text(ChatBox.opentext);
        
        $('#'+ChatBox.chatid+' .chatboxsend').click(function(){ChatBox.send()});
        
        ChatBox.onwinresize();
        ChatBox.refresh();
        
        $(window).resize(function () {ChatBox.onwinresize()}); 
        
        setInterval(function(){
            ChatBox.refresh();
         }, 5000);       
         
         $(window).scroll(function () {
	   if ($(this).scrollTop() > 100) {
	     $('#back-top').fadeIn();
   	   } else {
	     $('#back-top').fadeOut();
    	   }
	});

    },
    onwinresize:function () { 
            var body = parseInt($('body').css('width'))
            if (ChatBox.parentwhidth<body)body=(body-ChatBox.parentwhidth)/2;
            else body=0;
            if (isRight)$('#'+ChatBox.chatid).css('right',body+'px');
            else $('#'+ChatBox.chatid).css('left',body+'px');
    },
    
    blockheight: function() {
        var height=0;
        $('#'+ChatBox.chatid+' .chatboxitem').each(function(i,elem){
         height = height + parseInt($(elem).css('height'));   
        })
        return height;
    },
    
    refresh: function() {
        if ($('#'+ChatBox.chatid+' .chatboxcontent').is(':visible')){
         //alert($('#'+ChatBox.chatid+' .chatboxmess').scrollTop()+' '+ChatBox.blockheight());
         
         $.post(ChatBox.chaturl,
            '',
            function(data) {
                $('#'+ChatBox.chatid+' .chatboxmess').html(data);
                $('#'+ChatBox.chatid+' .chatboxmessage').val('');
            });
        }    
    },
    send: function(){
        var text = $('#'+ChatBox.chatid+' .chatboxmessage').val();
        if (text){
         $.post(ChatBox.chaturl,
            {'message':text},
            function(data) {
                $('#'+ChatBox.chatid+' .chatboxmess').html(data);
                $('#'+ChatBox.chatid+' .chatboxmessage').val('');
            });
        } 
        return false;
    }
}
