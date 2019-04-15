<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
//To Solve File REST_Controller not found
require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';
if(in_array($_SERVER['REMOTE_ADDR'], [ '127.0.0.1','::1']))
{
   header('Access-Control-Allow-Origin: *'); 
} 


/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Api extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['users_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['users_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['users_delete']['limit'] = 50; // 50 requests per hour per user/key
    }

    
	public function distribute_post(){
        $count=$this->input->post('player_count');
        if(!isset($count))
            {
                $this->response(['msg'=>"You must submit player count."],500);
            }
        else if (!is_numeric($count))
            {
                 $this->response(['msg'=>"Submitted value should be number only."],500);
            }
        else if ($count<1)
            {
                $this->response(['msg'=>"Submitted value should be bigger than 1."],500);
            }
            $cards = $this->shuffle_cards();
           $result=[];
            while(count($cards)>0){
                for($i=0;$i<$count;$i++){
                    if(!isset($result[$i])) $result[$i]=[];
                    $element = array_pop($cards);
                    if(null!==$element)
                    array_push($result[$i],$element);
                }
            }
            $this->response($result,200);
            // $this->response(array_chunk($cards,$chunk),200); // return array of arrays, and each array contains player cards
    }

// this function will generate array of Cards [0,1,....,51] as [H-3,D-5,.....];
    private function shuffle_cards(){
        $cards = array(
            'Diamond' => ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'X', 'J', 'Q', 'K'],
            'Heart' => ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'X', 'J', 'Q', 'K'],
            'Club' => ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'X', 'J', 'Q', 'K'],
            'Spades' => ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'X', 'J', 'Q', 'K' ]
        );
        $result=array();
        foreach($cards as $key=>$value){
            foreach($value as $ele){
                $element_string = $key[0].'-'.$ele;
                array_push($result,$element_string);
            }
        }
        shuffle($result);
        return $result;
    }
}
