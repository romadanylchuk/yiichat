<?php

/**
 * Message Class file
 *
 *
 * @author Roman Danylchuk <skype romarob2>
 * @link http://
 * @copyright Copyright &copy; 2008-2012 
 * @license http://
 */
/**
 * Message is the class for ...
 *
 *
 */
class Message  extends CActiveRecord{
	/**
	 * The followings are the available columns in table 'tbl_message':
	 * @var integer $id
	 * @var string $username
	 * @var string $message
	 * @var string $time
	 */

	/**
	 * Returns the static model of the specified AR class.
	 * @return CActiveRecord the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{message}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('message, username', 'required'),
			array('message', 'length', 'max'=>100),
			array('username', 'length', 'max'=>128),
		        // The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, message, username, time', 'safe', 'on'=>'search'),
                    );
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'Id',
			'username' => 'Username',
			'message' => 'Message',
			'time' => 'Time',
		);
	}
	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function getLast15()
        {
            $count=Message::model()->count();
            if ($count<15)$count=0;
            else $count-=15;
            $criteria=new CDbCriteria;
	    $criteria->order = '`time` asc';
            $criteria->offset =$count;
            $criteria->limit = '15';
            return Message::model()->findAll( $criteria);// new CActiveDataProvider('Message', array(         'criteria' => $criteria             ));
        }

       
}
?>
