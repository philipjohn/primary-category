<?php
/*
Plugin Name: Primary Category
Description: Provides a new "Primary Category" setting for individual posts and the ability to filter front-end results by that primary category.
Requires at least: 5.8
Author: Philip John
Author URI: https://philipjohn.me.uk
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: primary-category
Domain path: languages
Update URI: https://github.com/philipjohn/primary-category
*/

namespace PJ;

// No naughtiness, thank you.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Require the autoloader to set everything up.
require_once 'autoload.php';

/**
 * Plugin base class.
 */
class PrimaryCategory {

	/**
	 * PrimaryCategory instance.
	 *
	 * @var PrimaryCategory $instance
	 */
	private static $instance = null;

	/**
	 * Return the class instance, or create a new one.
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;

	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'init', array( $this, 'init' ) );
	}

	/**
	 * Fires when WordPress triggers the 'init' hook.
	 */
	public function init() {
		load_plugin_textdomain(
			'primary-category',
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);
	}
}
PrimaryCategory::get_instance();
