<?php

// manage include path
set_include_path(get_include_path().PATH_SEPARATOR.'vendor/');

// globals
class Globals {
	public static $Config;
  public static $Success;
  public static $Warning;
  public static $Error;
}

// includes
require_once('Config/Lite.php');
require_once('includes/constants.php');
require_once('includes/twig.php');
require_once('includes/utils.php');
require_once('includes/config.php');

// init stuff
session_start();
date_default_timezone_set('UTC');
