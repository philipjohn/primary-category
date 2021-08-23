<?php
/**
 * Enqueue the assets.
 *
 * @package primary-category
 */

namespace PJPC\Includes;

/**
 * Enqueue class.
 */
class Enqueue {

	/**
	 * Class runner.
	 *
	 * @since 0.1.0
	 */
	public function run() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_enqueue_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
	}

	/**
	 * Enqueue block assets.
	 *
	 * @since 0.1.0
	 */
	public function editor_enqueue_assets() {

		// Register the block script.
		wp_enqueue_script(
			'pjpc-editor-control',
			PJPC_PLUGIN_URL . 'dist/sidebar.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-plugins', 'wp-edit-post', 'wp-data' ),
			PJPC_PLUGIN_VERSION,
			true
		);

		wp_set_script_translations(
			'pjpc-editor-control',
			'primary-category',
			PJPC_PLUGIN_DIR . 'languages/'
		);
	}

	/**
	 * Enqueue frontend assets.
	 *
	 * @since 0.1.0
	 */
	public function wp_enqueue_scripts() {
		// Only enqueue on the blog home, since that's the only place we want
		// to filter at the moment.
		if ( is_home() ) {
			wp_enqueue_script(
				'primary-category-dropdown',
				PJPC_PLUGIN_URL . 'dist/dropdown.js',
				array(),
				PJPC_PLUGIN_VERSION,
				true
			);
			wp_enqueue_style(
				'primary-category-dropdown-style',
				PJPC_PLUGIN_URL . 'dist/style.css',
				array(),
				PJPC_PLUGIN_VERSION
			);
		}
	}
}
