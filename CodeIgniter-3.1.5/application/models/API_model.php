<?php
	class API_model extends CI_Model{
		public function __construct(){
			$this->load->database();
		}
		
		function createUser($data){
			$this->db->insert('users', $data);
		}
    }