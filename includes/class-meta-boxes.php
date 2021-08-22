<?php
/**
 * Add meta boxes to the post editor.
 *
 * @package primary-category
 */

namespace PJPC\Includes;

/**
 * Meta Box class
 */
class Meta_Boxes {
	/**
	 * Class runner.
	 *
	 * @since 1.0.0
	 */
	public function run() {
		add_action( 'init', array( $this, 'register_meta_boxes' ) );
	}

	/**
	 * Register Meta Boxes.
	 */
	public function register_meta_boxes() {

		// Register our custom field for the primary category.
		register_post_meta(
			'post',
			'_pjpc_primary_category',
			array(
				'object_subtype'    => 'post',
				'type'              => 'integer',
				'show_in_rest'      => true,
				'sanitize_callback' => 'inval', // Expexting a term ID.
				'auth_callback'     => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

	}
}
