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
        $this->load->view('API/register');
    }
}