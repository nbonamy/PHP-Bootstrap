<?php

class Config {

	// initialize
	public static function init() {
		Config::load();
	}

	// load from configuration file
	public static function load() {
		Globals::$Config = new Config_Lite(CONFIG_FILE);
	}

	// save to file
	public static function save() {
		Globals::$Config->save();
	}

	// sets the configuration value $key to $default if it is not set previously
	public static function setDefaultValue($key, $default) {
		if (Globals::$Config->has(CFG_DEFAULT_SECTION, $key) === false) {
			Globals::$Config->set(CFG_DEFAULT_SECTION, $key, $default);
		}
	}

	// gets a value from default section
	public static function get($key) {
		return Globals::$Config->get(CFG_DEFAULT_SECTION, $key);
	}

	// sets a value in default section
	public static function set($key, $value) {
		return Globals::$Config->set(CFG_DEFAULT_SECTION, $key, $value);
	}

	// sets the configuration value $config to $_REQUEST[$key] as a string
	public static function setStringFromRequet($key, $config) {
		if (isset($_REQUEST[$key])) {
			Globals::$Config->set(CFG_DEFAULT_SECTION, $config, $_REQUEST[$key]);
		}
	}

	// sets the configuration value $config to $_REQUEST[$key] as a boolean
	public static function setBoolFromRequet($key, $config) {
		if (isset($_REQUEST[$key])) {
			Globals::$Config->set(CFG_DEFAULT_SECTION, $config, Globals::$Config->toBool(is_checked($_REQUEST[$key])));
		} else {
			Globals::$Config->set(CFG_DEFAULT_SECTION, $config, Globals::$Config->toBool(false));
		}
	}

}
