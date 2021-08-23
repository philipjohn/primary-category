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
	}

	/**
	 * Enqueue block assets.
	 *
	 * @since 1.0.0
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
}
