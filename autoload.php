<?php
/**
 * Plugin Autoloader
 *
 * @package primary-category
 */

/**
 * Register autoloader
 */
spl_autoload_register(
	function ( $class ) {
		// We use namespaces here.
		$namespace = explode( '\\', $class );
		$root      = array_shift( $namespace );

		// Bail out if we're not in the namespace, even though that would be weird.
		if ( 'PJPC' !== $root ) {
			return;
		}

		// Grab the class name, which is the last bit.
		$class_name = array_pop( $namespace );

		// Build the file name that we expect.
		$filename = 'class-' . $class_name . '.php';

		// Whittle down to just the namespace name.
		$namespace = trim( implode( DIRECTORY_SEPARATOR, $namespace ) );

		// Deal with conventions for Classes vs files.
		$filename  = strtolower( str_replace( '_', '-', $filename ) );
		$namespace = strtolower( str_replace( '_', '-', $namespace ) );

		// Get the plugin path.
		$directory = dirname( __FILE__ );
		if ( ! empty( $namespace ) ) {
			$directory .= DIRECTORY_SEPARATOR . $namespace;
		}

		$file = $directory . DIRECTORY_SEPARATOR . $filename;

		if ( file_exists( $file ) ) {
			require $file;
		}
	}
);
