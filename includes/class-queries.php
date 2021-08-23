<?php
/**
 * Tweak queries when the user has chosen a primary category.
 *
 * @package primary-category
 */

namespace PJPC\Includes;

/**
 * Queries class
 */
class Queries {

	/**
	 * The name of our cookie.
	 */
	private $cookie_name = 'pjpc_primary_cat';

	/**
	 * Class runner.
	 *
	 * @since 1.0.0
	 */
	public function run() {
		add_action( 'pre_get_posts', array( $this, 'pre_get_posts' ) );
	}

	/**
	 * Filter the query where we need to.
	 */
	public function pre_get_posts( $query ) {

		// We don't need to do anything if there isn't a cookie set.
		if ( isset( $_COOKIE[ $this->cookie_name ] ) ) {

			// Only filter the main query on the home page, for now.
			if ( $query->is_main_query() && $query->is_home() ) {

				// Get the category ID from the cookie value.
				$cat = get_term_by(
					'slug',
					sanitize_text_field( $_COOKIE[ $this->cookie_name ] ),
					'category'
				);

				// If we have a valid category, filter for it in the existing
				// main query.
				if ( is_a( $cat, 'WP_Term' ) ) {
					$query->set(
						'meta_query',
						array(
							array(
								'key'     => '_pjpc_primary_category',
								'value'   => $cat->term_id,
								'compare' => '=',
							),
						)
					);
				}
			}
		}

		return $query;
	}

}
