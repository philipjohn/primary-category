<?php
/**
 * Provide a mechanism for choosing a primary category on the front end.
 *
 * @package primary-category
 */

namespace PJPC\Includes;

/**
 * Frontend class
 */
class Frontend {

	/**
	 * Class runner.
	 *
	 * @since 1.0.0
	 */
	public function run() {
		add_action( 'loop_start', array( $this, 'loop_start' ) );
	}

	/**
	 * Register our block.
	 */
	public function loop_start() {

		// We should definitely turn this into a block in a future version.
		?>
		<div id="pjpc_primary_category">
			<p>
				<?php
				// Check if we already have a cookie set.
				$current_value = ( isset( $_COOKIE['pjpc_primary_cat'] ) ) ?
					$_COOKIE['pjpc_primary_cat'] :
					0;

				// Display the drop down to allow people to filter content.
				_e( 'Only show content from: ', 'primary-category' );
				wp_dropdown_categories(
					array(
						'orderby'         => 'name',
						'order'           => 'ASC',
						'name'            => 'primary-category-select',
						'value_field'     => 'slug',
						'hide_if_empty'   => true,
						'show_option_all' => __( 'All categories', 'primary-category' ),
						'selected'        => $current_value,
					)
				);
				?>
		</div>
		<?php

	}

}
