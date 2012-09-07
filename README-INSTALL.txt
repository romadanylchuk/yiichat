0. Check whether Yii requirements are fulfulled at http://localhost/.../requirements/
1. Create database (default name = idntesttask)
2. Import database structure from demos/blog/protected/data/schema.mysql.sql
3. Configure access to database in demos/blog/protected/config/main.php
4. Change the permissions (0777) on the directory:
   - demos/blog/assets
   - demos/blog/protected/runtime
5. All files of new Chat widget presented in demos/blog/protected/modules/chatbox folder
6. For use modules you must do next:
   - in view-file where you want the widget, you must write
       $this->widget('chatbox.components.ChatBox',array('options'=>''));
   - in demos/blog/protected/config/main.php you must write
       'modules'=>array(
          'chatbox' // this row!
        ),


Username / password pairs: 

demo / demo
user1 / demo
user2 / demo
