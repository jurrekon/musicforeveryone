<?php
class API extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('API_model');
        $this->load->helper('url_helper');
    }

    public function register()
    {
        $test = json_decode($_POST);
        createUser($test);
        $this->load->view('API/register');
    }
}