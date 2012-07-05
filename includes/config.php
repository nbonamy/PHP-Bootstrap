<?php

// to update string setting
function update_string_config_from_request($key, $config) {
	if (isset($_REQUEST[$key])) {
		Globals::$Config->set(CFG_SECTION_MAIN, $config, $_REQUEST[$key]);
	}
}

// to update bool setting
function update_bool_config_from_request($key, $config) {
	if (isset($_REQUEST[$key])) {
		Globals::$Config->set(CFG_SECTION_MAIN, $config, Globals::$Config->toBool(is_checked($_REQUEST[$key])));
	} else {
		Globals::$Config->set(CFG_SECTION_MAIN, $config, Globals::$Config->toBool(false));
	}
}

// to set a default value
function config_set_default($key, $default) {
	if (Globals::$Config->has(CFG_SECTION_MAIN, $key) === false) {
		Globals::$Config->set(CFG_SECTION_MAIN, $key, $default);
	}
}

// load config and init default values
Globals::$Config = new Config_Lite(CONFIG_FILE);
Globals::$Config->save();
