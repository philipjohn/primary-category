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

namespace PJPC;

// No naughtiness, thank you.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'PJPC_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'PJPC_PLUGIN_URL', plugins_url( '/', __FILE__ ) );
define( 'PJPC_PLUGIN_VERSION', '0.1.0' );

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
		add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ) );
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

	/**
	 * Fires once WordPress has loaded all the plugins. What a surprise.
	 */
	public function plugins_loaded() {

		// Make our scripts happen.
		$this->admin_enqueue = new \PJPC\Includes\Enqueue();
		$this->admin_enqueue->run();

		// Set up our editor meta boxes.
		$this->meta_boxes = new \PJPC\Includes\Meta_Boxes();
		$this->meta_boxes->run();

		// Filter the queries when a cookie is present.
		$this->queries = new \PJPC\Includes\Queries();
		$this->queries->run();

		// Print our category selector.
		$this->frontend = new \PJPC\Includes\Frontend();
		$this->frontend->run();

	}

}
PrimaryCategory::get_instance();
